const ADMIN_PASSWORD = 'jqueryismyjam'; 
let message;
let password = prompt();

if (ADMIN_PASSWORD === password) {
message = 'Ласкаво просимо!'
} else if (password === null) {
    message = 'Операцію скасовано!'
} else {
    message = ('Доступ заборонено, невірний пароль!')
}

alert(message)