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
  const closeBtn = document.querySelector(".x");
  const mobLinks = document.querySelectorAll(".mob-nav-icon");

  menuBtn.addEventListener("click", () => {
    mobNav.classList.add("active");
    menuBtn.style.display = "none"
    closeBtn.style.display = "block"
  });


  closeBtn.addEventListener("click", () => {
    mobNav.classList.remove("active");
    menuBtn.style.display = ""
    closeBtn.style.display = "none"
  });


  mobLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobNav.classList.remove("active");
      menuBtn.style.display = "";
      closeBtn.style.display = "none";
    });
  });

});
const mernData = [
  {
    title: "HTML & CSS",
    pdf: "📄 PDF: HTML & CSS Notes",
    video: "▶️ Video: HTML & CSS Full Course",
    project: "🛠️ Project Video: Portfolio Website",
    viewPdf: "#",
    downloadPdf: "#", videoLink: "#",
    projectLink: "#"
  },
  {
    title: "JavaScript",
    pdf: "📄 PDF: JavaScript Notes",
    video: "▶️ Video: JavaScript Full Course",
    project: "🛠️ Project Video: To-Do App / Calculator App",
    viewPdf: "#",
    downloadPdf: "#", videoLink: "#",
    projectLink: "#"
  },
  {
    title: "React",
    pdf: "📄 PDF: React Notes",
    video: "▶️ Video: React Full Course",
    project: "🛠️ Project Video: React E-commerce Website",
    viewPdf: "#",
    downloadPdf: "#", videoLink: "#",
    projectLink: "#"
  },
  {
    title: "Node.js & Express",
    pdf: "📄 PDF: Node & Express Notes",
    video: "▶️ Video: Node.js + Express Full Course",
    project: "🛠️ Project Video: REST API Project",
    viewPdf: "#",
    downloadPdf: "#", videoLink: "#",
    projectLink: "#"
  },
  {
    title: "MongoDB",
    pdf: "📄 PDF: MongoDB Notes",
    video: "▶️ Video: MongoDB Full Course",
    project: "🛠️ Project Video: Database CRUD App",
    viewPdf: "#",
    downloadPdf: "#",
    videoLink: "#",
    projectLink: "#"
  },
  {
    title: "Full MERN Stack project",
    pdf: "📄 PDF: MERN Project Guide",
    video: "▶️ Video: MERN Full Stack Course",
    project: "🛠️ Project Video: E-Commerce / Social Media App",
    viewPdf: "#",
    downloadPdf: "#",
    videoLink: "#",
    projectLink: "#"
  }
];

let container = document.querySelector(".courses")

if (container) {
  container.innerHTML = mernData.map((item) => {
    return `<div class="course">
    <h1>${item.title}</h1>
    <a href="${item.viewPdf}" target="_blank" rel="noopener noreferrer">${item.pdf}</a>
    <a href="${item.videoLink}" target="_blank" rel="noopener noreferrer">${item.video}</a>
    <a href="${item.projectLink}" target="_blank" rel="noopener noreferrer">${item.project}</a>
    <a href="${item.downloadPdf}" download rel="noopener noreferrer">Download PDF</a>

  </div>`


  }).join("");
}