
let numbers1 = [1, 2, 4, 7, 3];
let numbers2 = [4, 5, 8, 1];



function multi(arry1) {
    console.log("hello");
    var result = [],
        i = 0,
        j = 0;
    return (arry2) => {
        while (i < arry1.length && j < arry2.length) {
            result.push(arry1[i] * arry2[j]);
            i++;
            j++;
        }
        return result.concat(arry1.slice(i).concat(arry2.slice(j)));
    };
}

const m = multi(numbers1)(numbers2);
console.log(m);

let laptop = {Name:"Macbook", Style:"Pro"}

function decorator(laptop, color) {
    laptop.color = color;
}

decorator(laptop, "grey")
console.log(laptop.color);