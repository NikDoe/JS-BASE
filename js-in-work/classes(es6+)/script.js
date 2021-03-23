//1 до появления es6 стандарта классы в js создавали при помощи функций конструкторов
//2 ее название писали с большой буквы чтобы визуально обозначить для других разработчиков, что это класс
const _Animal = function (options) {
    //3 мы могли передавать какие-то поля из обьекта options
    this.name = options.name;
    this.color = options.color;

    //6 мы можем создавать поля которые будут методами для наших экземпляров, однако лучше создавать методы через прототипирование
    //6.1 если мы создадим метод таким способом то в будущем мы не сможем его переопределить
    // this.voice = function() {
    //   console.log('Base voice from ', this.name)
    // }
};

//7 если же мы создадим метод через прототипы, то в будущем мы сможем его как-то изменять или расширять
_Animal.prototype.voice = function () {
    console.log('Base voice from ', this.name);
};

//4 теперь чтобы использовать данный класс нам было необходимо создать его экземпляр с помозью ключевого слова new
const _dog = new _Animal({
    name: 'Rex',
    color: '#fff'
});
//5 эта запись раносильно что если бы мы просто создали обьект с какими-то полями, но у этого обьекта не было бы родитяли Animal
// const dog = {name: 'Rex', color: '#fff'}

_dog.voice(); //Base voice from  Rex

//8 как реализовывалось наследование в es5
//8.1 допустим мы хотим создать новый класс Cat котороый должен наследоваться от Animal

const _Cat = function (options) {
    //8.2 перевый делом нам нужно вызвать родительский конструктор чтобы проинициализировать инстанс
    //8.3 здесь мы можем воспользоваться контекстом, с помоощью метода apply
    //8.4 но сначало мы должны делегировать(передать эту часть) наши поля name и color в Animal
    _Animal.apply(this, arguments); //8.5 мы передаём контекст нашего Cat и далее псевдо массив arguments, вместо arguments можно было воспользоваться оператором рест, и вместо options передавать (...args),а в apply соответственно получать (this, args)

    //8.6 далее мы можем задават поля которые будут относиться только к Cat, для dog и Animal они будут уже недоступны
    this.hasTail = options.hasTail;
    this.type = 'cat';
};

//8.10 чтобы дочерние классы (Cat) которые наследуются от базовых классов (Animal) получили прототип, нам необходимо переопределить его прототип
_Cat.prototype = Object.create(_Animal.prototype); //мы говорим что прототип класса Cat должен наследоваться от прототипа класса Animal
//8.11 также корректнее указать класс конструктора который будет вызываться
_Cat.prototype.constructor = _Cat;

//8.7 далее мы как обычно создавали новый экземеляр от нашего класса Cat
const _cat = new _Cat({
    name: 'Murzik',
    color: '#000',
    hasTail: true
});
//8.8 который так же обладал и методами которые есть у Animal, таким образом мы убедились что наследование работает
//8.9 однако это не прототипное наследование
console.log(_cat.voice());

//9 так как мы создавали метод voice именно через прототип то теперь мы можем его переопределить
_Animal.prototype.voice = function () {
    console.log('This sound goes from: ', this.name);
};

//10 либо же мы можем его переопределить только для нашего Cat, потому что у нас присутствует наследование
_Cat.prototype.voice = function () {
    //Animal.prototype.voice.apply(this, arguments) //для тех случаев когда мы полностью не хотим перетирать родительский метод, и сначало вызвать его
    console.log(this.name + ' says myay');
};

//с появлением es6 стандарта у нас появились классы, которые по сути делают тоже самое что и функции конструкторы выше, только с более удобным синтаксисом

//11 теперь мы создаем классы с помощью ключевого слова class
class Animal {
    //12 если мы хотим задавать какие либо поля в нашем классе то в первую очередь мы должны опеределить функцию конструктор
    constructor(options) {
        //12.1 далее точно также задаем наши поля
        this.name = options.name;
        this.color = options.color;
    }

    //13 теперь если нам нужно создать какой-то метод, нам не нужно обращаться к прототипу или описывать его в конструкторе
    //теперь метод помещается автоматически в прототип нашего класса
    voice() {
        console.log('Base voice from ', this.name);
    }
}

//14 создаем экземпляр от нашего класса мы точно также
const dog = new Animal({
    name: 'Rex',
    color: 'white'
});

//15 теперь если нам необходимо создать класс Cat который будет наследоваться от Animal, то мы можем использовать ключевое слово extends

class Cat extends Animal {
    //15.1 мы точно также создаем определяем констурктор
    constructor(options) {
        //15.2 однако теперь чтобы делегировать, мы должны вызвать родительский конструктор, с помощью метода super
        super(options); //аналог строчки _Animal.apply(this, arguments);

        //16 ну дальше мы задаем какие-то определнные поля которые будут пренадлежать только нашему Cat
        this.hasTail = options.hasTail;
        this.type = 'cat';
    }

    //17 перезаписывать методы мы можем теперь прямо в нашем классе, не используя опять никаких прототипо
    voice() {
        super.voice(); //аналог строчки Animal.prototype.voice.apply(this, arguments) чтобы просто вызвать родительский метод voice
        console.log(this.name + ' says myay');
    }
}

//18 аналогично создаем экземпляр от нашего дочернего класса
const cat = new Cat({
    name: 'Murzik',
    color: '#000',
    hasTail: true
});

// Examples
Object.prototype.print = function () {
    console.log(`I am object: `, this);
};

cat.print();

Array.prototype.mapAndLog = function () {
    console.log('Array to map', this);
    return this.map.apply(this, arguments);
};

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2));

String.prototype.toTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`;
};

console.log('eminem'.toTag('strong'));
console.log('eminem'.toTag('em'));

Number.prototype.toBigInt = function () {
    return BigInt(this);
};


const number = 42;
console.log(number.toBigInt());