function loadHTMLFile(id, file) {
  fetch(file)
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar-placeholder", "/navbar.html");
  loadHTML("footer-placeholder", "/footer.html");
});

