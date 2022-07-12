// Задание 7
// Напиши скрипт, который реагирует на изменение значения
//  input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const sizeTextEl = document.querySelector('#text');

//каждое изменение в инпуте выполняем коллбэк-функцию
inputEl.addEventListener('input', fontSizeChange);
//присваиваем размер шрифта спана к шрифту инпута  
sizeTextEl.style.fontSize = inputEl.value + 'px';

function fontSizeChange(event) {
 //нашли значение Input и изменили размер текста другого элемента
    sizeTextEl.style.fontSize = event.currentTarget.value + 'px';
}

