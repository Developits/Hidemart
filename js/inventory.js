// Mock Data Arrays
let warehouseEntries = [
    { product: "Laptop", quantity: 50, supplier: "TechSupplier Inc.", date: "2024-11-10" },
    { product: "Smartphone", quantity: 30, supplier: "GadgetWorld", date: "2024-11-12" },
    { product: "Tablet", quantity: 20, supplier: "TechSupplier Inc.", date: "2024-11-15" },
];

let deliveryEntries = [
    { product: "Laptop", quantity: 10, destination: "Retail Store A", date: "2024-11-13" },
    { product: "Smartphone", quantity: 5, destination: "Retail Store B", date: "2024-11-14" },
];

let inventory = [
    { product: "Laptop", quantity: 40 },
    { product: "Smartphone", quantity: 25 },
    { product: "Tablet", quantity: 20 },
];

// Show Specific Section
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

// Populate Tables with Mock Data on Load
function populateTables() {
    updateWarehouseTable();
    updateDeliveryTable();
    updateInventoryTable();
    updateDashboard();
}

// Update Warehousing Table
function updateWarehouseTable() {
    const tbody = document.querySelector("#warehouse-table tbody");
    tbody.innerHTML = ""; // Clear existing rows
    warehouseEntries.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.product}</td>
            <td>${entry.quantity}</td>
            <td>${entry.supplier}</td>
            <td>${entry.date}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update Delivery Table
function updateDeliveryTable() {
    const tbody = document.querySelector("#delivery-table tbody");
    tbody.innerHTML = ""; // Clear existing rows
    deliveryEntries.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.product}</td>
            <td>${entry.quantity}</td>
            <td>${entry.destination}</td>
            <td>${entry.date}</td>
        `;
        tbody.appendChild(row);
    });
}

// Update Inventory Table
function updateInventoryTable() {
    const tbody = document.querySelector("#inventory-table tbody");
    tbody.innerHTML = ""; // Clear existing rows
    inventory.forEach(item => {
        const status = item.quantity > 0 ? "In Stock" : "Out of Stock";
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${status}</td>
        `;
        tbody.appendChild(row);
    });
}

// Add a Warehousing Entry
function addWarehouseEntry() {
    const product = document.getElementById("product-name").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    const supplier = document.getElementById("supplier").value;
    const date = document.getElementById("date").value;

    if (product && quantity && supplier && date) {
        warehouseEntries.push({ product, quantity, supplier, date });
        updateWarehouseTable();
        updateInventory(product, quantity);
    } else {
        alert("Please fill out all fields!");
    }
}

// Add a Delivery Entry
function addDeliveryEntry() {
    const product = document.getElementById("delivery-product").value;
    const quantity = parseInt(document.getElementById("delivery-quantity").value, 10);
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("delivery-date").value;

    if (product && quantity && destination && date) {
        deliveryEntries.push({ product, quantity, destination, date });
        updateDeliveryTable();
        updateInventory(product, -quantity);
    } else {
        alert("Please fill out all fields!");
    }
}

// Update Inventory
function updateInventory(product, quantityChange) {
    let item = inventory.find(i => i.product === product);
    if (!item) {
        item = { product, quantity: 0 };
        inventory.push(item);
    }
    item.quantity += quantityChange;
    updateInventoryTable();
    updateDashboard();
}

// Update Dashboard
function updateDashboard() {
    const totalProducts = inventory.length;
    const lowStock = inventory.filter(item => item.quantity < 10 && item.quantity > 0).length;
    const expiringItems = warehouseEntries.filter(entry => {
        const today = new Date();
        const entryDate = new Date(entry.date);
        return (entryDate - today) / (1000 * 60 * 60 * 24) <= 7; // Within 7 days
    }).length;

    document.getElementById("total-products").innerText = totalProducts;
    document.getElementById("low-stock").innerText = lowStock;
    document.getElementById("expiring-items").innerText = expiringItems;
}

// Generate Reports
function generateReport() {
    const container = document.getElementById("report-container");
    const reportData = {
        warehouseEntries,
        deliveryEntries,
        inventory,
    };
    container.innerHTML = `<pre>${JSON.stringify(reportData, null, 2)}</pre>`;
}

// Initialize Tables and Dashboard on Page Load
document.addEventListener("DOMContentLoaded", populateTables);
