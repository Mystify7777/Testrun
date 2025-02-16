const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genre: "Fiction",
      description: "A novel set in the American South during the 1930s, focusing on themes of racial injustice, moral growth, and empathy.",
      notableFeatures: [
        "Pulitzer Prize-winning",
        "Narrated by Scout Finch",
        "Themes of justice and compassion"
      ]
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genre: "Dystopian",
      description: "A novel about a totalitarian society controlled by surveillance, propaganda, and fear, led by the Party and Big Brother.",
      notableFeatures: [
        "Visionary depiction of totalitarianism",
        "Concept of 'Big Brother'",
        "Critique of authoritarian regimes"
      ]
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      genre: "Fiction",
      description: "A tragic story of Jay Gatsby and his unrelenting pursuit of love and the American Dream in the Jazz Age.",
      notableFeatures: [
        "Critique of the American Dream",
        "Rich symbolism (e.g., the green light)",
        "Set in the Roaring Twenties"
      ]
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Romance",
      description: "A classic novel about Elizabeth Bennet navigating love, societal expectations, and personal growth in Regency-era England.",
      notableFeatures: [
        "Witty social commentary",
        "Timeless themes of love and class",
        "Beloved characters like Mr. Darcy"
      ]
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      genre: "Fiction",
      description: "The story of Holden Caulfield, a teenager navigating life, alienation, and identity in post-war America.",
      notableFeatures: [
        "Narrative style reflecting teenage angst",
        "Exploration of mental health",
        "Iconic protagonist Holden Caulfield"
      ]
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      genre: "Adventure",
      description: "The epic tale of Captain Ahab's obsessive quest to hunt down the white whale, Moby Dick.",
      notableFeatures: [
        "Detailed depiction of whaling",
        "Themes of obsession and revenge",
        "Symbolism of the white whale"
      ]
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genre: "Fantasy",
      description: "The adventure of Bilbo Baggins as he embarks on a journey with dwarves to reclaim their homeland from a dragon.",
      notableFeatures: [
        "Prequel to The Lord of the Rings",
        "Rich world-building",
        "Themes of courage and friendship"
      ]
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      genre: "Historical Fiction",
      description: "An epic novel set during the Napoleonic wars, focusing on Russian society and the lives of multiple families.",
      notableFeatures: [
        "Extensive character development",
        "Historical and philosophical themes",
        "Complex narrative structure"
      ]
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      genre: "Adventure",
      description: "A philosophical tale about a shepherd named Santiago and his journey to discover his personal legend.",
      notableFeatures: [
        "Themes of destiny and self-discovery",
        "Inspirational and allegorical",
        "Global bestseller"
      ]
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
      genre: "Thriller",
      description: "A fast-paced thriller combining art, history, and religion as Robert Langdon uncovers hidden secrets in famous works.",
      notableFeatures: [
        "Intriguing puzzles and symbols",
        "Themes of religion and art",
        "Global success and film adaptation"
      ]
    }
  ];
  

const container = document.getElementById("cards-container");
container.innerHTML = "";

function renderBooks(books) {
  books.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerHTML = `
      <h2 class="book-title">${book.title}</h2>
      <p class="book-author">Author: ${book.author}</p>
    `;

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const detailsList = document.createElement("ul");
    detailsList.className = "details-list";

    detailsList.innerHTML = `
      <li><strong>Year:</strong> ${book.year}</li>
      <li><strong>Genre:</strong> ${book.genre}</li>
      <li><strong>Synopsis:</strong> ${book.synopsis}</li>
      <li><strong>Notable Features:</strong></li>
    `;

    const featuresList = document.createElement("ul");
    featuresList.className = "features-list";
    book.notableFeatures.forEach(feature => {
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
    const readMoreButton = document.createElement("button");
    readMoreButton.className = "read-more-btn";
    readMoreButton.textContent = "Read More";
    cardFooter.appendChild(readMoreButton);

    // Append sections to card
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    // Append card to container
    container.appendChild(card);
  });
}

// Render the books
renderBooks(books); 
