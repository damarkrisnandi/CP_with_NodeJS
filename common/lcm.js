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