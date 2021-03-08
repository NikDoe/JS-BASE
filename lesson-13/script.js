//обьекты
//создадим новый обьект добавим  него пару свойств и их значений, по другому свойства называются ключами

const obj = {
    name: 'NikDoe',
    age: 28,

    anotherParam: 'Params',

    //свойства могут быть любым типом данным даже обьектами
    body: {
        weight: 90,
        growth: 187,
    }
};

// чтобы обратится к какому-то из свойств и узнать его значение мы можем

console.log(obj.name);

//чтобы узнать свойства обьекта внутри другого обьекта

console.log(obj.body.weight);

//альтернативная запись console.log(obj['body']['weight']);

// чтобы удалить какое свойство вместе с его значением

delete obj.anotherParam;
console.log(obj);

//не смотря на то что мы обьявиили наш обьект через константу, мы всё равно можешь менять его внутренность
//все потому что в js прямых констант нету

// для перебора обьекта и дальнейшего с ним взаимодействия можно использовать специалный цикл

for (let key in obj) {
    console.log(`свойство ${key} : значение ${obj[key]}`); //запись obj[key] равнозначна записи обьект[свойство] = значение
    //в данном случае мы просто в переменную key помещаем имя нашего свойства
    //это удобно в тех случаях когда свойство состоит из нескольких слов
    //или когда свойство вычисляется динамически и заранее неизвество
    //запись obj.key допустима только в тех случаях когда значение не вычисляется а известно постоянно
}

//цикл for in сработает столько раз сколько свойств в обьекте

//запись [object object] в консоли, говорит о том, что при переборе через for in цикл дошел до свойства которое не смог преобразовать в строку, потому что оно является обьектом

//когда мы перебираем наши ключи при помощи for in, мы можем проверить на тип каждое свойство
//после чего когда выясниться что одно из свойств это обьект, мы можем запустить для него свой внутренний цикл for in

const newObject = {
    name: 'NikDoe',
    obj: {
        eyes: 'brown',
        hair: 'fair-haired'
    }
};

for (let key in newObject) {
    if (typeof (newObject[key]) === 'object') {
        for (let i in newObject[key]) {
            console.log(`свойство ${i} : значение ${newObject[key][i]}`);
        }
    } else {
        console.log(`свойство ${key} : значение ${newObject[key]}`);
    }
}

//данный паттерн помогает справлять с [object object]

// для вывода имен всех свойст который содеражаться в обьекте
// также данный метод можно использовать в связке с .lenght, потому что он возвращает массив из ключей перебираемого обьекта

const someObj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(someObj));
console.log(`колличество свойств в обьекте = ${Object.keys(someObj).length}`);

//мы также можем создавать свои собственные свойства
//для этого создадим свойство, в значение которого поместим анонимную функцию, которая будет что-то выполнять

const _obj = {
    createObjectMethod: () => {
        console.log('мы создали свой собственный метод для обьекта');
    }
};

//теперь можем вызвать его

_obj.createObjectMethod();

//для того чтобы удобно было работать с большой вложенностью обьекта сущестует диструктуризация обьекта

const {weight, growth} = obj.body;
console.log(weight, growth);

// в скобках мы указываев те вложенные свойства значения которых хотим получить
//после оператора присваивания обращаемся к тому свойству, в котором вложены значения свойств которые мы хотим получить