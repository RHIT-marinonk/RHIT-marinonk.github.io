let navbarMap = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};
let footerMap = {"Linkedin":"resume.html", "Handshake":"resume.html"}

buildHTML("#navbar-placeholder", navbarMap);
buildHTML("#footer-placeholder", footerMap);

//idea from: Professor Stouder (thank you)
function buildHTML(placeholder, aMap) {
    let oldelem = document.querySelector(placeholder);
    let newelem = document.createElement("div");
    newelem.appendChild(document.createElement("ul"));
    for (let element in aMap) {
        let li = document.createElement("li");
        newelem.appendChild(li);
        let a = li.appendChild(document.createElement("a"));
        a.textContent = element;
        a.href = aMap[element];
    }
    newelem.appendChild(document.createElement("hr"));
    newelem.appendChild(document.createElement("hr"));
    oldelem.parentNode.replaceChild(newelem, oldelem)
}