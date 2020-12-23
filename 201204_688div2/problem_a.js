function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        const [n, m] = el[0].split(' ');
        const trains_n = el[1].split(' ');
        const trains_m = el[2].split(' ');
        let intersection = new Set(
            trains_n.filter(x => new Set(trains_m).has(x)));
        console.log([...intersection].length);
    });
}

/* =========== DEFAULT FORMAT ============== */
const readline = require('readline').createInterface({ input: process.stdin });
let inputs = []; let sub_input = []; let t = 0; let n_line_subinput = 3;
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
