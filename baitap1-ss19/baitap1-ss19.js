let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let registerBtn = document.getElementById("btnSubmit");

let inputEmail;
let inputPassword;
let inputConfirmPassword;

let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");
let errorConfirmPassword = document.querySelector(".error-confirm-password");

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

    if (inputPassword.length < 6) {
        errorPassword.innerText = "Password phải có ít nhất 6 ký tự";
        return false;
    }

    errorPassword.innerText = "";

    if (inputConfirmPassword === "") {
        errorConfirmPassword.innerText = "Bạn chưa nhập Confirm Password";
        return false;
    }

    if (inputPassword !== inputConfirmPassword) {
        errorConfirmPassword.innerText = "Confirm Password không khớp";
        return false;
    }

    errorConfirmPassword.innerText = "";

    return true;
}

function register(e) {

    if (e) e.preventDefault();
    let inputEmail = email.value.trim();
    let inputPassword = password.value.trim();
    let inputConfirmPassword = confirmPassword.value.trim();

    if (!checkError()) {
        return;
    }

    let users = JSON.parse(localStorage.getItem('users'));

    if (users === null) {
        users = [];
    }

    for (let i = 0; i < users.length; i++) {
        if (inputEmail === users[i].email) {
            alert('email của bạn đã được đăng ký!');
            return;
        }
    }
    let newUser = { email: inputEmail, password: inputPassword };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    alert('Đăng ký thành công');

    email.value = "";
    password.value = "";
    confirmPassword.value = "";
}

registerBtn.addEventListener("click", register);
