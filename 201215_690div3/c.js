
function solve(input) {
    let x = parseInt(input);
    let result = '';
    if (x < 10) {
        result = x.toString();
    } else {
        if (x < 18) {
            result = (x - 9).toString() + '9'
        } else if (x < 25) {
            result = (x - (8 + 9)).toString() + '89'
        } else if (x < 31) {
            result = (x - (7 + 8 + 9)).toString() + '789'
        } else if (x < 36) {
            result = (x - (6 + 7 + 8 + 9)).toString() + '6789'
        } else if (x < 40) {
            result = (x - (5 + 6 + 7 + 8 + 9)).toString() + '56789'
        } else if (x < 43) {
            result = (x - (4 + 5 + 6 + 7 + 8 + 9)).toString() + '456789'
        } else if (x < 45) {
            result = (x - (3 + 4 + 5 + 6 + 7 + 8 + 9)).toString() + '3456789'
        } else if (x == 45) {
            result = '123456789'
        } else {
            result = '-1'
        }
    }
    console.log(result)
    
}

// =========== DEFAULT FORMAT ==============
const readline = require('readline').createInterface({ input: process.stdin });

let i = 1;
let t = 0;
readline.on('line', line => {
    if (i == 1) {
        // number of test case
        t = parseInt(line) 
        i++;
    } else {
        solve(line)
        if (i <= t) i++
        else readline.close()
    }
});

// =========== DEFAULT FORMAT END ==============
