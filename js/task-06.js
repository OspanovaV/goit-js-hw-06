// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//  если неправильное - красным.

const inputEl = document.querySelector('#validation-input');
const checkCount = +inputEl.dataset.length;

inputEl.addEventListener('blur', onInputFocus);//каждое изменение  в инпуте при вводе текста

function onInputFocus(event) {
  if (event.currentTarget.value.length === checkCount) {//если количество знаков=data-length
      inputEl.classList.remove('invalid');
   return inputEl.classList.add('valid');
  }
  inputEl.classList.remove('valid');
   return inputEl.classList.add('invalid'); 
}