// Load navigation from nav.html into the element with id="nav-container"
document.addEventListener('DOMContentLoaded', function() {
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
    })
    .catch(error => console.error('Error loading navigation:', error));
});
