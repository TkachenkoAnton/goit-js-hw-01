// // Мой Вариант решения
// // обьявить переменные
// const stock = 100;
// const invoice = 98;

// // обьявить возможные варианты сообщений
// const messageConfirm = `Заказ оформлен, с вами свяжется менеджер`;
// const messageDenied = `На складе недостаточно товаров!`;

// // с помощью конструкции if else обьявить возможные варианты сообщения в зависимости от изменения переменной invoice
// if (invoice <= 100) {
//   console.log(messageConfirm);
// } else {
//   console.log(messageDenied);
// }

// Вариант решения GoIT
// обьявить переменные
const stock = 100;
const invoice = 101;

// // обьявить возможные варианты сообщений c условием измения переменной invoice
let message = `Заказ оформлен, с вами свяжется менеджер`;
if (invoice <= 100) {
} else {
  message = `На складе недостаточно товаров!`;
}

console.log(message);
