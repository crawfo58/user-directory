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
    const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value)
    }

    const list = document.createElement('ul')

    Object.keys(user).forEach(function(label) {
      const item = renderListItem(label, user[label])
      list.appendChild(item)
    })

    const users = document.querySelector('#users')
  
    return list
}

form.addEventListener('submit', changeText)