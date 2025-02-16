document.addEventListener("DOMContentLoaded", () => {
    const heartButton = document.querySelector(".heart-button");
    
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity for depth effect
        heart.style.transform = `scale(${Math.random() * 0.7 + 0.5})`; // Random scaling
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    heartButton.addEventListener("click", () => {
        for (let i = 0; i < 10; i++) {
            setTimeout(createHeart, i * 200);
        }
    });
    
    setInterval(createHeart, 1000);
    
    // Add glowing effect
    const style = document.createElement("style");
    style.innerHTML = `
        .heart {
            position: absolute;
            top: -10vh;
            font-size: 2rem;
            animation: falling-hearts 5s linear infinite, glow 1.5s ease-in-out infinite alternate;
            text-shadow: 0 0 10px rgba(255, 0, 100, 0.8), 0 0 20px rgba(255, 0, 100, 0.6);
        }
        @keyframes glow {
            0% { text-shadow: 0 0 10px rgba(255, 0, 100, 0.8), 0 0 20px rgba(255, 0, 100, 0.6); }
            100% { text-shadow: 0 0 20px rgba(255, 0, 100, 1), 0 0 30px rgba(255, 0, 100, 0.8); }
        }
        @keyframes falling-hearts {
            0% {
                transform: translateY(-10vh) translateX(0) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) translateX(${Math.random() * 20 - 10}vw) scale(1.2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
