// DNF
function distance(x,y) {
    return [Math.abs(parseInt(x[0]) - parseInt(y[0])), Math.abs(parseInt(x[1]) - parseInt(y[1]))]
}

function solve(input, k) {
    // YOUR CODE HERE
    
    for (let index = 0; index < input.length; index++) {
        
        move = 0
        for (let i = 0; i < input[index].length; i++) {
            array_d = []
            for (let j = 0; j < input[index].length; j++) {
                array_d.push(distance(input[index][i].split(' '), input[index][j].split(' ')))
            }
            if ((array_d.filter(item => item[0] + item[1] <= k[index])).length  >= input[index].length) {
                move++;
            }
        }
        console.log(move == input[index].length ? 1 : (move != 0 ? move : -1))
        
    }
    input.forEach(el => {
        
    })
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
