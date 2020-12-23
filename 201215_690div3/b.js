
function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        let s = el[1];
        result = 'YES';
        if (
            s.substr(0,4) !== '2020' &&
            s.substr(s.length - 4,4) !== '2020' &&
            !(s.substr(0, 1) == '2' && s.substr(s.length - 3, 3) == '020') &&
            !(s.substr(0, 2) == '20' && s.substr(s.length - 2, 2) == '20') &&
            !(s.substr(0, 3) == '202' && s.substr(s.length - 1, 1) == '0')
        ) {
            result = 'NO'
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
