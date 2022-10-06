// select a random color
const body = document.querySelector('body')
const button = document.getElementById('button') 
const colors = ['red', 'blue', 'green', 'purple', 'wheat']

// Assign an initial color to the background
body.style.backgroundColor = 'gold'
button.addEventListener('click', changeBackground)

// Implement the changeBackground function
function changeBackground() {
    colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}