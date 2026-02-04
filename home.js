
document.addEventListener("DOMContentLoaded", () => {

  const signupButton = document.querySelector('.sign-up');
  if (signupButton) {
    signupButton.addEventListener("click", function (event) {
      event.preventDefault();
      location.assign("login.html");
    });
  }

  const menuBtn = document.querySelector(".fa-bars");
  const mobNav = document.querySelector(".mob-nav");

  menuBtn.addEventListener("click", () => {
    mobNav.classList.toggle("active");
    menuBtn.classList.add("hide")
  });

});
