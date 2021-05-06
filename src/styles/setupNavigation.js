import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')
  const header = getElement('[data-header]')

  buttons.forEach(setupButton)

  function setupButton(button) {
    const buttonName = button.dataset.nav
    button.addEventListener('click', () => {
      header.innerText = buttonName.toUpperCase()
      updateHeader(buttonName)
      changePage(buttonName)
      updateNavigation(buttonName)
    })
  }

  function updateHeader(buttonName) {
    if (buttonName === 'home') {
      header.innerText = 'Quiz App'
    } else if (buttonName === 'create') {
      header.innerText = 'Create'
    } else if (buttonName === 'bookmarks') {
      header.innerText = 'Bookmarks'
    }
  }

  function updateNavigation(buttonName) {
    buttons.forEach(button => {
      button.classList.toggle('active', button.dataset.nav === buttonName)
    })
  }

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }
}
