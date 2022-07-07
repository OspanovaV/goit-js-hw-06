// 1.Обработка отправки формы form.login-form должна быть по событию submit.
// 2.При отправке формы страница не должна перезагружаться.
// 3.Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4.Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5.Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


//выборка элементов
const form = document.querySelector('.login-form');

//подписка
form.addEventListener('submit', onFormSubmit);

//внешняя функция(обработчик этих подписок)
function onFormSubmit(event) {
    event.preventDefault();//предотвращает перезагрузку страницы

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
            alert('Все поля формы необходимо заполнить.');//выводим предупреждение
            return;   
    }
    
    // помощник при сборе данных
    const formData = new FormData(event.currentTarget);//передаём ссылку на DOM элемент

    //выводим в консоль обьект с введенными данными
    formData.forEach((value, name) => {
        console.log('onFormSubmit: name', name);
        console.log('onFormSubmit: value', value);
    });

    //очистить значения полей формы
     event.currentTarget.reset();
}

