const array=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let highest = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] > highest) {
            highest =array[i][j];
        }
    }
}

console.log(highest);
