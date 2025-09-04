document.addEventListener("DOMContentLoaded", () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];
    const projects = [
        { title: "Portfolio Website", link: "#", image: "project-1.webp" },
        { title: "E-Commerce Site", link: "#", image: "project2.webp" },
        { title: "Task Manager App", link: "#", image: "project3.webp" }
    ];

    // Use a template for skills
    const skillsContainer = document.querySelector(".skills-container");
    const skillTemplate = document.getElementById("skill-template");
    
    for (const skill of skills) {
        const skillClone = skillTemplate.content.cloneNode(true);
        skillClone.querySelector(".skill").textContent = skill;
        skillsContainer.appendChild(skillClone);
    }

    // Use a template for projects
    const projectsContainer = document.querySelector(".projects-container");
    const projectTemplate = document.getElementById("project-template");

    for (const project of projects) {
        const projectClone = projectTemplate.content.cloneNode(true);
        projectClone.querySelector(".project-card img").src = project.image;
        projectClone.querySelector(".project-card h3").textContent = project.title;
        projectClone.querySelector(".project-card a").href = project.link;
        projectsContainer.appendChild(projectClone);
    }

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
