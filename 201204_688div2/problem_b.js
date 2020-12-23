// DNF
function sum(arr) {
    let result = 0;
    for (let a of arr) {
        result += a;   
    }
    return result
}

function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        n = parseInt(el[0]);
        A = el[1].split(' ');

        let selisih = []
        for (let i = 0; i < A.length - 1; i++) {
            selisih.push(parseInt(A[i]) - parseInt(A[i + 1]))
        }
        let res = sum(selisih.map(item => Math.abs(item)));
        let res1 = res - parseInt(A[0]);
        let res2 = res - parseInt(A[A.length - 1]);

        select = [res, res1, res2]
        console.log(select)
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
