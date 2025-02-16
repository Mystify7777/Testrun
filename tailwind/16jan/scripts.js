
const books = [
    { 
        title: "1984",
         author: "George Orwell", 
         genre: "Dystopian",
          year: 1949 },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        genre: "Fiction", 

        year: 1960 },
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genre: "Classic", 
        year: 1925 },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        genre: "Romance", 
        year: 1813 },
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        enre: "Coming-of-Age", 
        year: 1951 },
    { 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        genre: "Fantasy", 
        year: 1937 },
    { 
        title: "Moby-Dick", 
        author: "Herman Melville", 
        genre: "Adventure", 
        year: 1851 },
    { 
        title: "War and Peace", 
        author: "Leo Tolstoy", 
        genre: "Historical Fiction", 
        year: 1869 },
];

const cities = [
    { 
        name: "Paris", 
        country: "France", 
        population: "2.16M", 
        famousFor: "Eiffel Tower" },
    { 
        name: "Tokyo", 
        country: "Japan", 
        population: "37.4M", 
        famousFor: "Cherry Blossoms" },
    { 
        name: "New York", 
        country: "USA", 
        population: "8.5M", 
        famousFor: "Times Square" },
    { 
        name: "London", 
        country: "UK", 
        population: "9.0M", 
        famousFor: "Big Ben" },
    { 
        name: "Sydney", 
        country: "Australia", 
        population: "5.3M", 

        famousFor: "Opera House" },
    { 
        name: "Dubai", 
        ountry: "UAE", 
        population: "3.5M", 
        famousFor: "Burj Khalifa" },
    { 
        name: "Rome", 
        country: "Italy", 
        population: "2.8M", 
        famousFor: "Colosseum" },
    { 
        name: "Cape Town", 
        country: "South Africa", 
        population: "4.8M", 
        famousFor: "Table Mountain" },
];

const gadgets = [
    { 
        name: "iPhone 14", 
        brand: "Apple", 
        price: "$999", 
        category: "Smartphone" },
    { 
        name: "Galaxy S23", 
        brand: "Samsung", 
        price: "$799", 
        category: "Smartphone" },
    { 
        name: "MacBook Pro", 
        brand: "Apple", 
        price: "$1999", 
        category: "Laptop" },
    { 
        name: "PlayStation 5", 
        brand: "Sony", 
        price: "$499", 
        category: "Gaming Console" },
    { 
        name: "iPad Pro", 
        brand: "Apple", 
        price: "$1099", 
        category: "Tablet" },
    { 
        name: "Fitbit Charge 5", 
        brand: "Fitbit", 
        price: "$149", 
        category: "Fitness Tracker" },
    { 
        name: "Kindle Paperwhite", 
        brand: "Amazon", 
        price: "$139", 
        category: "E-Reader" },
    { 
        name: "AirPods Pro", 
        brand: "Apple", 
        price: "$249", 
        category: "Wireless Earbuds" },
];


function renderData(sectionId, dataArray, templateFn) {
    const section = document.querySelector(`#${sectionId} .main-container`);
    let template = "";
    dataArray.forEach((item) => {
        template += templateFn(item);
    });
    section.innerHTML = template;
}

const bookTemplate = (book) => `
    <div class="item-container">
        <p><span class="bold">Title:</span> ${book.title}</p>
        <p><span class="bold">Author:</span> ${book.author}</p>
        <p><span class="bold">Genre:</span> ${book.genre}</p>
        <p><span class="bold">Year:</span> ${book.year}</p>
    </div>`;

const cityTemplate = (city) => `
    <div class="item-container">
        <p><span class="bold">Name:</span> ${city.name}</p>
        <p><span class="bold">Country:</span> ${city.country}</p>
        <p><span class="bold">Population:</span> ${city.population}</p>
        <p><span class="bold">Famous For:</span> ${city.famousFor}</p>
    </div>`;

const gadgetTemplate = (gadget) => `
    <div class="item-container">
        <p><span class="bold">Name:</span> ${gadget.name}</p>
        <p><span class="bold">Brand:</span> ${gadget.brand}</p>
        <p><span class="bold">Price:</span> ${gadget.price}</p>
        <p><span class="bold">Category:</span> ${gadget.category}</p>
    </div>`;

renderData("books-section", books, bookTemplate);
renderData("cities-section", cities, cityTemplate);
renderData("gadgets-section", gadgets, gadgetTemplate);
