document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

  // JavaScript to dynamically set the title based on the current page
  document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    var currentPage = window.location.href;

    // Extract the section from the URL (assuming your URLs are structured like "https://example.com/#section")
    var section = currentPage.split('#')[1];

    // Map the section to the corresponding title
    var sectionTitleMap = {
      'home': 'Home',
      'about-us': 'About Us',
      'services': 'Services',
      'projects': 'Projects',
      'pricelist': 'Price List',
      'contact-us': 'Contact Us'
      // Add more sections as needed
    };

    // Set the title based on the current section or default to 'Home' if section is not specified
    document.title = sectionTitleMap[section] || 'Nova Codings | Home';
  });

// Get references to the <i> elements and the corresponding sections
const homeIcon = document.getElementById("home-icon");
const aboutIcon = document.getElementById("about-icon");
const servicesIcon = document.getElementById("services-icon");
const projectsIcon = document.getElementById("projects-icon");
const pricelistIcon = document.getElementById("pricelist-icon");
const contactIcon = document.getElementById("contact-icon");

// Get references to the sections
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const servicesSection = document.getElementById("services"); 
const projectsSection = document.getElementById("projects");
const pricelistSection = document.getElementById("pricelist"); 
const contactSection = document.getElementById("contact"); 


// Add event listeners to the links
document.querySelector('a[href="#home"]').addEventListener('click', function() {
    // Toggle visibility of the <i> elements
    homeIcon.style.display = 'inline';
    aboutIcon.style.display = 'none';
    servicesIcon.style.display = 'none';
    projectsIcon.style.display = 'none';
    pricelistIcon.style.display = 'none';
    contactIcon.style.display = 'none';

    // Scroll to the corresponding section
    homeSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#about"]').addEventListener('click', function() {
    // Toggle visibility of the <i> elements
    homeIcon.style.display = 'none';
    aboutIcon.style.display = 'inline';
    servicesIcon.style.display = 'none';
    projectsIcon.style.display = 'none';
    pricelistIcon.style.display = 'none';
    contactIcon.style.display = 'none';
    

    // Scroll to the corresponding section
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#services-section"]').addEventListener('click', function() {
  // Toggle visibility of the <i> elements
  homeIcon.style.display = 'none';
  aboutIcon.style.display = 'none';
  servicesIcon.style.display = 'inline';
  projectsIcon.style.display = 'none';
  pricelistIcon.style.display = 'none';
  contactIcon.style.display = 'none';

  // Scroll to the corresponding section
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('a[href="#projects-section"]').addEventListener('click', function() {
  // Toggle visibility of the <i> elements
  homeIcon.style.display = 'none';
  aboutIcon.style.display = 'none';
  servicesIcon.style.display = 'none';
  projectsIcon.style.display = 'Inline';
  pricelistIcon.style.display = 'none';
  contactIcon.style.display = 'none';

  // Scroll to the corresponding section
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#pricelist-section"]').addEventListener('click', function() {
  // Toggle visibility of the <i> elements
  homeIcon.style.display = 'none';
  aboutIcon.style.display = 'none';
  servicesIcon.style.display = 'none';
  projectsIcon.style.display = 'none';
  pricelistIcon.style.display = 'Inline';
  contactIcon.style.display = 'none';

  // Scroll to the corresponding section
  pricelistSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#contact-section"]').addEventListener('click', function() {
  // Toggle visibility of the <i> elements
  homeIcon.style.display = 'none';
  aboutIcon.style.display = 'none';
  servicesIcon.style.display = 'none';
  projectsIcon.style.display = 'none';
  pricelistIcon.style.display = 'none';
  contactIcon.style.display = 'Inline';

  // Scroll to the corresponding section
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('resize', function () {
  const screenWidth = window.innerWidth;
  const nav = document.getElementById('nav');

  if (screenWidth >= 1025) {
    nav.classList.remove('active');
  }
});

/* Hamburger */
/* JavaScript to toggle the navigation menu */
function toggleNav() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');

  // Toggle the class on the nav element, not #nav
  const isActive = nav.classList.contains('active');

  // Toggle the display property based on the active class
  if (isActive) {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
}
/* End Hamburger */

/* button for projects */

document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll('.btn');

  // Get all content items
  const contentItems = document.querySelectorAll('.column');

  // Initially hide all content items
  contentItems.forEach(item => {
    item.style.display = 'none';
  });

  // Add click event listener to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' class to the clicked button
      this.classList.add('active');

      // Get the filter value from the 'data-filter' attribute
      const filterValue = this.getAttribute('data-filter');

      // Show or hide content items based on the filter value
      contentItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

/* End button for projects */

window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  


