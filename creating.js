console.log('it works!');
const myParagraph = document.createElement('p');
myParagraph.textContent = 'i am a S';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'layout6.png';
myImage.alt = 'nice photu';
console.log(myImage);

const myDiv =  document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

const heading = document.createElement('h2');
heading.textContent = 'cool things';
myDiv.insertAdjacentElement('afterbegin', heading)