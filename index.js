const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false
let imagesLoaded = 0
let totalImages = 0
let photosArray = []

const count = 30
const apiKey = config.API_KEY
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

function imageLoaded() {
    // console.log('image loaded')
    imagesLoaded++
    console.log(imagesLoaded)
    if (imagesLoaded === totalImages) {
        ready = true
        loader.hidden = true
        console.log('ready =', ready)
    }
}


function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    imagesLoaded = 0
    totalImages = photosArray.length
    console.log('total images', totalImages)
    photosArray.forEach((photo) => {
        const item = document.createElement('a')
    
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        const img = document.createElement('img')

        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        
        img.addEventListener('load', imageLoaded)

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

window.addEventListener('scroll', () => {
    // console.log('scrolled')
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false
        getPhotos()
    }
})


getPhotos()