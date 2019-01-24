// @flow

/*
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
*/

const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]

let animal_names = [];

for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
}

let small_animals = [];

for (let i = 0; i < animals.length; i ++) {
    if (animals[i].size === "small") {
        small_animals.push(animals[i])
    }
}

let total_weight = 0;

for (let i = 0; i < animals.length; i++) {
    total_weight += animals[i].weight
}

/*
The current item of the array
The current index of the current item
The entire array
*/
let animalNames = animals.map((animal, index, animals) => {
    return animal.name
});

let animalSize = animals.map((animal, index, animals) => {
    return animal.size
});

let smallAnimals = animals.filter((animal) => {
    return animal.size == "small"
});

/*
The first parameter is the current value of the end value. 
We have to set the initial value at the end of the function. 
In this case we set it to 0. This could be any value though.

The second parameter is the current item in the array.
The third is the index again.
The last is the full array.
*/
let totalWeight = animals.reduce((weight, animal, index, animals) => {
    return weight += animals[index].weight
}, 0);

console.log(animalSize, smallAnimals);
console.log(animal_names, animalNames);
console.log(totalWeight);

const companies = ["Google", "Apple", "Amazon", "Microsoft"];
const year = [1000, 10301, 1000, 2001, 5993, 1034, 10239];
const marketCap = [450, 1000, 1000, 360];

let comp = companies.map((company, index, companies) => {
    return company
});

let yr = year.filter((year) => {
    return year == "1000"
});

let mCapTotal = marketCap.reduce((cap, company, index, marketCap) => {
    return cap += marketCap[index]
});

console.log(comp);
console.log(yr);
console.log(mCapTotal);
console.log(3/2);

function mSort(arry) {
    var len = arry.length;
    if (len < 2)
        return arry;
    var mid = Math.floor(len/2),
    left = arry.slice(0, mid),
    right = arry.slice(mid);

    return merge(mSort(left), mSort(right));
}

function merge(left, right) {
    sortedArry = [];
    var leftLen = left.length,
    rightLen = right.length
    i = 0,
    j = 0;
    while (i < leftLen && j < rightLen) {
        if (left[i] < right[j]) {
            sortedArry.push(left[i]);
            i++;
        }
        else {
            sortedArry.push(right[j])
            j++;
        }
    }
    return sortedArry.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mSort(year));

function qSort(arry, left, right) {
    var i = 0;
    var pivot = right;
    if (left === NaN) {
        return NaN;
    }
    if (left === right) 
        return arry;
    if (left < right) {
        i = partition(arry, pivot, left, right);
        qSort(arry, left, i - 1);
        qSort(arry, i + 1, right);
    }
    return arry;
}

function partition(arry, pivot, left, right) {
    var piv = arry[pivot],
    i = left;
    
    for (var j = left; j < right; j++) {
        if (arry[j] < piv) {
            swap(arry, j, i);
            i++;
        }
    }
    swap(arry, right, i);
    return i;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(qSort(year, 0, year.length - 1));

let sack = [
    {
        "weight": 30,
        "value": 100
    },
    {
        "weight": 20,
        "value": 70
    },
    {
        "weight":15,
        "value": 65
    },
    {
        "weight": 25,
        "value": 90
    }
];

function knapSack(W, sack, sackLen) {
    var len = sackLen,
    max = 0;
    if (len === 0 || W === 0)
        return 0;
    let weight = sack.map((s, i, sack) => {
        return s.weight
    });
    let value = sack.map((s, i, sack) => {
        return s.value
    });

    if (weight[sackLen-1] > W)
        return knapSack(W, sack, sackLen - 1);
    
    else
        return Math.max(value[sackLen - 1] + knapSack(W - weight[sackLen - 1], sack, sackLen - 1),
        knapSack(W, sack, sackLen - 1));
}

console.log(knapSack(65, sack, sack.length));