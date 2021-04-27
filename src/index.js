const boxHome = document.querySelector('.box__home')
const boxBookmarks = document.querySelector('.box__bookmarks')
const boxCreator = document.querySelector('.box__creator')
const boxProfile = document.querySelector('.box__profile')
const buttonHome = document.querySelector('.app-nav__button-home')
const buttonBookmark = document.querySelector('.app-nav__button-bookmarks')
const buttonCreate = document.querySelector('.app-nav__button-creator')
const buttonProfile = document.querySelector('.app-nav__button-profile')
const bookmark = document.querySelector('.card__bookmark')
const pAnswer = document.querySelector('.card__answer')
const buttonAnswer = document.querySelector('.button__answer')
const buttonDarkmode = document.querySelector('.app-profile__darkmode')
const body = document.querySelector('.body_darkmode')

buttonHome.addEventListener('click', () => {
  boxHome.classList.remove('hidden')
  boxBookmarks.classList.add('hidden')
  boxCreator.classList.add('hidden')
  boxProfile.classList.add('hidden')
  buttonHome.classList.add('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

console.log(buttonHome)

buttonBookmark.addEventListener('click', () => {
  boxHome.classList.add('hidden')
  boxBookmarks.classList.remove('hidden')
  boxCreator.classList.add('hidden')
  boxProfile.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonBookmark.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  boxHome.classList.add('hidden')
  boxBookmarks.classList.add('hidden')
  boxCreator.classList.remove('hidden')
  boxProfile.classList.add('hidden')
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  boxHome.classList.add('hidden')
  boxBookmarks.classList.add('hidden')
  boxCreator.classList.add('hidden')
  boxProfile.classList.remove('hidden')
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('card__bookmark--selected')
})

buttonAnswer.addEventListener('click', () => {
  pAnswer.classList.toggle('hidden')
})

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
})
