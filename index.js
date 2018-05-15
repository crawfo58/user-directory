const form = document.querySelector('form#userForm')

const changeText = function(ev) {
  ev.preventDefault()
  const form = ev.target
  const userName = form.userName.value
  const age = form.age.value
  
  const users = document.querySelector('#users')

  const list = document.createElement('ul')

  const nameItem = renderListItem()
  nameItem.textContent = `Name: ${userName}`

  const ageItem = renderListItem()
  ageItem.textContent = `Age: ${age}`

  const colorItem = renderListItem()
  colorItem.textContent = 'Favorite Color: '

  colorItem.appendChild(renderColor())

  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  users.appendChild(list)

  form.reset()
  form.userName.focus()
}

const renderColor = function() {
  const favoriteColor = form.favoriteColor.value
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

const renderListItem = function() {
    return document.createElement('li')
}

form.addEventListener('submit', changeText)