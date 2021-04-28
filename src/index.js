const form = document.querySelector('[data-form]')
const input = document.querySelector('[name=class]')
const box = document.querySelector('[data-box]')

form.addEventListener('submit', event => {
  event.preventDefault()
  // box.classList.toggle(input.value)
  box.className = 'box ' + input.value
  input.value = ''
  input.focus()
})
