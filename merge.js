var array1 = [10, 20, 30]; 

var array2 = [20, 30, 10]; 

array1.forEach((element) => console.log(element)) 

function merge_array(a, b) { 

    var c = b.concat(a); 

    return c.filter((element, index) => { 

        return c.indexOf(element) === index; 

    }) 

} 

console.log(merge_array(array1, array2)); 