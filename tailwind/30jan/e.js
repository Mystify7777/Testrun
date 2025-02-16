const sports = [
    { name: "Football", image: "sportf.jpg", description: "The world's most popular sport, played by millions globally." },
    { name: "Basketball", image: "sportb.jpg", description: "A fast-paced game played on a rectangular court." },
    { name: "Tennis", image: "sports.jpg", description: "A racket sport played individually or in pairs." },
    { name: "Cricket", image: "sportf.jpg", description: "A bat-and-ball game popular in many countries." },
    { name: "Swimming", image: "sportsw.jpg", description: "A water-based sport for fitness and competition." },
    { name: "Athletics", image: "sportat.jpg", description: "Track and field events including running, jumping, and throwing." },
    { name: "Volleyball", image: "sportb.jpg", description: "A team sport played with a ball over a net." },
    { name: "Golf", image: "sportg.jpg", description: "A precision club-and-ball sport played on a course." },
    { name: "Rugby", image: "sportat.jpg", description: "A contact team sport played with an oval ball." },
    { name: "Cycling", image: "sportcy.jpg", description: "A sport involving bicycles, often raced on roads or tracks." }
];

const container = document.getElementById("sports-container");

let template = "";

sports.forEach((sport, index) => {
    const isEven = index % 2 === 0;
    template += `
        <div class="sport-card ${isEven ? 'left-image' : 'right-image'}">
            <div class="image-container">
                <img src="${sport.image}" alt="${sport.name}">
            </div>
            <div class="details-container">
                <h3>${sport.name}</h3>
                <p>${sport.description}</p>
                <button>Learn More</button>
            </div>
        </div>
    `;
});

container.innerHTML = template;