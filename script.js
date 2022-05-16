console.log(narcissistic(154));
function narcissistic(value) {
    var intarr = [];
    value.toString().split('').forEach(function (e) { return intarr.push(parseInt(e)); });
    var res = 0;
    intarr.forEach(function (e) { return res += Math.pow(e, (value.toString().length)); });
    if (res === value) {
        return true;
    }
    return false;
}
