// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);//каждое изменение  в инпуте при вводе текста

function onInputChange(event) {//прослушал событие Input
    if (event.currentTarget.value !== '') { //нашли значение Input и изменили текст другого элемента(nameOutputEl)
        outputEl.textContent = event.currentTarget.value;
        
    } else {
       outputEl.textContent = 'Anonymous';
    }
};