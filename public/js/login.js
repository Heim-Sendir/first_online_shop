const form = document.querySelector('#registrationForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const errorContainer = document.querySelector('#errorContainer');
const successContainer = document.querySelector('#successContainer');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log('Почта: ', email);
    console.log('Пароль:', password);

    const user = {
        email,
        password
    };

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(user),

        });
        console.log('Отправляем запрос: ', JSON.stringify(user));

        if (response.ok) {
            successContainer.textContent = 'Вы успешно вошли';
            errorContainer.textContent = ''; // Очистить сообщение об ошибке, если было
        } else if (response.status === 409) {
            errorContainer.textContent = 'Неверный e-mail';
            successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
        } else if (response.status === 401) {
            errorContainer.textContent = 'Неверный пароль';
            successContainer.textContent = '';
        } else if (response.status === 404) {
            errorContainer.textContent = 'Неверно введен e-mail';
            successContainer.textContent = '';
        } else {
            errorContainer.textContent = 'Ошибка при отправке';
            successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
        }
    } catch (error) {
        errorContainer.textContent = 'Ошибка при отправке';
        successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
    }
});


