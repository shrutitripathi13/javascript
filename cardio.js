const div  = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = ` <ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul> `

div.innerHTML = ul;
console.log(div);

const img =  document.createElement('img');
img.src = 'layout6.png';
img.width = 250;
img.height = 250;
img.classList.add('cute');
img.alt = 'cute puppy!';
div.appendChild(img);

const myHTML = `
<div class="myDiv">
  <p>paragraph one</p>
  <p>paragraph two</p>
</div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
ulElement.insertAdjacentHTML('beforebegin',myHTML);

const myDiv = div.querySelector('.myDiv');
console.log(myDiv);
myDiv.firstElementChild.remove();
