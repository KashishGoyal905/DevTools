const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p =document.querySelector('p');
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("-->Regular print👇");
console.log("Hello world!");
console.log("");

// Interpolated
console.log("-->Interpolated print👇");
console.log("this is a %s string" ,"tomato");
console.log("");

// Styled
console.log("-->Styled print👇");
console.log("%c this is styled string", 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');
console.log("");

// warning!
console.log("-->warning👇");
console.warn('this is a warning')
console.log("");

// Error :|
console.log("-->error👇");
console.error('this is a error')
console.log("");

// Info
console.log("-->info👇");
console.info('Crocodiles eat 3-4 people per year');
console.log("");

// Testing
console.log("-->testing👇");
console.assert(1===2,'this is wrong');
console.log("");

// clearing
console.log("-->clearing👇");
console.log('console.clear()-->ths is commented for now');
console.log("");

// Viewing DOM Elements
console.log("-->Viewing DOM Elements👇");
console.log(p);
console.dir(p);
console.log("");

// Grouping together
console.log("-->Grouping together👇");
dogs.forEach(dogs =>{
    console.group(`${dogs.name}`);
    console.log(`${dogs.name} is eating`);
    console.log(`${dogs.name} is ${dogs.age} years old`);
    console.groupEnd(`${dogs.name}`);
});
console.log("");

// counting
console.log("-->Counting👇");
console.count('Kashish');
console.count('Goyal');
console.count('Kashish');
console.count('Kashish');
console.count('Goyal');
console.count('Kashish');
console.count('Kashish');
console.count('Goyal');
console.count('Kashish');
console.count('Kashish');
console.count('Goyal');
console.count('Kashish');
console.log("");

//table
console.log("-->table👇");
console.table(dogs);
console.log("");

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

