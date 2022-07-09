// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//  после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.
const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('#boxes');


const createBoxes = (amount) => { 
     let fragment = new DocumentFragment();
     const arrayDiv = [];// массив для хранения полученых дивов
    for (let i = 0; i < amount; i++) { // интератор будет выполнятся пока меньше значения параметра
      const widthHeightSize = 30 + i * 10 + 'px'; // на каждой интераци прибавляем 10пикселей
      const divNew = document.createElement("div"); // создаем див
        divNew.style.width = widthHeightSize; // ширина
        divNew.style.height = widthHeightSize;// высота
        divNew.style.backgroundColor = getRandomHexColor();// рандомный фон
      arrayDiv.push(divNew); // пушим наш готовый див в массив
      fragment.appendChild(divNew);
    }
   boxes.appendChild(fragment);
}



//генерим рандомный цвет
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
};
