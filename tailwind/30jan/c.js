const books = [
    { name: "The Alchemist", author: "Paulo Coelho", genre: "Fiction, Adventure", price: "₹399", image: "c.jpg", description: "A mystical story about Santiago, a shepherd boy who embarks on a journey to find a hidden treasure in Egypt. A tale of dreams, omens, and destiny." },
    { name: "Atomic Habits", author: "James Clear", genre: "Self-Help, Psychology", price: "₹499", image: "cc.jpg", description: "A guide to building good habits, breaking bad ones, and making small changes that compound over time for massive personal growth." },
    { name: "Sapiens", author: "Yuval Noah Harari", genre: "History, Anthropology", price: "₹599", image: "ccc.jpg", description: "A groundbreaking account of the history of humankind, exploring how Homo sapiens came to dominate the Earth through cognitive and social evolution." },
    { name: "The Power of Now", author: "Eckhart Tolle", genre: "Spirituality, Mindfulness", price: "₹450", image: "cc.jpg", description: "A life-changing guide to living in the present moment, freeing yourself from anxiety and regret, and achieving deep inner peace." },
    { name: "The Psychology of Money", author: "Morgan Housel", genre: "Finance, Self-Help", price: "₹550", image: "c.jpg", description: "A fascinating look at how people think about money, investing, and wealth-building, emphasizing the role of behavior over logic in financial success." },
    { name: "1984", author: "George Orwell", genre: "Dystopian, Political Fiction", price: "₹350", image: "ccc.jpg", description: "A chilling vision of a totalitarian future where Big Brother watches everything, and truth is twisted by propaganda and surveillance." },
    { name: "Ikigai", author: "Héctor García, Francesc Miralles", genre: "Self-Help, Philosophy", price: "₹499", image: "cc.jpg", description: "A journey into the Japanese concept of 'Ikigai,' or the reason for being, exploring the secrets of longevity and fulfillment." },
    { name: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic, Social Justice", price: "₹299", image: "c.jpg", description: "A deeply moving novel about racial injustice in the American South, told through the eyes of a young girl named Scout." },
    { name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance, Motivation", price: "₹475", image: "ccc.jpg", description: "A personal finance classic that challenges conventional wisdom about money, assets, and financial education." },
    { name: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", genre: "Self-Help, Personal Growth", price: "₹420", image: "cc.jpg", description: "A bold, counterintuitive approach to living a better life by focusing only on what truly matters and letting go of superficial concerns." }
];

const container = document.getElementById("book-container");

let template = "";

for (const book of books) {
    template += `
        <div class="book-card">
            <img src="${book.image}" alt="${book.name}">
            <div class="book-details">
                <h3>${book.name}</h3>
                <p class="author">${book.author}</p>
                <p class="genre">${book.genre}</p>
                <p>${book.description}</p>
                <div class="price">${book.price}</div>
                <button>Add to Cart</button>
            </div>
        </div>
         `;
}

container.innerHTML = template;

