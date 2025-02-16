document.addEventListener("DOMContentLoaded", () => {
    const heartButton = document.querySelector(".heart-button");
    
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        
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
});
