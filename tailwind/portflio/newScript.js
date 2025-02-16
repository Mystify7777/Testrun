document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll(".skill, .project-card").forEach(element => {
        observer.observe(element);
    });

    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            document.documentElement.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.2)');
            document.documentElement.style.setProperty('--text-color', '#fff');
        } else {
            document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.2)');
            document.documentElement.style.setProperty('--text-color', '#111');
        }
    }

    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    


});