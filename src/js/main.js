'use strict'

const modal = document.getElementById('videoModal')
const frame = document.getElementById('modalFrame')
const openBtn = document.querySelector('.play-video__button')
const closeBtn = modal.querySelector('.modal__close')
const overlay = modal.querySelector('.modal__overlay')

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth
}

function openModal(videoUrl) {
  const scrollbarWidth = getScrollbarWidth()

  document.body.style.paddingRight = `${scrollbarWidth}px`
  document.body.classList.add('no-scroll')

  frame.src = `${videoUrl}?autoplay=1`
  modal.classList.add('is-active')
}

function closeModal() {
  modal.classList.remove('is-active')
  frame.src = 'about:blank'

  document.body.classList.remove('no-scroll')
  document.body.style.paddingRight = ''
}

openBtn.addEventListener('click', () => {
  openModal(openBtn.dataset.video)
})

closeBtn.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})
