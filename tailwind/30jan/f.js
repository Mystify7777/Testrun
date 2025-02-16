const sports = [
    { name: "Football (Soccer)", players: "11 per team", duration: "90 minutes", variants: "5-a-side, Beach Soccer, Futsal", venue: "Stadium, Outdoor Field", image: "sportf.jpg", description: "The world's most popular sport, played in leagues such as the FIFA World Cup, UEFA Champions League, and domestic competitions." },
    { name: "Basketball", players: "5 per team", duration: "48 minutes", variants: "3v3, Street Basketball", venue: "Indoor/Outdoor Court", image: "sportb.jpg", description: "A fast-paced game known for its high scoring, featuring leagues like the NBA, EuroLeague, and FIBA World Cup." },
    { name: "Cricket", players: "11 per team", duration: "Varies (20, 50 overs, or Test)", variants: "T20, One Day, Test", venue: "Cricket Ground", image: "sports.jpg", description: "A bat-and-ball game widely popular in countries like India, Australia, and England, featuring tournaments like the ICC World Cup." },
    { name: "Tennis", players: "1 or 2 per side", duration: "Variable", variants: "Singles, Doubles", venue: "Grass, Clay, Hard Court", image: "sports.jpg", description: "A racket sport played worldwide, with major tournaments including Wimbledon, the US Open, and the French Open." },
    { name: "Badminton", players: "1 or 2 per side", duration: "Best of 3 sets", variants: "Singles, Doubles, Mixed Doubles", venue: "Indoor Court", image: "sports.jpg", description: "A high-speed sport played with a shuttlecock, with the Olympics and BWF World Championships as major events." },
    { name: "Table Tennis", players: "1 or 2 per side", duration: "Best of 5 or 7 sets", variants: "Singles, Doubles", venue: "Indoor Table", image: "sports.jpg", description: "An ultra-fast racket sport played on a small table, widely popular in China and across the world." },
    { name: "Hockey", players: "11 per team", duration: "60 minutes", variants: "Field Hockey, Ice Hockey", venue: "Hockey Field, Ice Rink", image: "sportg.jpg", description: "A team sport played on field or ice, featuring leagues like the NHL and the Hockey World Cup." },
    { name: "Volleyball", players: "6 per team", duration: "Best of 5 sets", variants: "Beach Volleyball, Indoor", venue: "Court, Beach", image: "sportb.jpg", description: "A thrilling team sport played both indoors and on the beach, featuring the Olympic Games and the FIVB World Cup." },
    { name: "Golf", players: "1 per round", duration: "Varies", variants: "Stroke Play, Match Play", venue: "Golf Course", image: "sportg.jpg", description: "A precision sport played individually, with famous events like The Masters, The Open, and the Ryder Cup." },
    { name: "Rugby", players: "15 per team", duration: "80 minutes", variants: "Rugby Union, Rugby Sevens", venue: "Rugby Field", image: "sports.jpg", description: "A physically intense game popular in countries like New Zealand, England, and South Africa, with events like the Rugby World Cup." }
];

const container = document.getElementById("sports-container");

let template = "";

for (const sport of sports) {
    template += `
        <div class="sports-card">
            <img src="${sport.image}" alt="${sport.name}">
            <div class="sports-details">
                <h3>${sport.name}</h3>
                <p><strong>Players per Team:</strong> ${sport.players}</p>
                <p><strong>Game Duration:</strong> ${sport.duration}</p>
                <p><strong>Variants:</strong> ${sport.variants}</p>
                <p><strong>Venue:</strong> ${sport.venue}</p>
                <p>${sport.description}</p>
                <button>Learn More</button>
            </div>
        </div>
    `;
}

container.innerHTML = template;
