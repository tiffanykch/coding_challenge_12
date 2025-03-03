// TASK 1: BUESINESS DASHBOARD - DOM ELEMENT SELECTION AND CREATION

// Selecting dashboard container
const dashboardDivId = document.getElementById('dashboard');
const dashboardDivQuery = document.querySelector('#dashboard');

// Created function to add metric cards (for reusability)
function addMetricCard(id, title, value) {
    
    // Create new <div> to represent the metric card
    let metricCard = document.createElement('div');

    // Assign class to metric card
    metricCard.setAttribute('class', 'metric-card');

    // Assign id to metric card
    metricCard.setAttribute('id', id);

    // Populate card with title and placeholder value
    let cardTitle = document.createElement('h3');
    cardTitle.textContent = title;
    metricCard.appendChild(cardTitle);

    let cardValue = document.createElement('p');
    cardValue.textContent = '$' + value;
    metricCard.appendChild(cardValue);

    // Append metric card to dashboard
    dashboardDivId.appendChild(metricCard);
}

addMetricCard('revenueCard', 'Revenue', 5000);

// Preparation for Task 2
addMetricCard('profitCard', 'Profit', 2000);
addMetricCard('expensesCard', 'Expenses', 3000);

// TASK 2: UPDATING DASHBOARD METRIC - WORKING WITH NODELISTS AND ARRAYS

// Select all elements with the class 'metric-card'
const metricCardList = document.querySelectorAll('.metric-card');

// Select NodeList into an array
const arrayofMetricCard = Array.from(metricCardList);

// Use array method to update each card's inner text
arrayofMetricCard.forEach(card => {
    card.innerText += `\n \n Updated`;
    card.style.backgroundColor = "#b68ed3";
})

// TASK 3: DYNAMIC INVENTORY MANAGEMENT - ADDING AND REMOVING ITEMS

// Select inventory list
const inventoryList = document.getElementById('inventoryList')

// Create function that adds new <li> element 
function addInventoryItem(product) {

    // Create new <li> element
    const newItem = document.createElement('li'); 
    newItem.innerText = product;

    // Add class to <li>
    newItem.setAttribute('class', 'product-item');

    // Append product to list
    inventoryList.appendChild(newItem);

    // Attach event listener to item
    newItem.addEventListener('click', function() {
        removeInventoryItem(newItem);
    });
}

// Create function that removes <li> element when clicked
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}