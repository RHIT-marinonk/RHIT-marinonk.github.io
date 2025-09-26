let pages = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};

buildNavBar();

//idea from: Professor Stouder (thank you)
function buildNavBar() {
    let oldelem = document.querySelector("#navbar-placeholder");
    let newelem = document.createElement("div");
    newelem.appendChild(document.createElement("ul"));
    for (let element in pages) {
        let li = document.createElement("li");
        newelem.appendChild(li);
        let page = li.appendChild(document.createElement("a"));
        page.textContent = element;
        console.log(pages[element]);
        page.href = pages[element];
        console.log(page.href);
    }
    newelem.appendChild(document.createElement("hr"));
    newelem.appendChild(document.createElement("hr"));
    oldelem.parentNode.replaceChild(newelem, oldelem)
}