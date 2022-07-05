// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


//получаем доступ к ссылкам
const actions = document.querySelectorAll('#counter button');
const decrementButton = actions[0];
const incrementButton = actions[1];
const valueEl = document.querySelector('#value');

//добавить слушателей событий
decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick)

//задаем переменную, которая хранит текущее значение счетчика
let counterValue = 0;

//функция, которая при клике отнимает 1 и записывает в переменную valueEl
function onDecrementButtonClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue; //Обновляем интерфейс новым значением
   
}
function onIncrementButtonClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}