// DNF
const countObj = (arr, val)  => arr.reduce((a, v) => (v == val ? a + 1 : a), 0);
function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        let a = el[1].split(' ').map(item => parseInt(item));
        let result = 0;
        while (countObj(a, a[0]) != a.length) {
            if (a.length > 2) {
                a[1] = a[0] + a[1];
                a.splice(0, 1);
                result += 1;
            }
            if (a.length > 2) {
                a[a.length - 1] = a[a.length - 2] + a[a.length - 1];
                a.splice(a.length - 1, 1);
                result += 1;
            }
        }
        console.log(result)
    });
    
}

/* =========== DEFAULT FORMAT ============== */
const readline = require('readline').createInterface({ input: process.stdin });
let inputs = []; let sub_input = []; let t = 0; let n_line_subinput = 2;
function fillInput(line) {
    // dynamic n_line
    if (n_line_subinput == 0) n_line_subinput = parseInt(line)
    else if (sub_input.length < n_line_subinput) {
        sub_input.push(line)
        if (sub_input.length == n_line_subinput) {
            inputs.push(sub_input); sub_input = []; 
            // n_line_subinput = 0;
        }
    }
}

readline.on('line', line => {
    if (t == 0) t = parseInt(line)
    else if (inputs.length < t) {
        fillInput(line)
        if (inputs.length == t) { solve(inputs);readline.close() }
    }
});
/* =========== DEFAULT FORMAT END ============== */
