// объявить переменные для полей паролей, а так же выводимых сообщений
const userPassword = "jqueryismyjam";

const ADMIN_PASSWORD = "jqueryismyjam";

const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_IS_ALLOWED = "Добро пожаловать!";
const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";

let message = `Добро пожаловать!`;
if (userPassword === null) {
  message = CANCELED_BY_USER;
} else if (userPassword !== ADMIN_PASSWORD) {
  message = ACCESS_DENIED;
}

console.log(message);
