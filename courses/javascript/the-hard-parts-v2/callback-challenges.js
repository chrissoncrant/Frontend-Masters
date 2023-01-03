//Challenges: http://csbin.io/callbacks
//Solutions: https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/callbacks.js

//Challenge 7: Intersection
const arr1 = [[5, 10, 15, 20, 27], [15, 88, 1, 5, 7, 27], [1, 10, 15, 5, 27, 20], [5, 16, 27, 34, 24, 72, 15]];

// console.log(arr1[0].filter(el => el === 5 || el === 15));

let output = [24, 34];

function longIntersection(arrays) {
    let output = [];
    
    for (let i = 0; i < arrays.length; i++) {        
        for (let j = 0; j < arrays[i].length; j++) {    
            if (output.includes(arrays[i][j])) {
                continue;
            }

            let currentValue = arrays[i][j];

            let count = 0;
    
            for (let k = i + 1; k < arrays.length; k++) {
                if (arrays[k].includes(currentValue)) {
                    count++;
                }

                if (count === arrays.length - 1) {
                    output.push(currentValue);
                    continue;
                }
            }
        }

        console.log(output);

        return output
    }
}

// longIntersection(arr1);

function shortIntersection(arrays) {
    return arrays.reduce((acc, curr) => {
        return acc.filter(item => curr.includes(item))
    })
}

// console.log(shortIntersection(arr1));

const arr2 = [[5, 5, 21, 35], [5, 35, 78, 78, 34], [78, 27, 56, 14]];

function union(arrays) {
    return arrays.reduce((acc, curr) => {        
        let newElements = curr.filter(item => !acc.includes(item));

        return removeRepeats(acc.concat(newElements));
    })
}

// console.log(union(arr2));

function removeRepeats(arr) {
    let returnArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (!returnArr.includes(arr[i])) {
            returnArr.push(arr[i]);
        }
    }

    return returnArr;
}
