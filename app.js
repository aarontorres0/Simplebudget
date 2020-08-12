// Selectors
const incomeInput = document.querySelector('.income-input');
const incomeInputValue = document.querySelector('.income-input-value'); 
const expenseInput = document.querySelector('.expense-input');
const expenseInputValue = document.querySelector('.expense-input-value');
const incomeButton = document.querySelector('.income-button');
const expenseButton = document.querySelector('.expense-button');
const incomeList = document.querySelector('.income-list');
const expenseList = document.querySelector('.expense-list');
var budgetValue = document.querySelector('.budget'); 
var sum = 0;
var incomeValue = 0;
var incomeTotal = document.querySelector('.income-total');
var expenseValue = 0;
var expenseTotal = document.querySelector('.expense-total');

// Event Listeners
incomeButton.addEventListener("click", addIncome);
expenseButton.addEventListener("click", addExpense)
incomeList.addEventListener("click", deleteCheck)
expenseList.addEventListener("click", deleteCheck)

// Functions
function addIncome(event) {
    event.preventDefault(); // prevent form from submitting 
    // income div
    const incomeDiv = document.createElement("div");
    incomeDiv.classList.add("income");
    // create li
    const newIncome = document.createElement('li');
    newIncome.innerText = incomeInput.value + ": $" + incomeInputValue.value;
    newIncome.classList.add("income-item");
    incomeDiv.append(newIncome);
    // create li for value of income
    const newIncomeAmount = document.createElement('li');
    newIncomeAmount.innerText = `$${incomeInputValue.value}`;
    newIncomeAmount.classList.add("income-item");
    incomeDiv.append(newIncomeAmount);
    // append to list
    incomeList.appendChild(incomeDiv);
    // update budget
    sum = sum + parseInt(incomeInputValue.value); 
    incomeValue = incomeValue + parseInt(incomeInputValue.value); 
    budgetValue.innerText = "Total Leftover: $" + sum;
    incomeTotal.innerText = "Total Income: $" + incomeValue; 
    // clear income input value after adding it
    incomeInput.value = "";
    incomeInputValue.value = "";
}

function addExpense(event) {
    event.preventDefault(); // prevent form from submitting
    // expense div
    const expenseDiv = document.createElement("div");
    expenseDiv.classList.add("expense");
    // create li
    const newExpense = document.createElement('li');
    newExpense.innerText = expenseInput.value + ": $" + expenseInputValue.value;
    newExpense.classList.add("expense-item");
    expenseDiv.append(newExpense);
    // create li for value of expense
    const newExpenseAmount = document.createElement('li');
    newExpenseAmount.innerText = `$${expenseInputValue.value}`;
    newExpenseAmount.classList.add("expense-item");
    expenseDiv.append(newExpenseAmount);
    // append to expense list
    expenseList.appendChild(expenseDiv);
    // update budget
    sum = sum - parseInt(expenseInputValue.value); 
    expenseValue = expenseValue + parseInt(expenseInputValue.value); 
    budgetValue.innerText = "Total Leftover: $" + sum; 
    expenseTotal.innerText = "Total Expenses: $" + expenseValue; 
    // clear expense input value
    expenseInput.value = "";
    expenseInputValue.value = "";
}
