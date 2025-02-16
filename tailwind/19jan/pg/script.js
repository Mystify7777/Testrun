// Image Preview Script
document.getElementById('image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Form submission logic
document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);

    const name = formData.get('name');
    const bio = formData.get('bio');
    const skills = formData.get('skills').split(',');
    const projects = formData.get('projects').split(',');
    const contact = formData.get('contact');
    const linkedin = formData.get('linkedin');
    const github = formData.get('github');
    const twitter = formData.get('twitter');
    const color = formData.get('color');
    
    // Getting the image data as a base64 string
    const imageFile = formData.get('image');
    const reader = new FileReader();
    
    reader.onloadend = function () {
        const portfolioData = {
            name,
            bio,
            skills,
            projects,
            contact,
            linkedin,
            github,
            twitter,
            color,
            image: reader.result // Save the image as base64 string
        };

        // Generate portfolio HTML
        const portfolioHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${portfolioData.name}'s Portfolio</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body style="background-color: ${portfolioData.color};">
            <nav>
                <div class="container">
                    <h1>${portfolioData.name}</h1>
                    <div>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>

            <header>
                <div class="container right">
                    <h1>Welcome to My Portfolio</h1>
                    <p>${portfolioData.bio}</p>
                </div>
                <div class="container left">
                    <img src="${portfolioData.image}" alt="${portfolioData.name}" class="avatar">
                </div>
            </header>

            <section id="about">
                <h2>About Me</h2>
                <p>${portfolioData.bio}</p>
            </section>

            <section id="projects">
                <h2>My Projects</h2>
                <div class="project-cards">
                    ${portfolioData.projects.map(project => `
                        <div class="project-card">
                            <h3>${project.trim()}</h3>
                            <p>A description of the project.</p>
                            <a href="#">View Project</a>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section id="skills">
                <h2>My Skills</h2>
                <ul class="skills-list">
                    ${portfolioData.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </section>

            <section id="contact">
                <h2>Contact Me</h2>
                <p>If you'd like to collaborate or just say hi, feel free to reach out!</p>
                <p>${portfolioData.contact}</p>
                <div>
                    ${portfolioData.linkedin ? `<a href="${portfolioData.linkedin}" target="_blank">LinkedIn</a>` : ''}
                    ${portfolioData.github ? `<a href="${portfolioData.github}" target="_blank">GitHub</a>` : ''}
                    ${portfolioData.twitter ? `<a href="${portfolioData.twitter}" target="_blank">Twitter</a>` : ''}
                </div>
            </section>

            <footer>
                <p>&copy; 2025 ${portfolioData.name}'s Portfolio. All Rights Reserved.</p>
            </footer>
        </body>
        </html>
        `;
    
        // Open a new window with the generated portfolio
        const newWindow = window.open();
        newWindow.document.write(portfolioHTML);
        newWindow.document.close();
    };

    // Read the image file if it exists
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        reader.onloadend(); // Proceed without the image if not provided
    }
});
