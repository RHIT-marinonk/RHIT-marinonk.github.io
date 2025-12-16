let navbarMap = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};
let footerMap = {"Linkedin":"https://www.linkedin.com/in/noah-marino-427b22239", "Handshake":"https://app.joinhandshake.com/profiles/ft4gvf"}

document.addEventListener("DOMContentLoaded", () => {
    buildHTML("#navbar-placeholder", navbarMap, "navbar");
    buildHTML("#footer-placeholder", footerMap, "footer");
    if (document.getElementById("project-display")) {
        showProject("adventure");
    }
})

//idea from: Professor Stouder (thank you)
function buildHTML(placeholder, aMap, classname) {
    let oldelem = document.querySelector(placeholder);
    let newelem = document.createElement("div");
    newelem.classList.add(classname)
    let ul = newelem.appendChild(document.createElement("ul"));
    for (let element in aMap) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let a = li.appendChild(document.createElement("a"));
        a.textContent = element;
        a.href = aMap[element];
    }
    oldelem.parentNode.replaceChild(newelem, oldelem)
}

const projects = {
  adventure: {
    title: "Adventure - C#",
    description:
      "Developed in C# using VisualStudio2022, Adventure is a text-based interactive fiction game and my first personal programming project.",
    image: "photos/adventure.png",
    alt: "A text-based game asking the user to choose what direction to travel"
  },
  perilous: {
    title: "Perilous Waters - Python",
    description:
      "Developed in Python using the Pygame library, Perilous Waters is our group's take on the endless runner genre.",
    image: "photos/perilous_waters.png",
    alt: "A pixel art clownfish swimming toward a mine and a net"
  },
  bonfir: {
    title: "Rōs Bonfīr - Java",
    description:
      "A Rose-Hulman-themed recreation of Jetpac developed in Java with a three-person team.",
    image: "photos/bonfir.png",
    alt: "A pixel art jetpack platformer level"
  },
  elemental: {
    title: "Elemental Escape - GDScript",
    description:
      "A puzzle-platformer built in Godot where you use elemental spells to escape a dungeon.",
    image: "photos/elemental_escape.png",
    alt: "A pixel art mage in a dungeon"
  }
};

function showProject(key) {
  const project = projects[key];
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").textContent = project.description;
  const img = document.getElementById("project-image");
  img.src = project.image;
  img.alt = project.alt;
}