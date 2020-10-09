const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red','aqua', 'blue', 'thistle', 'teal', 'tan']

body.style.backgroundColor = 'firebrick'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}