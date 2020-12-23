function solve(input) {
    let [n, k] = input.split(' ').map(obj => parseInt(obj));
    let result = '';
    let current = ''
    for (let i = 0; i < n; i++) {
        if (i<k) {
            result += 'a';
            current = 'a';
        } else {
            if (current == 'a') {
                result += 'b';
                current = 'b';
            } else if (current == 'b') {
                result += 'c';
                current = 'c';
            } if (current == 'c') {
                result += 'a';
                current = 'a';
            }
        }
        
    }
    console.log(result.substr(0, n))
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
