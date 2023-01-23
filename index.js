const count = 10
const apiKey = config.MY_KEY
const apiURL = `https://api.unsplash.com/photos/random/?client_id=pE-JhLaW8c0ehzthFKwLlBCudwxlpUN4PwfL2Ji4YFI&count=${count}`

async function getPhotos() {
  const res = await fetch(apiURL)
  const data = res.json()

  console.log(data)
}


getPhotos()