// Задание 3
// Напиши скрипт для создания галереи изображений по массиву данных. 
// В HTML есть список ul.gallery.

// <ul class="gallery"></ul>
// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector(".gallery");
// const imgGallery = images.map(({ url, alt }) => {
//   const listEl = document.createElement('li');  
//   const imgeEl = document.createElement('img');
//   imgeEl.src = url;
//   imgeEl.alt = alt;
//   imgeEl.width = 1200;
//   listEl.append(imgeEl);
//   return listEl;
// });
// galleryEl.append(...imgGallery);
// console.log(imgGallery);


// вариант 2
// Для создания разметки использую метод insertAdjacentHTML()

const galleryEl = document.querySelector(".gallery");
const imgGallery = images
  //перебираем массив и добавляем новыу теги с атрибутами src, alt, width
  .map(({ url, alt }) => `<li class="list-item new"><img src="${ url }" alt='${alt}' width='${1200}'></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", imgGallery); //добавить новые строки в разметку


