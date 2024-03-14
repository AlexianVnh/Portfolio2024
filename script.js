// Transition du Hero-title quand la page se charge
document.addEventListener("DOMContentLoaded", function(event) {
    let transitionsScale = document.querySelectorAll(".scale-transition")
    
    transitionsScale.forEach(function(transitionsScale) {
        transitionsScale.classList.add("transition-active")
    })
})

// Boutons position aware
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button-javacript')
    let mouseX = 0, mouseY = 0
    let timeoutId

    button.addEventListener('mouseenter', function(e) {
        button.onmousemove = function(e) {
            clearTimeout(timeoutId)
            let rect = this.getBoundingClientRect() // Position et dimensions de l'élément
            let x = e.clientX - rect.left
            let y = e.clientY - rect.top
            this.style.setProperty('--x', x + 'px')
            this.style.setProperty('--y', y + 'px')
        }
    })
    
    button.addEventListener('mouseleave', function(e) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function() {
            mouseX = 0
            mouseY = 0
            button.onmousemove = null
            button.style.setProperty('--x', mouseX + 'px')
            button.style.setProperty('--y', mouseY + 'px')
        }, 800) // Délai
    })

    button.parentElement.addEventListener('mouseleave', function(e) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function() {
            mouseX = null
            mouseY = null
            button.onmousemove = null
            button.style.setProperty('--x', null + 'px')
            button.style.setProperty('--y', null + 'px')
        }, 780) // Délai 
    })

    button.onmousemove = function(e) {
        clearTimeout(timeoutId)
        if (mouseX !== undefined && mouseY !== undefined) {
            let rect = this.getBoundingClientRect()
            let x = e.clientX - rect.left
            let y = e.clientY - rect.top
            this.style.setProperty('--x', x + 'px')
            this.style.setProperty('--y', y + 'px')
        }
    }
})


const texteAnim = document.querySelector('#movement-text')
new Typewriter(texteAnim, {
    loop: true,
    deleteSpeed: 25,
})
.changeDelay(35)
.typeString('Je suis ')
.pauseFor(300)
.typeString('Alexian Vannieuwenhuyze')
.pauseFor(1500)
.deleteChars(23)
.typeString('futur développeur front-end')
.pauseFor(1500)
.deleteChars(27)
.typeString('en recherche d\'alternance !')
.pauseFor(1500)
.deleteChars(27)
.start()



// Tab des projets
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-btn-list button')
    const cardContainers = document.querySelectorAll('.card-container')

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Récupérer l'ID associé au bouton cliqué
            const targetId = this.getAttribute('id').replace('btn-', '')

            if (targetId === 'all') {
                // Si le bouton cliqué est "TOUS", afficher tous les éléments card-container
                cardContainers.forEach(container => {
                    container.style.display = 'flex'
                })
            } else {
                // Sinon, cacher tous les éléments card-container
                cardContainers.forEach(container => {
                    container.style.display = 'none'
                })

                // Afficher uniquement les éléments correspondant à l'ID
                const targetContainers = document.querySelectorAll(`#${targetId}`)
                targetContainers.forEach(container => {
                    container.style.display = 'flex'
                })
            }
        })
    })
})

// Tab des projets
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-btn-list button')
    const dropdownButtons = document.querySelectorAll('.dropdown-btn')
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => {
                btn.classList.remove('active') // Supprimer la classe active de tous les boutons
            })
            this.classList.add('active') // Ajouter la classe active au bouton cliqué
            const targetId = this.getAttribute('id').replace('btn-', '')
            // Votre code pour afficher les éléments correspondants à l'ID cible...
        })
    })
})



// Z-index des big-card
const bigCards = document.querySelectorAll('.big-card')

bigCards.forEach(card => {
    card.addEventListener('click', () => {
        // Déplacer la carte cliquée en haut de la pile (z-index)
        card.style.zIndex = 2
        // Réduire le z-index de toutes les autres cartes
        bigCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.zIndex = 1
            }
        })
    })
})


// Formulaire de mail
function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_c7rq51m", "template_kg98jp5", params).then(function() {
        document.querySelector(".success-message").classList.add("success")
        setTimeout(function() {
            document.querySelector(".success-message").classList.remove("success")
        }, 3000)
    })
    // Animation lors du clique sur le bouton envoi
    document.querySelector(".send-button").classList.add("sent")
    setTimeout(function() {
        document.querySelector(".send-button").classList.remove("sent")
    }, 1000)
}





// Slider projets responsive 1
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide")
    let currentSlide = 0

    function showSlide(n) {
        slides[currentSlide].classList.remove("slide-active")
        currentSlide = (n + slides.length) % slides.length
        slides[currentSlide].classList.add("slide-active")
    }

    function nextSlide() {
        showSlide(currentSlide + 1)
    }
    function previousSlide() {
        showSlide(currentSlide - 1)
    }

    document.querySelector(".slide-left-arrow").addEventListener("click", previousSlide)
    document.querySelector(".slide-right-arrow").addEventListener("click", nextSlide)
})

// Slider projets responsive 2
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide2")
    let currentSlide = 0

    function showSlide(n) {
        slides[currentSlide].classList.remove("slide-active")
        currentSlide = (n + slides.length) % slides.length
        slides[currentSlide].classList.add("slide-active")
    }

    function nextSlide() {
        showSlide(currentSlide + 1)
    }
    function previousSlide() {
        showSlide(currentSlide - 1)
    }

    document.querySelector(".slide2-left-arrow").addEventListener("click", previousSlide)
    document.querySelector(".slide2-right-arrow").addEventListener("click", nextSlide)
})

// Slider projets responsive 3
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide3")
    let currentSlide = 0

    function showSlide(n) {
        slides[currentSlide].classList.remove("slide-active")
        currentSlide = (n + slides.length) % slides.length
        slides[currentSlide].classList.add("slide-active")
    }

    function nextSlide() {
        showSlide(currentSlide + 1)
    }
    function previousSlide() {
        showSlide(currentSlide - 1)
    }

    document.querySelector(".slide3-left-arrow").addEventListener("click", previousSlide)
    document.querySelector(".slide3-right-arrow").addEventListener("click", nextSlide)
})





// Quand on clique des récents projets, ça nous envoie sur le bon projet du carousel
function changerCarousel(idWanted) {
    // Changer l'ID du carousel actif
    var carouselActif = document.querySelector('.slide.slide-active')
    carouselActif.classList.remove('slide-active')

    var nouveauCarousel = document.getElementById(idWanted)
    nouveauCarousel.classList.add('slide-active')

    // Faire défiler jusqu'au carousel actif
    window.location.hash = idWanted
}