//-------------------object1-------------------
const person = {
    name: "Aryan Kumar",
    age: 20,
    isEmployed: false
};
console.log(person);

//-------------------object2-------------------
const employee = {
    name: "Gaurav Mahto",
    age: 28,
    position: "Software Engineer",
    address: {
        street: "ABC Next St",
        city: "Durgapur",
        pincode: 713212
    }
};
console.log(employee.address.city); // Durgapur
console.log(employee["address"]["pincode"]); // 713212
console.log(employee.address["street"]); // ABC Next St

//-------------------object3-------------------
const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Smartphone", price: 16500 },
    { id: 3, name: "Tablet", price: 12300 }
];
console.log(products[1]); // { id: 2, name: 'Smartphone', price: 16500 }
console.log(products[2].name); // Tablet

//-------------------object4-------------------
const car = {
    brand: "Tesla",
    model: "Model 3",
    start: function() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
};
car.start(); // Tesla Model 3 is starting...


//-------------------object5------------------- ???
const key = "favoriteColor";
const user = {
    name: "Alice",
    [key]: "blue"
};
console.log(user.favoriteColor); // blue

//-------------------object6-------------------
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}
const person1 = createPerson("Tom", 25);
person1.greet(); // Hello, my name is Tom
const person2 = createPerson("Jerry", 22);
person2.greet(); // Hello, my name is Jerry