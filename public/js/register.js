const form = document.querySelector('#registrationForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const errorContainer = document.querySelector('#errorContainer');
const successContainer = document.querySelector('#successContainer');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const password = confirmPasswordInput.value;
    const confirmPassword = passwordInput.value;
    const active = true;


    if (password !== confirmPassword) {
        errorContainer.textContent = 'Пароли не совпадают';
        return;
    }

    const user = {
        name,
        email,
        password,
        active,
    };

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (response.ok) {
            successContainer.textContent = 'Регистрация успешно завершена';
            errorContainer.textContent = ''; // Очистить сообщение об ошибке, если было
        } else if (response.status === 409) {
            errorContainer.textContent = 'Такой e-mail уже зарегистрирован';
            successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
        } else {
            errorContainer.textContent = 'Ошибка при отправке';
            successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
        }
    } catch (error) {
        errorContainer.textContent = 'Ошибка при отправке';
        successContainer.textContent = ''; // Очистить сообщение об успешной регистрации, если было
    }
});