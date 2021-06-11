
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
 

    loginForm.addEventListener("submit", e => {
        e.preventDefault();


        setFormMessage(loginForm, "error", "Invalid username/password");
    });


});

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".fmessage");

    messageElement.textContent = message;
    messageElement.classList.remove("fmessage--success", "fmessage--error");
    messageElement.classList.add(`fmessage--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("forminput-error-message");
    inputElement.parentElement.querySelector(".forminput-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("forminput-error-message");
    inputElement.parentElement.querySelector(".forminput-error-message").textContent = "";
}
