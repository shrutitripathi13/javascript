//select the elements on the page -canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');

//setup our canvas for drawing
//make a variable called height and width from the same properties on our canvas
const  { width, height } = canvas;
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);
//create random starting points on the canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath(); //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
//write a draw function
function draw({ key }) {
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    //move our x and y values depending on what the user did
    x = x-10;
    y = y-10;
    ctx.lineTo(x,y);
    ctx.stroke();
}
//write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrows')){
        e.preventDefault();
        draw({ key: e.key });
    }
}
//clear or shake function
//listen for arrow keys
window.addEventListener('keydown', handleKey);