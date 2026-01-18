// Load navigation from nav.html into the element with id="nav-container_project"
document.addEventListener('DOMContentLoaded', function() {
  fetch('../../nav_project.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;

        // Highlight the active link
        document.querySelectorAll("ul.nav-container a").forEach(link => {
          if (link.href === window.location.href) {
            link.classList.add("active");
          }
        });
    })
    .catch(error => console.error('Error loading navigation:', error));
});
