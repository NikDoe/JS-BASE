const btn = document.querySelector('.btn');

let timerId,
    i = 0;

//определнное количество кликов с тайм аутом
// btn.addEventListener('click', () => {
//     timerId = setTimeout(loger, 1000);
// });

// function loger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     } else {
//         console.log('я функция логер');
//         i++;
//     }
// }

//опредленное количество иттераций с setInterval
// btn.addEventListener('click', () => {
//     timerId = setInterval(loger, 1000);
// });

// function loger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     } else {
//         console.log('я функция логер');
//         i++;
//     }
// }

//НО!!! рекурсивный setTimeout лучше чем обычный setInterval и вот почему

//если мы используем setInterval, и задаем ему интервал к примеру 500 мили секунд, то если функция которую мы передадим в addEventListener, будет выполняться больше чем 500 мили секунд, то setInterval не будет ждать пока она выполниться и запустит следующую

btn.addEventListener('click', () => {
    timerId = setInterval(_loger, 1000);
});

function _loger() {
    if (i === 3) {
        clearInterval(timerId);
    } else {
        //создаём медленную функцию
        setTimeout(()=>{
            console.log('я сет интервал');
        }, 10000);
        
        i++;
        console.log(i);
    }
}

//в итоге все три setTimeout выведуться спустя 10 секунд

//рекурсивный setTimeout позвоялет устранить эту проблему

let id = setTimeout(function log (){
    if (i === 3) {
        clearInterval(id);
    } else {
        setTimeout(() => {
            console.log(1);
        }, 5000);//через сколько выполниться какой-то долгий скрип первый раз внутри фукнции log
        id = setTimeout(log, 2000); //через сколько функция log будет выдавать результат выполнения долгой фукнции внутри себя...через каждый 2 секунды будет выводиться 1 в консоль
        i++;
    }
}, 500); //сколько фукнция будет ждать прежде чем запустится

btn.addEventListener('click', myAnimation);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}