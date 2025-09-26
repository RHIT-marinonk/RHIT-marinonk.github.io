//idea from: https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages
// function loadHTMLFile(select, file) {
//     fetch(file)
//     .then(res => res.text())
//     .then(text => {
//         let oldelem = document.querySelector(select);
//         let newelem = document.createElement("div");
//         newelem.innerHTML = text;
//         oldelem.parentNode.replaceChild(newelem, oldelem)
//     })
// }

// document.addEventListener("DOMContentLoaded", () => {
//   loadHTMLFile("#navbar-placeholder", "/navbar.html");
//   loadHTMLFile("#footer-placeholder", "/footer.html");
// });

let pages = {"Home":"https://rhit-marinonk.github.io/", "Resume":"resume.html", "Portfolio":"portfolio.html"};

buildNavBar();

function buildNavBar() {
    let oldelem = document.querySelector("#navbar-placeholder");
    let newelem = document.createElement("div");
    newelem.appendChild(document.createElement("ul"))
    pages.forEach(element => {
        let page = document.createElement("li");
        page.appendChild("a")
        page[0].value = element[0];
        page[0].href = element[1];
        newelem.appendChild(page)
    });
    newelem.appendChild(document.createElement("hr"))
    newelem.appendChild(document.createElement("hr"))
    oldelem.parentNode.replaceChild(newelem, oldelem)
}