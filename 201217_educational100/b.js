// DNF
function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        let arr = el[1].split(' ').map(item => parseInt(item));
        let curr = arr[0];
        let brr = el[1].split(' ').map(item => parseInt(item));
        if (brr.length > 2) {
            for (let i = 0; i < arr.length - 2; i++) {
                if (brr[i + 1] % brr[i] !== 0 && brr[i] % brr[i + 1] !== 0) {
                    brr[i] = brr[i + 1];
                } 
                if (brr[i + 2] % brr[i + 1] !== 0 && brr[i + 1] % brr[i + 2] !== 0) {
                    brr[i + 2] = brr[i + 1];
                } 
            }
        } else if (brr.length == 2) {
            if (brr[0] % brr[1] !== 0 && brr[1] % brr[0] !== 0) {
                brr[0] = brr[0] > brr[1] ? Math.ceil(brr[1] / (Math.ceil(brr[0] / brr[1]))) : Math.ceil(brr[0] / (Math.ceil(brr[1] / brr[0]))) 
            } 
        }
        console.log(brr.map(it => it.toString()).join(' '))

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
