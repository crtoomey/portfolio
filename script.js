// Responsive nav

let primaryNav = document.querySelector('.primary-nav')
let navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  console.log(visibility)

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else  if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
})

// expanding grid elements

const gridElements = document.querySelectorAll('.grid-element');

function expandOnHover() {
  this.classList.add('expanded');
  this.setAttribute('aria-expanded', true);
}

function contractOnHoverOut() {
  this.classList.remove('expanded');
  this.setAttribute('aria-expanded', false);
}

gridElements.forEach(element => {
  element.addEventListener('mouseenter', expandOnHover);
  element.addEventListener('mouseleave', contractOnHoverOut);
});