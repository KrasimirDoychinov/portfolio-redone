let expLinks = Array.from(document.querySelectorAll('.exp-link'))

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
