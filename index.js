console.log('It works!')
const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const userName = form.userName.value
    const age = form.age.value
    users.innerHTML += `<p>${userName}, ${age}</p>`
    form.reset()
    form.userName.focus()
}
const form = document.querySelector('form#userForm')
form.addEventListener('submit', changeText)

