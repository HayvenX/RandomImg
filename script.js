const photo = document.getElementById("photo")

const photoArray =
[
    "img/dog.jpg",
    "img/pan.jpg",
    "img/symbol.jpg",
    "img/dice.jpg",
    "img/rice.jpg"
]

function RandomNumber()
{
    return Math.floor(Math.random() * photoArray.length)
}

function RandomPhoto()
{
    photo.setAttribute("src", photoArray[RandomNumber(5)])
}
setInterval(RandomPhoto, 2500)
