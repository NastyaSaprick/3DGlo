const modal = () => {
  const modal = document.querySelector('.popup')
  const buttons = document.querySelectorAll('.popup-btn')
  const closeBtn = modal.querySelector('.popup-close')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block'
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
  })

  //при нажатии мимо модального окна - оно закрывается
  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  })
}

export default modal