const movies = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Science Fiction, Thriller",
      synopsis: "A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
      notableFeatures: [
        "Complex, layered narrative",
        "Groundbreaking visual effects",
        "Themes of dreams and reality"
      ]
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
      synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      notableFeatures: [
        "Powerful storytelling",
        "Critically acclaimed performances",
        "Themes of hope and friendship"
      ]
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime, Drama",
      synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      notableFeatures: [
        "Iconic dialogues and performances",
        "Epic storytelling",
        "Themes of family and power"
      ]
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action, Crime, Drama",
      synopsis: "When the menace known as the Joker emerges, he wreaks havoc and chaos on Gotham City. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      notableFeatures: [
        "Oscar-winning performance by Heath Ledger",
        "Groundbreaking approach to superhero films",
        "Themes of chaos and morality"
      ]
    },
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      year: 2019,
      genre: "Drama, Thriller",
      synopsis: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
      notableFeatures: [
        "Oscar winner for Best Picture",
        "Sharp social commentary",
        "Unpredictable plot twists"
      ]
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      genre: "Science Fiction, Drama",
      synopsis: "A group of astronauts travel through a wormhole near Saturn in search of a new home for humanity.",
      notableFeatures: [
        "Scientific accuracy and speculative themes",
        "Breathtaking visuals",
        "Emotional storytelling"
      ]
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime, Drama",
      synopsis: "The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.",
      notableFeatures: [
        "Nonlinear narrative structure",
        "Memorable dialogues",
        "Unique style and direction"
      ]
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama, Romance",
      synopsis: "The life journey of a slow-witted but kind-hearted man, who witnesses and unwittingly influences several historical events.",
      notableFeatures: [
        "Heartwarming and inspirational",
        "Oscar-winning performance by Tom Hanks",
        "Themes of perseverance and love"
      ]
    },
    {
      title: "The Matrix",
      director: "The Wachowskis",
      year: 1999,
      genre: "Science Fiction, Action",
      synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      notableFeatures: [
        "Revolutionary visual effects",
        "Cyberpunk themes",
        "Thought-provoking philosophical concepts"
      ]
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      year: 1993,
      genre: "Biography, Drama, History",
      synopsis: "In German-occupied Poland during World War II, Oskar Schindler becomes an unlikely humanitarian by saving over a thousand Jews from the Holocaust.",
      notableFeatures: [
        "Powerful and emotional storytelling",
        "Historical significance",
        "Award-winning direction and performances"
      ]
    }
  ];
  

  const container = document.getElementById("cards-container");
container.innerHTML = "";

function renderMovies(movies) {
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerHTML = `
      <h2 class="movie-title">${movie.title}</h2>
      <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
    `;

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const detailsList = document.createElement("ul");
    detailsList.className = "details-list";

    detailsList.innerHTML = `
      <li><strong>Year:</strong> ${movie.year}</li>
      <li><strong>Genre:</strong> ${movie.genre}</li>
      <li><strong>Synopsis:</strong> ${movie.synopsis}</li>
      <li><strong>Notable Features:</strong></li>
    `;

    const featuresList = document.createElement("ul");
    featuresList.className = "features-list";
    movie.notableFeatures.forEach(feature => {
      const featureItem = document.createElement("li");
      featureItem.textContent = feature;
      featuresList.appendChild(featureItem);
    });

    const notableFeaturesLi = detailsList.querySelector("li:last-child");
    notableFeaturesLi.appendChild(featuresList);
    cardBody.appendChild(detailsList);

    // Card Footer
    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const learnMoreButton = document.createElement("button");
    learnMoreButton.className = "learn-more-btn";
    learnMoreButton.textContent = "Learn More";
    cardFooter.appendChild(learnMoreButton);

    // Append sections to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    // Append card to container
    container.appendChild(card);
  });
}

// Render the movies
renderMovies(movies);
