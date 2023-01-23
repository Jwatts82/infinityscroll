const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []

const count = 10
const apiKey = config.API_KEY
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_blank')
        const img = document.createElement('img')
        img.setAttribute('src', photo.urls.regular)
        img.setAttribute('alt', photo.alt_description)
        img.setAttribute('title', photo.alt_description)
        item.appendChild(img)
        imageContainer.appendChild(item)

    })
}


async function getPhotos() {
    const res = await fetch(apiURL)
    photosArray = await res.json()
    // console.log(photosArray)
    displayPhotos()
}


getPhotos()