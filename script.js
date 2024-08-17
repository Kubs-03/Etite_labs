document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
  
    // Toggle mobile menu visibility
    hamburgerBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('show');
    });
  
    // Toggle dropdowns
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
        // Prevent the menu from closing immediately
        event.stopPropagation();
  
        // Close other open dropdowns
        dropdowns.forEach(drop => {
          if (drop !== dropdown) drop.querySelector('.dropdown-content').classList.remove('show');
        });
  
        // Toggle the current dropdown
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', function() {
      dropdowns.forEach(dropdown => {
        dropdown.querySelector('.dropdown-content').classList.remove('show');
      });
    });
    
  });
  
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};



document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


