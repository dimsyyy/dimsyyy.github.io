function checkIfDesktop() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const mainContent = document.getElementById("main-content");
  const warnings = document.querySelectorAll(".dekstop"); // NodeList

  console.log(warnings); // Debugging
  console.log("Jumlah elemen dekstop:", warnings.length);

  if (screenWidth > screenHeight && screenWidth >= 500) {
      if (mainContent) {
          mainContent.style.display = "none";
      } else {
          console.error("Element #main-content tidak ditemukan!");
      }

      warnings.forEach(warning => {
          if (warning.style) { // Pastikan elemen memiliki properti 'style'
              warning.style.display = "block";
          } else {
              console.error("Elemen dekstop tidak memiliki properti style:", warning);
          }
      });
      console.log("Layar desktop");
  } else {
      warnings.forEach(warning => {
          if (warning.style) { // Pastikan elemen memiliki properti 'style'
              warning.style.display = "none";
          } else {
              console.error("Elemen dekstop tidak memiliki properti style:", warning);
          }
      });
      if (mainContent) {
          mainContent.style.display = "block";
      }
      console.log("Layar mobile");
  }
}

window.addEventListener("resize", checkIfDesktop)


const texts = ["Informatic Student", "Your Future >_<", "Web Developer", "Game Developer"]
let count = 0
let index = 0
let currentText = ""
let isDeleting = false
let typingSpeed = 100 

function type() {
  const typewriter = document.getElementById("writer")


  currentText = texts[count % texts.length] 

  if (isDeleting) {
    typewriter.innerHTML = currentText.substring(0, index - 1)
    index--
  } else {
    typewriter.innerHTML = currentText.substring(0, index + 1)
    index++
  }

  if (!isDeleting && index === currentText.length) {
    setTimeout(() => {
      isDeleting = true
    }, 1500) 
  } else if (isDeleting && index === 0) {
    isDeleting = false
    count++
    setTimeout(type, 500)
    return
  }

  const speed = isDeleting ? 50 : typingSpeed
  setTimeout(type, speed)
}

document.addEventListener("DOMContentLoaded", function() {
  type()
})


//buat animasinya dongggg
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen")
    const mainContent = document.getElementById("main-content")
    
    loadingScreen.classList.add("fade-out")
    setTimeout(() => {
        loadingScreen.style.display = "none"
        mainContent.style.display = "block"
        checkIfDesktop()
    }, 800)

})

    const elementsToAnimate = document.querySelectorAll('.utama, .text, .top-about, .buatfoto, .desk, .listskill')

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animasi')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.1 })

    elementsToAnimate.forEach(element => {
        observer.observe(element)
      })
})
