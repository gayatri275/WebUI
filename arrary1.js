myNumArray = [50, 20, 30, 40, 60, 10]; 

myStringArray = ['red', 'black', 'Pooja', 'orange', 'green', 'blue'] 



const found = myNumArray.find(element => element > 10);  

console.log(found); 



const filtered = myStringArray.filter(element => element.length > 6);  

console.log(filtered); 



const myMap = myNumArray.map(element => element * 2);  

console.log(myMap); 



const reduced = myNumArray.reduce((pre, cur) => pre + cur, 0); 

console.log(reduced); 



console.log(myStringArray.slice(2, -1)); 



let spliced = myStringArray.splice(5, 1, "Insect");  

console.log(myStringArray); 