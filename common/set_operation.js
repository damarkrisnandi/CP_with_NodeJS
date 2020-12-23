function union(arr1, arr2) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    let u = new Set([...a, ...b]);
    return [...u]
}

function intersection(arr1, arr2) {
    let intersect = new Set(
        arr1.filter(x => new Set(arr2).has(x)));
    return [...intersect]
}

function difference(arr1, arr2) {
    let a = new Set(arr1);
    let b = new Set(arr2);
    let diff = new Set(
     [...a].filter(x => !b.has(x)));
     return [...diff]
}