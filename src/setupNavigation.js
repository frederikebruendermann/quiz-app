import getElement from './utils/getElement'

export default function setupNavigation() {
  const boxHome = getElement('.box__home')
  const boxBookmarks = getElement('.box__bookmarks')
  const boxCreator = getElement('.box__creator')
  const boxProfile = getElement('.box__profile')

  const buttonHome = getElement('.app-nav__button-home')
  const buttonBookmark = getElement('.app-nav__button-bookmarks')
  const buttonCreate = getElement('.app-nav__button-creator')
  const buttonProfile = getElement('.app-nav__button-profile')

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
}
