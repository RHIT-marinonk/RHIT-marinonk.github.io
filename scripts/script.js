function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
    });
}

// Load navbar and footer
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("#navbar-placeholder", "/navbar.html");
  loadHTML("#footer-placeholder", "/footer.html");
});
