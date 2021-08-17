//Handle login button event
document.getElementById("login-submit").addEventListener('click', function () {
    // Get user email
    const emailField = document.getElementById("email-field");
    const userEmail = emailField.value;
    // Get user password
    const passwordField = document.getElementById("password-field");
    const userPassword = passwordField.value;

    // Verified user checking
    if (userEmail == 'user@mssbank.com' && userPassword == 'bankSecrete_password') {
        window.location.href = 'banking.html';
    }
    else {
        document.getElementById("error-throw").innerText = "Invalid user. Please login into a verified account";
    }
})