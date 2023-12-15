const photo = document.getElementById("photo")

const photoArray =
[
    "img/dog.jpg",
    "img/pan.jpg",
    "img/symbol.jpg",
    "img/dice.jpg",
    "img/rice.jpg"
]

function RandomNumber(max)
{
    return Math.floor(Math.random() * max)
}

function RandomPhoto()
{
    RandomNumber(5)
    photo.setAttribute("src", photoArray[RandomNumber(5)])
}
setInterval(RandomPhoto, 2500)
