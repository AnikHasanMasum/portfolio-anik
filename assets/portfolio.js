const menu = document.querySelector('.menu')
const links = document.querySelector('#links')
function toggleMenu(open) {
  menu.setAttribute('aria-expanded', String(open))
  links.classList.toggle('open', open)
}
menu.addEventListener('click', () => toggleMenu(menu.getAttribute('aria-expanded') === 'false'))
links.addEventListener('click', () => toggleMenu(false))
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    toggleMenu(false)
    menu.focus()
  }
})
