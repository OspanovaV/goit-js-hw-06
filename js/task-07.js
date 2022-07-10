// Задание 7
// Напиши скрипт, который реагирует на изменение значения
//  input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.



const inputEl = document.querySelector('#font-size-control');
const sizeTextEl = document.querySelector('#text');

//каждое изменение в инпуте при вводе текста выполняем коллбэк-функцию
inputEl.addEventListener('input', fontSizeChange);

function fontSizeChange(event) {
 //нашли значение Input и изменили размер текста другого элемента
    sizeTextEl.style.fontSize = event.currentTarget.value + 'px';
}