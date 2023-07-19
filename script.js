const idNum = Math.floor(Math.random() * 9) + 1;

// // const image = document.getElementById(idNum)

// // image.classList.add('active')

const path = './img/' + idNum + '.jpg'

document.getElementById("myImage").src=path;