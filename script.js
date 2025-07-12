const text = "Aniket Tagor";


// typing elemet 

const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Typing speed
    }
}


// group typing 

const texts = [
      "I am a Computer Engineering Student.",
      "I love Web Development.",
      "I build real-world tech solutions.",
      "Let's create something amazing!"
    ];
    const speed = 30; // typing speed
    const backSpeed = 50; // backspacing speed
    const delay = 1000; // pause between typing and backspacing
    let textIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typewriter = document.getElementById("typewriter");
 function typeEffect() {
      const currentText = texts[textIndex];

      if (typing) {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
          typing = false;
          setTimeout(typeEffect, delay);
          return;
        }
      } else {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          typing = true;
          textIndex = (textIndex + 1) % texts.length;
        }
      }
      setTimeout(typeEffect, typing ? speed : backSpeed);
    }

    typeEffect();




  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });










// funtion calls
typeText();
