function loadHTMLFile(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#navbar", "/navbar.html");
  loadHTML("#footer", "/footer.html");
});

