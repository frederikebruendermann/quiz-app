import getElement from './utils/getElement'
import setupNavigation from './setupNavigation'

const bookmark = getElement('.card__bookmark')
const pAnswer = getElement('.card__answer')
const buttonAnswer = getElement('.button__answer')
const buttonDarkmode = getElement('.app-profile__darkmode')
const body = getElement('.body_darkmode')

setupNavigation()

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('card__bookmark--selected')
})

buttonAnswer.addEventListener('click', () => {
  pAnswer.classList.toggle('hidden')
})

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})
