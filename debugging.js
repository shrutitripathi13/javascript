const people = [
    { name: 'shruti', cool: true, country: 'germany'},
    { name: 'avishi', cool: true, country: 'canada'},
    { name: 'anna', cool: false, country:'tokyo'},

];
people.forEach((person, index) => {
    debugger;
   console.log(person.name);
});
console.table(people);