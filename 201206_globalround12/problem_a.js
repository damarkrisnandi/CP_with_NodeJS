function solve(input) {
    // YOUR CODE HERE
    input.forEach(el => {
        n = parseInt(el[0]);
        a = el[1].split('');
        const trygub = ('trygub').split('')
        min_index = 0;
        last_letter = ''
        let permute = false;
        let result = a.join('');
        result = '';
        for (let index = 0; index < a.join('').split('y').length - 1; index++) {
            result += 'y';
            
        }
        result += (a.join('').split('y')).join('')
        // for (let i = 0; i < trygub.length; i++) {
        //     if (a.includes(trygub[i]) && a.findIndex(item => {return item == trygub[i]}) >= min_index) {
        //         min_index = a.findIndex(item => {return item == trygub[i]});
        //         last_letter = trygub[i]
        //     } 
        //     if (last_letter == 'b') {
                
                
        //         break;
        //     }
        // }
        console.log(result);
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
