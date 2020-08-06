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
    /* not sure I need a checkmark button for income. Add ability to delete income 
    // checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    incomeDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    incomeDiv.appendChild(trashButton); 
    */
    // append to list
    incomeList.appendChild(incomeDiv);
    // update budget
    sum = sum + parseInt(incomeInputValue.value); 
    budgetValue.innerText = "$" + sum; // need this line
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
    /* add ability to mark expenses as completed and ability to delete them
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    expenseDiv.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    expenseDiv.appendChild(trashButton);
    */
    // append to expense list
    expenseList.appendChild(expenseDiv);
    // update budget
    sum = sum - parseInt(expenseInputValue.value); 
    budgetValue.innerText = "$" + sum; // need this line
    // clear expense input value
    expenseInput.value = "";
    expenseInputValue.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo
    if(item.classList[0] === 'trash-btn'){
        const del = item.parentElement;
        // animation
        del.classList.add("fall");
        del.addEventListener('transitionend', function(){
            // at the end of the "fall" transition it will remove it 
            del.remove();
        });
    }

    // check mark 
    if (item.classList[0] === "complete-btn") {
        const compl = item.parentElement;
        compl.classList.toggle("completed");
    }

}