
function solve(input) {
    // YOUR BUGS HERE...

}

/** =========== DEFAULT FORMAT ==============
 * 
 * use this format to solve problem that use more than 1 inputs per testcase
 * 
 *  */ 
function set_n_line() {
    // set return 0 if the problem needs dynamic n line inputs
    // set return n > 0 if the problem needs fixed n  line inputs
    return 2
}
const readline = require('readline').createInterface({ input: process.stdin });
let inputs = []; let sub_input = []; let t = 0; let n_line_subinput = set_n_line();
function fillInput(line) {
    // dynamic n_line
    if (n_line_subinput == 0) n_line_subinput = parseInt(line)
    else if (sub_input.length < n_line_subinput) {
        sub_input.push(line)
        if (sub_input.length == n_line_subinput) {
            inputs.push(sub_input); sub_input = []; 
            n_line_subinput = set_n_line();
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
