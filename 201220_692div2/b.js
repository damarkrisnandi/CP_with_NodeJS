function lcm(input_array) {
    let r1 = 0, r2 = 0;
       let l = input_array.length;
       for(i=0;i<l;i++) {
           r1 = input_array[i] % input_array[i + 1];
           if(r1 === 0) {
               input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
           }
           else {
               r2 = input_array[i + 1] % r1;
               if(r2 === 0) {
                   input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
               }
               else {
                   input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
               }
           }
       }
       return input_array[l - 1];
   }
   
   function solve(input) {
       // let divs = input.split('').filter(item => item != '0');
       let n = parseInt(input);
       let result = n;
       let divs = result.toString().split('').filter(item => item != '0');
       divs = divs.length >= 4 ? divs.slice(divs.length - 4, divs.length - 1) : divs; 
       while ( result % lcm(divs.map(o => parseInt(o))) !== 0) {
           const cek = lcm(divs.map(o => parseInt(o)));
           result = Math.ceil(result / cek) * cek;
           divs = result.toString().split('').filter(item => item != '0');
           divs = divs.length >= 4 ? divs.slice(divs.length - 4, divs.length - 1) : divs;
       }
       
           
   
       console.log(result)
       // if (divs.length == 1 && divs[0] == '1') {
       //     console.log(input)
       // } else {
           
       // }
       
       
   }
   
   // =========== DEFAULT FORMAT ==============
   const readline = require('readline').createInterface({ input: process.stdin });
   
   let i = 1;
   let t = 0;
   readline.on('line', line => {
       if (i == 1) {
           // number of test case
           t = parseInt(line) 
           i++;
       } else {
           solve(line)
           if (i <= t) i++
           // else readline.close()
       }
   });
   
   // =========== DEFAULT FORMAT END ==============
   