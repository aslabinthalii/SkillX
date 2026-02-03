
const signupButton = document.querySelector('.sign-up')
console.log(signupButton);


signupButton.addEventListener("click", function (event) {
    event.preventDefault()
  location.assign("signup.html");

});

