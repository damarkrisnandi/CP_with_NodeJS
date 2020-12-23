
function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        let s = el[1];
        let len_s = s.length;
        let last_br = 0;
        while (len_s > 0) {
            if (s.substr(len_s - 1, 1) === ')' ) {
                last_br++;
                len_s--;
            } else {
                break;
            }
        }
        console.log(last_br >= s.length - last_br ? "Yes" : "No")
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
