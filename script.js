
const toggleButton = document.getElementByClassName('toggle-button')[0];
const navBarLinks = document.getElementByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () =>{
    navBarLinks.classList.toggle('active')
})


