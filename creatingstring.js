const item = document.querySelector('.item');


const src = `layout6.png`;
const desc = `cute pup  `;
const myHTML = `
<div className="wrapper">
<h2> cute ${desc}</h2>
<img  src="${src}" alt="${desc}"/>
</div>
      `;

//turn a string into DOM element 

const myFragment = document.createRange()
.createContextualFragment(myHTML);

console.log(myFragment); 