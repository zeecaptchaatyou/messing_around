// Write the calculateUkTax function here...
function calculateUkTax(income) {
    let taxband1, taxband2, tax;

    if (income < 12500) {
        tax = 0;
    }
    tax = 0;
    if ((income > 12500) && (income < 50000)) {
        tax = (income - 12500) * 0.2;
        //taxband1 = (50000 - 12500) * 0.2;
    }
    taxband1 = (50000 - 12500) * 0.2;
    if ((income > 50000) && (income < 150000)) {
        tax = taxband1 + ((income - 50000) * 0.4);
        //taxband2 = taxband1 + ((150000 - 50000) * 0.4);
    }
    taxband2 = taxband1 + ((150000 - 50000) * 0.4);
    if (income > 150000) {
        tax = taxband2 + ((income - 150000) * 0.45);
    }
    return tax;
}

let rahulTaxAmt = calculateUkTax(10000);
console.log(rahulTaxAmt); // Should print 0

let borisTaxAmt = calculateUkTax(12600);
console.log(borisTaxAmt); // Should print 20

let rishiTaxAmt = calculateUkTax(180000);
console.log(rishiTaxAmt); // Should print 61000