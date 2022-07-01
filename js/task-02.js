// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const createItems = ingredients.map((ingredient) => {//трансформируем в новый массив
  const listEl = document.createElement('li');//создаём тег (в памяти)
  listEl.classList.add('item');//добавим класс
  listEl.textContent = `${ingredient}`;//добавим текст
  return listEl;
});
ingredientsEl.append(...createItems);//вставляем элементы
 console.log(ingredientsEl);

