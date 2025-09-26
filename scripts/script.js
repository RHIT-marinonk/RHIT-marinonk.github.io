//function loadHTMLFile(id, file) {
//  fetch(file)
//    .then(response => {
//      return response.text();
//    })
//    .then(data => {
//      document.getElementById(id).innerHTML = data;
//    })
//}

function loadHTMLFile(select, file) {
    fetch(file)
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector(select);
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem)
    })
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#navbar-placeholder", "/navbar.html");
  //loadHTML("#footer-placeholder", "/footer.html");
});

