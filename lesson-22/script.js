for (var i = 0; i < 1000000000; i++) {} //иммитация скрипта который долго загружается
console.log('я скрипт с атрибутом defer/async');

// Динамически загружаемые скрипты

let script = document.createElement('script');
script.src = "test.js";
document.body.append(script);

// Скрипт начнёт загружаться, как только он будет добавлен в документ

// Динамически загружаемые скрипты по умолчанию ведут себя как «async».

// Мы можем изменить относительный порядок скриптов с «первый загрузился – первый выполнился» на порядок, в котором они идут в документе (как в обычных скриптах) с помощью явной установки свойства async в false:

let someScript = document.createElement('script');
someScript.src = "some.js";

document.body.append(someScript);

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

// long.js запускается первым, так как async=false
loadScript("test.js");
loadScript("some.js");

// Без script.async=false они запускались бы в порядке загрузки (some.js скорее всего запустился бы раньше). Но с этим флагом порядок будет как в документе: