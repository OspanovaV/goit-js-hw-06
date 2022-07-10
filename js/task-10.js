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

btnCreate.addEventListener('click', onCreateBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function onCreateBoxes() {
  let numbers = []; 
  for (let i = 1; i <= inputEl.value; i ++) {
    numbers.push(i);
  };
    const createDivs = numbers.map((number) => {
      const divEl = document.createElement('div');// создаем див
      const value = ((30 + divBoxEl.childElementCount*10) + number * 10);
      divEl.style.width = `${value}px`;// ширина
      divEl.style.height = `${value}px`;// высота
      divEl.style.backgroundColor = getRandomHexColor();//рандомный цвет фона
      
      return divEl;    
    }); 
    
    divBoxEl.append(...createDivs);//вставляем элементы
    console.log(divBoxEl);
  
};

//очищаем содержимое(удаляем все созданные элементы)
function destroyBoxes() {
  inputEl.value = '';
  divBoxEl.innerHTML = '';
  };

// генерим рандомный цвет
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
};

