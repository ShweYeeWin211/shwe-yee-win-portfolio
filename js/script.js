/* =========================================
   Typing Animation Effect 
   ========================================= */

const typedTextElement = document.querySelector(".typed-text");
const wordsArray = [
    "CS Student at UCSMKT", 
    "Web Security Enthusiast", 
    "Full-Stack Developer", 
    "Python Automator"
];

let currentWordIndex = 0;
let currentCharIndex = 0;
let isErasing = false;

function playTypingAnimation() {
    if (!typedTextElement) return; // typed-text မရှိတဲ့ page ဆိုရင် ဘာမှမလုပ်ဘူး

    const currentWord = wordsArray[currentWordIndex];

    if (!isErasing) {
        // စာရိုက်နေတဲ့ အပိုင်း
        typedTextElement.textContent = currentWord.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        if (currentCharIndex === currentWord.length) {
            isErasing = true;
            setTimeout(playTypingAnimation, 2000); // စာဆုံးရင် ၂ စက္ကန့် စောင့်မယ်
        } else {
            setTimeout(playTypingAnimation, 100); // စာတစ်လုံးချင်းရိုက်တဲ့နှုန်း
        }
    } else {
        // စာပြန်ဖျက်နေတဲ့ အပိုင်း
        typedTextElement.textContent = currentWord.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isErasing = false;
            currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
            setTimeout(playTypingAnimation, 500); // ဖျက်ပြီးရင် ခဏနားမယ်
        } else {
            setTimeout(playTypingAnimation, 50); // ဖျက်တဲ့နှုန်း
        }
    }
}

// Page Load ဖြစ်တာနဲ့ Animation စမယ်
document.addEventListener("DOMContentLoaded", playTypingAnimation);