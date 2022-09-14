let expLinks = Array.from(document.querySelectorAll('.exp-link'))
let main = document.querySelector('main')
let loader = document.querySelector('.loader')
let body = document.querySelector('body')

loader.addEventListener('animationstart', e => {
  body.style.overflow = 'hidden'
})

loader.addEventListener('animationend', e => {
  if (e.animationName == 'loaderFadeOut') {
    body.style.overflow = 'auto'
  }
})

expLinks.forEach(x => {
  x.addEventListener('click', e => {
    expLinks.forEach(y => {
      y.classList.remove('clicked-link')
    })
    e.target.classList.add('clicked-link')

    let allExps = Array.from(document.querySelectorAll('.exp'))
    allExps.forEach(y => {
      y.classList.add('hidden')
    })
    let exp = e.target.getAttribute('data-exp')

    let clickedExp = allExps.find(y => y.id == exp)
    clickedExp.classList.remove('hidden')
  })
})

let menuToggle = document.querySelector('.toggle')
let sideNav = document.querySelector('.side-navigation')
menuToggle.addEventListener('click', e => {
  toggleSideNav()
})

let allLinks = Array.from(document.querySelectorAll('a'))

allLinks.forEach(x => {
  x.addEventListener('click', () => {
    menuToggle.classList.remove('active')
    body.classList.remove('noscroll')
    sideNav.classList.remove('active')
    main.classList.remove('blur')
    sideNav.style.right = '-100%'
  })
})

function toggleSideNav() {
  menuToggle.classList.toggle('active')
  body.classList.toggle('noscroll')
  sideNav.classList.toggle('active')

  document.querySelector('main').classList.toggle('blur')
  if (sideNav.classList.contains('active')) {
    sideNav.style.right = 0
  } else {
    sideNav.style.right = '-100%'
  }
}
