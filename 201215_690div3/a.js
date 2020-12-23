
function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        let arr = el[1].split(' ');
        result = '';
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            result += arr[i] + ' ' + arr[arr.length - 1 - i] + ' ' 
        }
        if (arr.length % 2 !== 0) {
            result += arr[Math.floor(arr.length/2)]
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
