// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль
//  при клике на button.change - color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.


const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeColor);

function onChangeColor() {
  let color = getRandomHexColor();
  document.body.setAttribute('style', `background-color: ${color}`)
  spanEl.textContent = color;
}
//генерим рандомный цвет
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
};
  
