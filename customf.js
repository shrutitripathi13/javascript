//function definition
function  calculateBill(billAmount, taxRate){
    console.log(billAmount, taxRate);
    //this is the function body
    console.log('running calculate bill!!');
    const total = billAmount*(1+taxRate);
    return total;

}
//function call or 'run
const myTotal = calculateBill(100, 0.13);
//console.log(myTotal);

function doctorize(name) {
    return `Dr. ${name}`;
}
function yell(name) {
    return `HEY ${name.toUpperCase()}`;
}
const call = yell(doctorize('anna'));
console.log(call);
