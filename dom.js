 
    //const p = document.querySelector('p');
    //const imgs = document.querySelectorAll('.item img')
    //const heading = document.querySelector('h2');
   // heading.textContent = 'shruti is great'; 
    // console.dir(heading.textContent);

    //classes!!

    const pic = document.querySelector('.nice');
    pic.classList.add('open');
    pic.classList.remove('open');
    pic.classList.toggle('round');
    console.log(pic.classList);

    function toggleRound() {
        pic.classList.toggle('round');
    }
    pic.addEventListener('click', toggleRound);