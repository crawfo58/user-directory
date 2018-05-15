console.log('It works!')
const changeText = function(ev) {
    ev.preventDefault()
    const users = document.querySelector('#users')
    const userName = form.userName.value
    const age = form.age.value
    const color = form.favoriteColor.value

    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${userName}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    list.appendChild(nameItem)
    list.appendChild(ageItem)

    users.appendChild(list)

    form.reset()
    form.userName.focus()
}
const form = document.querySelector('form#userForm')
form.addEventListener('submit', changeText)

