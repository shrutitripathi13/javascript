const people = [
    { name: 'shruti', cool: true, country: 'germany'},
    { name: 'avishi', cool: true, country: 'canada'},
    { name: 'anna', cool: false, country:'tokyo'},

];
people.forEach((person, index) => {
    console.groupCollapsed(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('DONE!');
    console.groupEnd(`${person.name}`);
});
console.table(people);