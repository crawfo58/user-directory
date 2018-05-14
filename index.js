console.log('It works!')
const changeText = function() {
    document.getElementsByClassName('header2')[0].innerHTML = 'Button Clicked'
  }
const button = document.querySelector('button')
button.addEventListener('click', changeText)