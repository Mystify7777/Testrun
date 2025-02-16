const programmingLanguages = [
    {
      name: "JavaScript",
      type: "Scripting",
      founder: "Brendan Eich",
      year: 1995,
      description: "A versatile language primarily used for web development. It enables dynamic and interactive user interfaces and is widely used for both frontend and backend development (e.g., Node.js).",
      notableFeatures: ["Event-driven", "Prototype-based inheritance", "Wide ecosystem of libraries and frameworks like React, Angular, and Vue"]
    },
    {
      name: "Python",
      type: "General-purpose",
      founder: "Guido van Rossum",
      year: 1991,
      description: "A high-level, versatile language known for its simplicity and readability. Popular in web development, data analysis, AI, machine learning, and scientific computing.",
      notableFeatures: ["Dynamic typing", "Extensive standard library", "Popular frameworks like Django and Flask"]
    },
    {
      name: "Java",
      type: "General-purpose",
      founder: "James Gosling",
      year: 1995,
      description: "A robust, object-oriented programming language commonly used for building enterprise applications, mobile applications (Android), and large-scale systems.",
      notableFeatures: ["Platform-independent (via JVM)", "Garbage collection", "Rich set of APIs"]
    },
    {
      name: "C++",
      type: "General-purpose",
      founder: "Bjarne Stroustrup",
      year: 1983,
      description: "An extension of C that includes object-oriented features. Widely used in game development, system software, and performance-critical applications.",
      notableFeatures: ["Low-level memory manipulation", "Multi-paradigm", "Standard Template Library (STL)"]
    },
    {
      name: "C",
      type: "General-purpose",
      founder: "Dennis Ritchie",
      year: 1972,
      description: "A low-level programming language used to develop system software, embedded systems, and performance-critical applications. It is the foundation of many modern programming languages.",
      notableFeatures: ["Procedural", "Portable", "Efficient for system-level programming"]
    },
    {
      name: "Ruby",
      type: "General-purpose",
      founder: "Yukihiro Matsumoto",
      year: 1995,
      description: "A dynamic, object-oriented language best known for web development using the Ruby on Rails framework. It emphasizes simplicity and productivity.",
      notableFeatures: ["Dynamic typing", "Convention over configuration", "Readable syntax"]
    },
    {
      name: "PHP",
      type: "Scripting",
      founder: "Rasmus Lerdorf",
      year: 1994,
      description: "A server-side scripting language primarily used for web development. It powers many websites and content management systems like WordPress.",
      notableFeatures: ["Embedded in HTML", "Supports multiple databases", "Cross-platform compatibility"]
    },
    {
      name: "Go",
      type: "General-purpose",
      founder: "Robert Griesemer, Rob Pike, and Ken Thompson",
      year: 2009,
      description: "A statically typed, compiled language developed by Google. Known for its simplicity and efficiency, it's used in cloud computing and system programming.",
      notableFeatures: ["Concurrency support with goroutines", "Garbage collection", "Fast compilation"]
    },
    {
      name: "Swift",
      type: "General-purpose",
      founder: "Apple Inc.",
      year: 2014,
      description: "Apple's programming language for iOS and macOS development. It is user-friendly and optimized for performance in mobile and desktop apps.",
      notableFeatures: ["Type-safe", "Memory-safe", "Interoperable with Objective-C"]
    },
    {
      name: "Kotlin",
      type: "General-purpose",
      founder: "JetBrains",
      year: 2011,
      description: "A modern programming language that is officially supported for Android app development. It offers features like null safety and concise syntax.",
      notableFeatures: ["Interoperable with Java", "Extension functions", "Coroutines for asynchronous programming"]
    },
    {
      name: "R",
      type: "Specialized",
      founder: "Ross Ihaka and Robert Gentleman",
      year: 1993,
      description: "A language and environment for statistical computing and graphics. It is widely used in data analysis and visualization.",
      notableFeatures: ["Data visualization libraries", "Statistical computing", "Wide range of packages"]
    },
    {
      name: "SQL",
      type: "Domain-specific",
      founder: "Donald D. Chamberlin and Raymond F. Boyce",
      year: 1974,
      description: "A language designed for managing and querying relational databases. It is essential for data management and backend development.",
      notableFeatures: ["Declarative syntax", "Data manipulation and retrieval", "Widely supported by database systems like MySQL and PostgreSQL"]
    },
    {
      name: "TypeScript",
      type: "Scripting",
      founder: "Microsoft",
      year: 2012,
      description: "A superset of JavaScript that adds static typing. It helps in building large-scale applications with improved code maintainability.",
      notableFeatures: ["Static typing", "Type inference", "Transpiles to JavaScript"]
    },
    {
      name: "Rust",
      type: "System",
      founder: "Graydon Hoare",
      year: 2010,
      description: "A system programming language focused on performance and safety, particularly safe concurrency. It's used for building reliable software.",
      notableFeatures: ["Memory safety without garbage collection", "Ownership model", "Zero-cost abstractions"]
    }
  ];
  

const container = document.getElementById("cards-container");
container.innerHTML = "";
function renderProgrammingLanguages(languages) {
  languages.forEach(language => {
    const card = document.createElement("div");
    card.className = "card";

    // Card Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.innerHTML = `
      <h2 class="language-name">${language.name}</h2>
      <p class="language-type">Type: ${language.type}</p>
    `;

    // Card Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const detailsList = document.createElement("ul");
    detailsList.className = "details-list";

    detailsList.innerHTML = `
      <li><strong>Founder:</strong> ${language.founder}</li>
      <li><strong>Year:</strong> ${language.year}</li>
      <li><strong>Description:</strong> ${language.description}</li>
      <li><strong>Notable Features:</strong></li>
    `;

    const featuresList = document.createElement("ul");
    featuresList.className = "features-list";
    language.notableFeatures.forEach(feature => {
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

// Render the programming languages
renderProgrammingLanguages(programmingLanguages);