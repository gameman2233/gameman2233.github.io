const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const password = loginForm.password.value;

    if (password === "ethanisawesome") {
        loginButton.onclick = function() {
            location.href = "https://www.lifeisdrain.wtf/miku.html";
        }
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

