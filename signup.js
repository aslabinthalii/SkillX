const form = document.getElementById("signupForm");
const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
});


function validateForm() {
    let isValid = true;

    checkInput(firstName, "First name is required");
    checkEmail();
    checkPassword();
    checkConfirmPassword();

    if (isValid) {
        alert("Signup successful!");
    }
    function isOnlyLetters(name) {
        return /^[A-Za-z ]+$/.test(name);
    }
    function checkInput(input, message) {
        const value = input.value.trim();

        if (value === "") {
            setError(input, message);
            isValid = false;
        }
        else if (!isOnlyLetters(value)) {
            setError(input, "Only letters are allowed");
            isValid = false;
        }
        else if (value.length < 3) {
            setError(input, "Must contain at least 3 letters");
            isValid = false;
        }
        else {
            setSuccess(input);
        }
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

    function checkConfirmPassword() {
        if (confirmPassword.value.trim() === "") {
            setError(confirmPassword, "Confirm password is required");
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            setError(confirmPassword, "Passwords do not match");
            isValid = false;
        } else {
            setSuccess(confirmPassword);
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
toggleEye(document.querySelector(".toggle-confirm"), confirmPassword);
