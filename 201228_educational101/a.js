function solve(input) {
    // TYPE YOUR BUGS HERE...
    const brackets = input.split('');
    let complete = true;
    if (brackets[0] == ')' || brackets[brackets.length - 1] == '(') {
        complete = false;
    } else {
        let left = 0;
        let sigh = 0
        for (let b of brackets) {
            if (b == '(') {
                left++
            } else if (b == ')') {
                left--
            } else if (b == '?') {
                sigh++
            }
        }

        if ((left + sigh) % 2 == 0) {
            complete = true;
        } else {
            complete = false;
        }

    }
    

    console.log(complete ? 'YES' : 'NO');

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
