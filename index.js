console.log('It works!')
const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const userName = form.userName.value
    users.textContent += ' ' + userName
    form.userName.value = ''
}
const form = document.querySelector('form#userForm')
form.addEventListener('submit', changeText)

