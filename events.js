const butts = document.querySelector('.butts');
butts.addEventListener('click', function(){
    console.log('IT GOT CLICKED!!');
});

//alternative
const butts = document.querySelector('.butts');
const coolButton = document.querySelector(.'cool');
function handleClick(){
    console.log('IT GOT CLICKED!!');
}
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);
butts.removeEventListener('click',handleClick);