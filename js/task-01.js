
//Посчитает и выведет в консоль количество элементов li.item в ul#categories 
const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
//текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >)
const categoriesArray = [...totalCategories]
    .map(categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`)
.join('\n');//обьединим все элементы массива в качестве разделителя используем символ перевода строки '\n'
console.log(categoriesArray);
