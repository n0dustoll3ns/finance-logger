console.log(narcissistic(154))

function narcissistic(value: number): boolean {
  let intareqr: number[] = [];
  value.toString().split('').forEach(e => intareqr.push(parseInt(e)));
  let res: number = 0;
  intareqr.forEach((e) => res += e ** (value.toString().length));
  if (res === value) {
    return true
  }
  return false
}
