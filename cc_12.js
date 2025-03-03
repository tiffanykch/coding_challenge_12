// TASK 1: BUESINESS DASHBOARD - DOM ELEMENT SELECTION AND CREATION

// Selecting dashboard container
const dashboardDivId = document.getElementById('dashboard');
const dashboardDivQuery = document.querySelector('#dashboard');

// Create new <div> to represent the metric card
const revenueCard = document.createElement('div');

// Assign class to metric card
revenueCard.setAttribute('class', 'metric-card');

// Assign id to metric card
revenueCard.setAttribute('id', 'revenueCard');

// Populate card with title and placeholder value
let cardTitle = document.createElement('h3')
cardTitle.textContent = 'Revenue'
revenueCard.appendChild(cardTitle)

let cardValue = document.createElement('p')
cardValue.textContent = '$0'
revenueCard.appendChild(cardValue)

// Append metric card to dashboard
dashboardDivId.appendChild(revenueCard);