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
    descriptionHead: "Developed a text-based interactive fiction game in C# using Visual Studio 2022 as my first personal programming project.",
    descriptionBody: "The project involved implementing game logic, handling user input, and creating branching story paths, providing hands-on experience with C# syntax, control flow, and basic software design principles.",
    image: "photos/adventure.png",
    alt: "A text-based game asking the user to choose what direction to travel"
  },
  perilous: {
    title: "Perilous Waters - Python",
    descriptionHead: "Developed in Python using the Pygame library, Perilous Waters is a collaborative project that reimagines the infinite runner genre with an undersea theme.",
    descriptionBody: "Working as part of a team of three, I contributed to the building of core gameplay mechanics fitting for the genre such as player movement, obstacle/power-up collision and handling, player state tracking, and game loop logic. This project gave me experience in game development fundamentals, Python programming, and team-based collaborative software development.",
    image: "photos/perilous_waters.png",
    alt: "A pixel art clownfish swimming toward a mine and a net"
  },
  bonfir: {
    title: "Rōs Bonfīr - Java",
    descriptionHead: "Developed in Java, Rōs Bonfīr is a collaborative project showcasing our rendition of a Rose-Hulman-themed recreation of the arcade game Jetpac.",
    descriptionBody: "Working in a team of three, I implemented features critical to gameplay such as orthogonal 2D player movement, entity and environment collision, player input handling, and screen-wrapping. Additionally, I implemented supporting systems, including level-file parsing and an abstract entity class encompassing the player, enemies, and collectibles, to streamline development.",
    image: "photos/bonfir.png",
    alt: "A pixel art jetpack platformer level"
  },
  elemental: {
    title: "Elemental Escape - GDScript",
    descriptionHead: "Currently in development using GDScript and the Godot engine, Elemental Escape is a level-based puzzle-platformer with a dungeon-escape theme.",
    descriptionBody: "This project was started as a small personal project with the goal of learning Godot, and blossomed into a larger-than-anticipated project which had me implement core aspects of game design such as game logic, interactive environments, spritework, and level design. Due to the nature of the puzzle-platformer genre, the level design for the project required far more depth than I had previously thought, as I had to consider not only the fairness and playability of the platforming and puzzle themself, but also the ways a player is most likely to interact with the level when playing blind.",
    image: "photos/elemental_escape.png",
    alt: "A pixel art mage in a dungeon"
  }
};

function showProject(key) {
  const project = projects[key];
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description-head").textContent = project.descriptionHead;
  document.getElementById("project-description-body").textContent = project.descriptionBody;
  const img = document.getElementById("project-image");
  img.src = project.image;
  img.alt = project.alt;
}