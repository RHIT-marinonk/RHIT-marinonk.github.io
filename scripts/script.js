let pages = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};

buildNavBar();

//idea from: Professor Stouder (thank you)
function buildNavBar() {
    let oldelem = document.querySelector("#navbar-placeholder");
    let newelem = document.createElement("div");
    newelem.appendChild(document.createElement("ul"));
    for (element of pages) {
        let page = document.createElement("li");
        page.appendChild("a");
        page[0].value = element[0];
        page[0].href = element[1];
        newelem.appendChild(page);
    }

    newelem.appendChild(document.createElement("hr"));
    newelem.appendChild(document.createElement("hr"));
    oldelem.parentNode.replaceChild(newelem, oldelem)
}