//const butts = document.querySelector('.butts');
//butts.addEventListener('click', function(){
   // console.log('IT GOT CLICKED!!');
//});

//alternative
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick(){
    console.log('IT GOT CLICKED!!');
}
butts.addEventListener('click', handleClick);
//coolButton.addEventListener('click', handleClick);
butts.removeEventListener('click',handleClick);

//arrow function
const hooray = () => console.log('HOORAY!!');
coolButton.addEventListener('click',hooray);

//listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');
function handleBuyButtonClick(event) {
    console.log('you are buying it!');
    console.log(event.target);
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
});