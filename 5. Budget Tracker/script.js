// to prevent the auto GET Call
let formBtn = document.querySelector('form');
formBtn.addEventListener('submit', (event) => {
    event.preventDefault();
});

let AmountInput    = document.querySelector('#amount');
let submitBtn      = document.querySelector('#addBtn');
let incomeDisplay  = document.querySelector('#income-display');
let expenseDisplay = document.querySelector('#expense-display');

let income = 0, expense = 0;

submitBtn.addEventListener('click', () => {
    let money = parseInt(AmountInput.value);
    
    if (!money) {
        alert('Please enter a non zero amount');
    } else if (money > 0) {
        income += money;
        incomeDisplay.innerText = income;
    } else {
        expense += (money * -1);
        expenseDisplay.innerText = expense;
    }

});