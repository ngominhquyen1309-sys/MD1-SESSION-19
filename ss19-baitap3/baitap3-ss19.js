let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("btnLogin");

let inputEmail;
let inputPassword;

let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

let togglePassword = document.getElementById("togglePassword");



function checkError() {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail === "") {
        errorEmail.innerText = "Email không được để trống";
        return false;
    }
    if (!emailRegex.test(inputEmail)) {
        errorEmail.innerText = "Email không đúng định dạng";
        return false;
    }
    errorEmail.innerText = "";
    if (inputPassword === "") {
        errorPassword.innerText = "Password không được để trống";
        return false;
    }
    if (inputPassword.length < 8) {
        errorPassword.innerText = "Password phải có ít nhất 8 ký tự";
        return false;
    }
    errorPassword.innerText = "";

    return true;
}

function togglePass() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function login(e) {
    e.preventDefault();

    inputEmail = email.value.trim();
    inputPassword = password.value.trim();

    if (!checkError()) {
        return;
    };

    let users =
        JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === inputEmail && users[i].password === inputPassword) {
            alert("Đăng nhập thành công");
            return;
        }
    }
    alert("Email hoặc mật khẩu không đúng");
}

togglePassword.addEventListener("click", togglePass);

loginBtn.addEventListener("click", login);