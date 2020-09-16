// обьявить переменные
const name = "«Генератор защитного поля»";
let price = 1000;

// с помощью шаблонной строки вывести сообщение с вызовом переменных
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(firstMessage);

// переопределить переменную price
price = 2000;

// с помощью шаблонной строки вывести сообщение с вызовом переменных
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
console.log(secondMessage);
