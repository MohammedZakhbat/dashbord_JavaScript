const ciudades = [

  {
    "nombre": "Rabat",
    "descripcion": "Capital moderna e histórica de Marruecos",
    "imagen": "./img/rabat_hassan.jfif",
    "caracteristicas": [
      "Torre Hassan",
      "Gran Teatro",
      "Bouregreg moderno",
      "Ciudad limpia y organizada"
    ]
  },
  {
    "nombre": "Tánger",
    "descripcion": "Ciudad entre el Atlántico y el Mediterráneo",
    "imagen": "./img/marina_tanger.jfif",
    "caracteristicas": [
      "Puerto moderno",
      "Mar Mediterráneo",
      "Kasbah histórica",
      "Vista panorámica"
    ]
  },
  {
    "nombre": "Ifrane",
    "descripcion": "La pequeña Suiza de Marruecos",
    "imagen": "./img/ifrane.jfif",
    "caracteristicas": [
      "Nieve en invierno",
      "Arquitectura alpina",
      "Bosques de cedros",
      "Ciudad limpia"
    ]
  },
  {
    "nombre": "Marrakech",
    "descripcion": "La ciudad roja y turística",
    "imagen": "./img/marrakech.jfif",
    "caracteristicas": [
      "Jemaa el-Fna",
      "Medina roja",
      "Guéliz moderno",
      "Palmeral"
    ]
  },

  {
    "nombre": "Chefchaouen",
    "descripcion": "La ciudad azul de Marruecos",
    "imagen": "./img/chefchaouen.jfif",
    "caracteristicas": [
      "Casas azules",
      "Montañas del Rif",
      "Ciudad tranquila",
      "Turismo fotográfico"
    ]
  },
  {
    "nombre": "Agadir",
    "descripcion": "Ciudad costera moderna",
    "imagen": "./img/agadir.jfif",
    "caracteristicas": [
      "Gran playa",
      "Marina moderna",
      "Clima suave",
      "Turismo de playa"
    ]
  },
  {
    "nombre": "Merzouga",
    "descripcion": "Puerta del desierto del Sahara",
    "imagen": "./img/marzouga.png",
    "caracteristicas": [
      "Dunas del Erg Chebbi",
      "Camellos",
      "Atardecer en el desierto",
      "Noche estrellada"
    ]
  },
  {
    "nombre": "Dajla",
    "descripcion": "Entre desierto y océano",
    "imagen": "./img/dakhla.png",
    "caracteristicas": [
      "Laguna turquesa",
      "Kitesurf de nivel mundial",
      "Desierto y mar",
      "Naturaleza salvaje"
    ]
  },
  {
    "nombre": "Ouzoud",
    "descripcion": "Las cascadas más grandes de Marruecos",
    "imagen": "./img/ouzoud.webp",
    "caracteristicas": [
      "Cascadas",
      "Monos macacos",
      "Montañas del Atlas",
      "Naturaleza verde"
    ]
  },
  {
    "nombre": "Fez",
    "descripcion": "Capital espiritual y cultural",
    "imagen": "./img/fes.jpg",
    "caracteristicas": [
      "Medina antigua",
      "Curtidurías",
      "Arquitectura histórica",
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
let autoPlay = false
let intervalId = null

const autoPlayBtn = document.getElementById("autoPlayBtn")

autoPlayBtn.addEventListener("click", () => {

  if (!autoPlay) {

    autoPlay = true

    autoPlayBtn.textContent = "⏸ Stop"

    intervalId = setInterval(() => {

      currentIndex++

      if (currentIndex >= ciudades.length) {
        currentIndex = 0
      }

      showSlide(currentIndex)

    }, 3000) 

  } else {

    autoPlay = false

    autoPlayBtn.textContent = "▶ Auto"

    clearInterval(intervalId)

  }

})