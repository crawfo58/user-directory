console.log('It works!')
const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const userName = form.userName.value
    const age = form.age.value

    const p = document.createElement('p')
    p.textContent = `${userName}, ${age}`
    users.appendChild(p)

    form.reset()
    form.userName.focus()
}
const form = document.querySelector('form#userForm')
form.addEventListener('submit', changeText)

