function calculateEMI() {
   
    const amountInput = document.getElementById('amount').value;
    const interestInput = document.getElementById('interest').value;
    const durationInput = document.getElementById('duration').value;

    const amount = parseFloat(amountInput.replace(/[^\d.]/g, ''));
    const interestRate = parseFloat(interestInput.replace(/[^\d.]/g, ''));
    const duration = parseFloat(durationInput.replace(/[^\d.]/g, ''));


    if (isNaN(amount) || isNaN(interestRate) || isNaN(duration)) {
        alert('Please enter valid numeric values.');
        return;
    }


    const monthlyInterestRate = interestRate / 12 / 100;

    const numberOfPayments = duration;

    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - amount;

    document.querySelector('.monthlyPayment').innerHTML = "₹"+monthlyPayment.toFixed(2);
    document.querySelector('.totalPayment').innerHTML = "₹"+totalPayment.toFixed(2);
    document.querySelector('.totalInterest').innerHTML = "₹"+totalInterest.toFixed(2);

}

document.querySelector(".calculate").addEventListener("click", function(event){
    
    event.preventDefault();
    calculateEMI();
})