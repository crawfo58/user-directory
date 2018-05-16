const form = document.querySelector('form#userForm')

const changeText = function(ev) {
  ev.preventDefault()
  const form = ev.target

  users.appendChild(renderList())

  form.reset()
  form.userName.focus()
}

const renderColor = function(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

const renderListItem = function(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
      item.appendChild(value)
    } catch(e) {
      item.textContent += value
    }
    return item
}

const renderList = function() {
    const userName = form.userName.value
    const age = form.age.value
    const favoriteColor = renderColor(form.favoriteColor.value)
    
    const users = document.querySelector('#users')

    const list = document.createElement('ul')
  
    list.appendChild(renderListItem('Name', userName))
    list.appendChild(renderListItem('Age', age))
    list.appendChild(renderListItem('Favorite Color', favoriteColor))

    return list
}

form.addEventListener('submit', changeText)