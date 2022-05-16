console.log(narcissistic(154))

function narcissistic(value: number): boolean {
  let intarr: number[] = [];
  value.toString().split('').forEach(e => intarr.push(parseInt(e)));
  let res: number = 0;
  intarr.forEach((e) => res += e ** (value.toString().length));
  if (res === value) {
    return true
  }
  return false
}
