function gratuity(amount) {
    return (amount * 0.2).toFixed(2);
}

function totalWithGrat(bill) {
    return bill + gratuity(bill);
}

let billAmount = Math.random() * 100;
console.log("Bill Amount: " + billAmount);
console.log("Gratuity Amount:" + gratuity(billAmount));
console.log("Your total with gratuity is: " + totalWithGrat(billAmount));