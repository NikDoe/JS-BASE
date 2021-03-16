//циклы
//while

let num = 42;

while (num < 49) {
    console.log(num);
    num++;
}

//do

let newNum = 24;

do {
    console.log(newNum);
    newNum++;
}

while (newNum < 27);

//for

for (let i = 0; i < 9; i++) {
    if (i === 5) {
        break; // прекращает выполнение цикла после того как выполнитьс условие
    }
    console.log(i);
}

for (let i = 0; i < 9; i++) {
    if (i === 5) {
        continue; //пропускает шаг цикла в котором выполняется условие
    }
    console.log(i);
}