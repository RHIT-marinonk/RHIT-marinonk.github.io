let navbarMap = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};
let footerMap = {"Linkedin":"https://www.linkedin.com/in/noah-marino-427b22239", "Handshake":"https://app.joinhandshake.com/profiles/ft4gvf"}

document.addEventListener("DOMContentLoaded", () => {
    buildHTML("#navbar-placeholder", navbarMap, "navbar");
    buildHTML("#footer-placeholder", footerMap, "footer");
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