const contactBookmark = document.querySelector('.card-author-bookmark')
const shareIcon = document.querySelector('.share-icon')

const handleOpenState = () => {
	contactBookmark.classList.toggle('open')
	shareIcon.classList.toggle('active')
}

shareIcon.addEventListener('click', handleOpenState)
