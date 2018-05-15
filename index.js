console.log('It works!')
const changeText = function(ev) {
    ev.preventDefault()
    const heading = document.querySelector('h1')
    const input = document.querySelector('input')
    heading.textContent = input.value
}
const form = document.querySelector('form#userForm')
form.addEventListener('submit', changeText)

