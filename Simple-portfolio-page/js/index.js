/* <a href="https://github.com/Kamzie?tab=repositories" target="_blank" id="profile-link"><i class="fab fa-github fa-2x"></i></a>
      <a href="https://en-gb.facebook.com" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
      <a href="https://mobile.twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
      <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a> */

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})
