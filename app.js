const ciudades = [

  {
  "nombre": "Rabat",
  "descripcion": "Capitale moderne et historique du Maroc",
  "imagen": "./img/rabat_hassan.jfif",
  "caracteristicas": [
    "Tour Hassan",
    "Grand Théâtre",
    "Bouregreg moderne",
    "Ville propre et organisée"
  ]
},
{
  "nombre": "Tanger",
  "descripcion": "Ville entre Atlantique et Méditerranée",
  "imagen": "./img/marina_tanger.jfif",
  "caracteristicas": [
    "Port moderne",
    "Mer Méditerranée",
    "Kasbah historique",
    "Vue panoramique"
  ]
},
{
  "nombre": "Ifrane",
  "descripcion": "La petite Suisse du Maroc",
  "imagen": "./img/ifrane.jfif",
  "caracteristicas": [
    "Neige en hiver",
    "Architecture alpine",
    "Forêts de cèdres",
    "Ville propre"
  ]
},
{
  "nombre": "Marrakech",
  "descripcion": "La ville rouge et touristique",
  "imagen": "./img/marrakech.jfif",
  "caracteristicas": [
    "Jemaa el-Fna",
    "Médina rouge",
    "Guéliz moderne",
    "Palmeraie"
  ]
},

{
  "nombre": "Chefchaouen",
  "descripcion": "La ville bleue du Maroc",
  "imagen": "./img/chefchaouen.jfif",
  "caracteristicas": [
    "Maisons bleues",
    "Montagnes du Rif",
    "Ville paisible",
    "Tourisme photo"
  ]
},
{
  "nombre": "Agadir",
  "descripcion": "Ville balnéaire moderne",
  "imagen": "./img/agadir.jfif",
  "caracteristicas": [
    "Grande plage",
    "Marina moderne",
    "Climat doux",
    "Tourisme balnéaire"
  ]
},
{
  "nombre": "Merzouga",
  "descripcion": "Porte du désert du Sahara",
  "imagen": "./img/marzouga.png",
  "caracteristicas": [
    "Dunes de l’Erg Chebbi",
    "Chameaux",
    "Coucher de soleil désert",
    "Nuit étoilée"
  ]
},
{
  "nombre": "Dakhla",
  "descripcion": "Entre désert et océan",
  "imagen": "./img/dakhla.png",
  "caracteristicas": [
    "Lagune turquoise",
    "Kitesurf mondial",
    "Désert et mer",
    "Nature sauvage"
  ]
},
{
  "nombre": "Ouzoud",
  "descripcion": "Les plus grandes cascades du Maroc",
  "imagen": "./img/ouzoud.webp",
  "caracteristicas": [
    "Chutes d’eau",
    "Singe magots",
    "Montagnes de l’Atlas",
    "Nature verte"
  ]
},
{
  "nombre": "Fès",
  "descripcion": "Capitale spirituelle et culturelle",
  "imagen": "./img/fes.jpg",
  "caracteristicas": [
    "Médina ancienne",
    "Tanneries",
    "Architecture historique",
    "UNESCO"
  ]
}

]

let currentIndex = 0

const carouselImage = document.getElementById("carouselImage")
const carouselTitle = document.getElementById("carouselTitle")
const carouselDescription = document.getElementById("carouselDescription")
const carouselFeatures = document.getElementById("carouselFeatures")

const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

function showSlide(index) {

  const ciudad = ciudades[index]

  carouselImage.src = ciudad.imagen
  carouselImage.alt = ciudad.nombre

  carouselTitle.textContent = ciudad.nombre

  carouselDescription.textContent = ciudad.descripcion

  carouselFeatures.innerHTML = ""

  ciudad.caracteristicas.forEach(caracteristica => {

    const li = document.createElement("li")

    li.innerHTML =  caracteristica

    carouselFeatures.appendChild(li)

  })

}

nextBtn.addEventListener("click", () => {

  currentIndex++

  if (currentIndex >= ciudades.length) {
    currentIndex = 0
  }

  showSlide(currentIndex)

})

prevBtn.addEventListener("click", () => {

  currentIndex--

  if (currentIndex < 0) {
    currentIndex = ciudades.length - 1
  }

  showSlide(currentIndex)

})

showSlide(currentIndex)