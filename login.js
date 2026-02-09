const loginForm = document.getElementById("loginForm")
let email = document.getElementById("email")
let password = document.getElementById("password")
const toggleIcon = document.querySelector(".toggle-password");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid=true;
    checkEmail()
    checkPassword()
    if (isValid) {
        alert("login successful!");
    }
    function checkEmail() {
        const value = email.value.trim();

        if (/[A-Z]/.test(value)) {
            setError(email, "Email must be in lowercase");
            isValid = false;
        }
        else if (!isValidEmail(value)) {
            setError(email, "Enter a valid email");
            isValid = false;
        }
        else {
            setSuccess(email);
        }
    }
    function checkPassword() {
        if (password.value.length < 8) {
            setError(password, "Password must be at least 8 characters");
            isValid = false;
        } else {
            setSuccess(password);
        }
    }

}
function setError(input, message) {
    const box = input.parentElement;
    const errorMsg = box.querySelector("small.error");

    errorMsg.innerText = message;
    input.classList.add("error-input");
    input.classList.remove("success-input");
}
function setSuccess(input) {
    const box = input.parentElement;
    const errorMsg = box.querySelector("small.error");

    errorMsg.innerText = "";
    input.classList.add("success-input");
    input.classList.remove("error-input");
}
function isValidEmail(email) {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
}
function toggleEye(icon, input) {
    icon.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        icon.classList.toggle("fa-eye-slash", isPassword);
        icon.classList.toggle("fa-eye", !isPassword);
    });
}
toggleEye(document.querySelector(".toggle-password"), password);
