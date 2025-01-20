document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();  

    const email = document.getElementById("erf_username").value;
    const password = document.getElementById("erf_password").value;

    if (!email || !password) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Отправка данных на сервер
    fetch('http://localhost:3000/submit', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })  
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка на сервере: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        console.log(data);  
        document.body.style.backgroundColor = "white";  

        const message = document.createElement('div');
        message.textContent = 'Данные успешно отправлены!';
        document.body.appendChild(message);
    })
    .catch(error => {
        console.error('Error:', error);  
        const message = document.createElement('div');
        message.textContent = 'Произошла ошибка: ' + error.message;
        message.style.color = 'red';
        document.body.appendChild(message);
    });
});
