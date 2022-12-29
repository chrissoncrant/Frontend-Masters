//Challenges: http://csbin.io/callbacks
//Solutions: https://github.com/CodesmithLLC/cs-bin-solutions/blob/master/callbacks.js

//Challenge 7: Intersection
const arr1 = [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20], [5, 16, 34, 24, 72, 15]];

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
