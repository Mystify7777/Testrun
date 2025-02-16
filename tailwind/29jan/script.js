const smartphones = [
    {
        model: "iPhone 15 Pro",
        processor: "Apple A17 Pro",
        ram: "8GB",
        storage: "256GB",
        battery: "3274mAh",
        display: "6.1-inch OLED",
        price: "$999"
    },
    {
        model: "Samsung Galaxy S23 Ultra",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "512GB",
        battery: "5000mAh",
        display: "6.8-inch AMOLED",
        price: "$1199"
    },
    {
        model: "Google Pixel 8 Pro",
        processor: "Google Tensor G3",
        ram: "12GB",
        storage: "256GB",
        battery: "5050mAh",
        display: "6.7-inch OLED",
        price: "$999"
    },
    {
        model: "OnePlus 11",
        processor: "Snapdragon 8 Gen 2",
        ram: "16GB",
        storage: "256GB",
        battery: "5000mAh",
        display: "6.7-inch AMOLED",
        price: "$799"
    },
    {
        model: "Xiaomi 13 Pro",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "512GB",
        battery: "4820mAh",
        display: "6.73-inch AMOLED",
        price: "$899"
    },
    {
        model: "Sony Xperia 1 V",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "256GB",
        battery: "5000mAh",
        display: "6.5-inch OLED",
        price: "$1299"
    },
    {
        model: "Realme GT 5",
        processor: "Snapdragon 8 Gen 2",
        ram: "16GB",
        storage: "512GB",
        battery: "5240mAh",
        display: "6.74-inch AMOLED",
        price: "$699"
    },
    {
        model: "Asus ROG Phone 7",
        processor: "Snapdragon 8 Gen 2",
        ram: "16GB",
        storage: "1TB",
        battery: "6000mAh",
        display: "6.78-inch AMOLED",
        price: "$1099"
    },
    {
        model: "Nothing Phone (2)",
        processor: "Snapdragon 8+ Gen 1",
        ram: "12GB",
        storage: "256GB",
        battery: "4700mAh",
        display: "6.7-inch OLED",
        price: "$699"
    },
    {
        model: "Motorola Edge 40 Pro",
        processor: "Snapdragon 8 Gen 2",
        ram: "12GB",
        storage: "512GB",
        battery: "4600mAh",
        display: "6.67-inch OLED",
        price: "$899"
    }
];

// Function to insert data into the table
// function loadSmartphoneData() {
//     const tableBody = document.querySelector("#smartphoneTable tbody");

//     smartphones.forEach(phone => {
//         let row = document.createElement("tr");

//         row.innerHTML = `
//             <td>${phone.model}</td>
//             <td>${phone.processor}</td>
//             <td>${phone.ram}</td>
//             <td>${phone.storage}</td>
//             <td>${phone.battery}</td>
//             <td>${phone.display}</td>
//             <td>${phone.price}</td>
//         `;

//         tableBody.appendChild(row);
//     });
// }

function loadSmartphoneData() {
    const tableBody = document.getElementById("smartphoneTableBody");
    let tableRows = "";

    for (const phone of smartphones) {
        tableRows += `
            <tr>
                <td>${phone.model}</td>
                <td>${phone.processor}</td>
                <td>${phone.ram}</td>
                <td>${phone.storage}</td>
                <td>${phone.battery}</td>
                <td>${phone.display}</td>
                <td>${phone.price}</td>
            </tr>
        `;
    }

    tableBody.innerHTML = tableRows; 
}

loadSmartphoneData();
// window.onload = loadSmartphoneData;
