import getAllElements from './utils/getAllElements'

export default function setupBookmarks() {
  const bookmarks = getAllElements('.card__bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--selected')
    })
  })
}
