const me = document.querySelector('.wes');

me.addEventListener('click', function(event){
    console.log('YOU CLICKED IT');
    const shouldChangePage = confirm(
      'This website might malicious! Do you wish to proceed?'  
    );
    console.log(shouldChangePage);
    event.preventDefault();
});