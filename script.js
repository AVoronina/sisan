function form(event) {
    event.preventDefault();
    var fLogin = document.getElementById('login');
    var fPass = document.getElementById('password');
    var form = document.getElementById('form');
    var message = document.getElementById('alert');
    var login = fLogin.value;
    var passw = fPass.value;

    var regexp = new RegExp('^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$'); // регулярка на логин и пароль
    if(!(regexp.test(login) && regexp.test(passw))) { // если регулярка не сработала ...
        alert('Неверный формат логина или пароля');
    } else {
        message.innerHTML = "Добро пожаловать, " + login;
        // setInterval(function() {
        //     form.style.opacity = form.style.opacity - 0.1;
        //     message.style.opacity = +message.style.opacity + 0.1;
        // }, 200);
        form.style.opacity = 0;
        message.style.opacity = 1;
        message.style.left = '620px';
    }
}
