function solve(input) {
    // TYPE YOUR BUGS HERE...
}

/** =========== DEFAULT FORMAT ============== 
 * 
 * use this format to solve problem that use 1 line input per testcase 
 * 
**/
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

/** 
 * =========== DEFAULT FORMAT END ==============
 * */ 
