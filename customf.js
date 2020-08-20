//function definition
function calculateBill() {
    //this is functon body
    console.log('Running Calculate Bill!!');
    const total = Math.floor(100 * 1.13);
    
    return(total);
}
//function call or 'run'
 const myTotal = calculateBill();
 console.log(`your total is $${myTotal}`)