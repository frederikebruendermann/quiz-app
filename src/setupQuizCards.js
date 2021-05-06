import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupQuizCards() {
  const buttonAnswers = getAllElements('[button__answer="buttonAnswer]')

  buttonAnswers.forEach(buttonAnswer => {
    buttonAnswer.addEventListener('click', event => {
      const pAnswer = getElement('[card__answer]', event.target.parentNode)
      pAnswer.classList.toggle('hidden')
    })
  })
}
