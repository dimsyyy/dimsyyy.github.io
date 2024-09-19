const texts = ["Informatic Student", "Your Future >_<", "Web Developer", "Game Developer"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100; 

function type() {
  const typewriter = document.getElementById("writer");

  // Set teks yang sedang diketik
  currentText = texts[count % texts.length]; 

  if (isDeleting) {
    typewriter.innerHTML = currentText.substring(0, index - 1);
    index--;
  } else {
    typewriter.innerHTML = currentText.substring(0, index + 1);
    index++;
  }

  if (!isDeleting && index === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1500); // Tunggu 1 detik sebelum mulai menghapus
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500);
    return;
  }

  const speed = isDeleting ? 50 : typingSpeed;
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", function() {
  type();
});


//buat animasinya dongggg
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("load", function () {
        const loadingScreen = document.getElementById("loading-screen");
        const mainContent = document.getElementById("main-content");
        
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    });

    const elementsToAnimate = document.querySelectorAll('.utama, .text, .top-about, .buatfoto, .desk, .listskill');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animasi');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
      });
});
