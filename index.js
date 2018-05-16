const form = document.querySelector('form#userForm')

const changeText = function(ev) {
  ev.preventDefault()
  const form = ev.target

  const user = {
    'Name': form.userName.value,
    'Age': form.age.value,
    'Favorite Color': renderColor(form.favoriteColor.value)
  }

  const list = renderList(user)
  const users = document.querySelector('#users')
  users.appendChild(list)

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

    const term = document.createElement('dt')
    term.textContent = label

    const description = document.createElement('dd')
    try {
      description.appendChild(value)
    } catch(e) {
      description.textContent += value
    }

    item.appendChild(term)
    item.appendChild(description)
    return item
}

const renderList = function(data) {
    const list = document.createElement('dl')

    Object.keys(data).forEach(label => {
      const item = renderListItem(label, data[label])
      list.appendChild(item)
    })
  
    return list
}

form.addEventListener('submit', changeText)