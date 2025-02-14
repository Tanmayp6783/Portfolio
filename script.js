
let links = document.querySelectorAll('.about');
let tabs = document.querySelectorAll('.tab-contents');


document.querySelectorAll('.about').forEach(item => {
    item.addEventListener('click', function() {
        tabOpen(this.textContent.toLowerCase());  
    });
});

function tabOpen(tabSelected) {
  
    links.forEach((link) => {
        link.classList.remove('active-section');
    });

  
    tabs.forEach((tab) => {
        tab.classList.remove('active-tab');
    });
    const currLink = document.querySelector(`.${tabSelected}`)
    currLink.classList.add('active-section') 
    const currTab = document.getElementById(tabSelected)
    currTab.classList.add('active-tab')
}

function openMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'none'
    rightMenu.style.right = "0"
}
function closeMenu(){
    const hamburger = document.querySelector('.fa-bars')
    const rightMenu = document.querySelector('header nav ul')
    hamburger.style.display = 'block'
    rightMenu.style.right = "-200px"
}


function darkMode(){
    document.body.classList.toggle("dark-mode")
    const icon = document.querySelector(".dark-icon")
    const logo = document.querySelector('header .logo > span')
    if(document.body.classList.contains("dark-mode")){
        icon.src = "elements/sun.png"
        logo.style.color = "#fff";
    }
    else{
        icon.src = "elements/moon.png"
        logo.style.color = "black";
    }
}


const staticText = "I'm Tanmay Patil, a  "; 
const words = ["Web Developer.", "Designer.", "Creator."]; 
const typingSpeed = 100;
const deletingSpeed = 50; 
const delayBetweenWords = 1500; 
const delayAfterFullSentence = 1000; 

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isTypingFullSentence = true; 
const typingText = document.querySelector(".typing-text");

function typeEffect() {
    if (isTypingFullSentence) {
       
        if (charIndex < staticText.length) {
            typingText.textContent = staticText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            
            isTypingFullSentence = false;
            charIndex = 0;
            setTimeout(typeEffect, delayAfterFullSentence); 
        }
    } else {
     
        let currentWord = words[wordIndex];
        let displayText = staticText + currentWord.substring(0, charIndex);

        typingText.textContent = displayText;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
          
            if (!isDeleting) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, delayBetweenWords);
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; 
                setTimeout(typeEffect, typingSpeed);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


function sendEmail() {
    window.location.href = "mailto:tanmayp205@gmail.com";
}

