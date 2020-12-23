// DNF

const countObj = (arr, val)  => arr.reduce((a, v) => (v == val ? a + 1 : a), 0);
function spruceCount(arr) {
    let n = arr.length;
    let result2 = 0;
    let cek = arr[0].substr(1, 1) + arr[1].substr(0, 3);
    if (countObj(cek.split(''), '*') === cek.length) {
        console.log('this is a spruce')
        result2++
    }
}
function solve(input, k) {
    // YOUR CODE HERE
    for (let i = 0; i < input.length; i++) {
        let result = 0;
        for (let s in input[i]) {
            result += (s.split(''), '*')
        }
        spruceCount(input[i]);
        
    }
}

/* =========== DEFAULT FORMAT ============== */
const readline = require('readline').createInterface({ input: process.stdin });
let inputs = []; let sub_input = []; let t = 0; let n_line_subinput = 0; let k = [];
function fillInput(line) {
    // dynamic n_line
    if (n_line_subinput == 0) {
        n_line_subinput = parseInt(line.split(' ')[0])
        k.push(parseInt(line.split(' ')[1]))
    }
    else if (sub_input.length < n_line_subinput) {
        sub_input.push(line)
        if (sub_input.length == n_line_subinput) {
            inputs.push(sub_input); sub_input = []; 
            n_line_subinput = 0;
        }
    }
}

readline.on('line', line => {
    if (t == 0) t = parseInt(line)
    else if (inputs.length < t) {
        fillInput(line)
        if (inputs.length == t) { solve(inputs, k);readline.close() }
    }
});
/* =========== DEFAULT FORMAT END ============== */