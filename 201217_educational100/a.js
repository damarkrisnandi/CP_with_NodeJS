function solve(input) {
    let [a, b, c] = input.split(' ').map(item => parseInt(item));
    if ([a, b, c].includes(0)) {
        console.log('NO');
        return;
    }
    shots = a + b + c - (2 * Math.floor((a + b + c)/7));
    console.log(shots % 7 === 0 ? 'YES' : 'NO')
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
