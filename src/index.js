import setupNavigation from './setupNavigation'
import setupBookmarks from './setupBookmarks'
import setupQuizCards from './setupQuizCards'
import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

const buttonDarkmode = document.querySelector('.app-profile__darkmode')
const body = document.querySelector('.body_darkmode')
const buttonAnswers = getAllElements('[button__answer="buttonAnswer"]')

setupNavigation()
setupBookmarks()
setupQuizCards()

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})

buttonAnswers.forEach(buttonanswer => {
  buttonanswer.addEventListener('click', () => {
    const pAnswer = getElement('[card__answer]')
    pAnswer.classList.toggle('.hidden')
  })
})
