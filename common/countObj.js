const countObj = (arr, val)  => arr.reduce((a, v) => (v == val ? a + 1 : a), 0);