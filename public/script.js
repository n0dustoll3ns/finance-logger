"use strict";
console.log(narcissistic(154));
function narcissistic(value) {
    let intareqr = [];
    value.toString().split('').forEach(e => intareqr.push(parseInt(e)));
    let res = 0;
    intareqr.forEach((e) => res += e ** (value.toString().length));
    if (res === value) {
        return true;
    }
    return false;
}
