import getElement from './utils/getElement'
import setupNavigation from './setupNavigation'

const bookmark = getElement('.card__bookmark')
const buttonDarkmode = getElement('.app-profile__darkmode')
const body = getElement('.body_darkmode')
const pAnswer = document.querySelector('.card__answer')
const buttonAnswer = document.querySelector('.button__answer')

setupNavigation()

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('card__bookmark--selected')
})

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})

buttonAnswer.addEventListener('click', () => {
  pAnswer.classList.toggle('hidden')
})
