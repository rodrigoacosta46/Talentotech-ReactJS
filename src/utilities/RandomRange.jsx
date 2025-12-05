export default function RandomRange(min, max, current = "") {
  let n = current;
  while (n === current) {
    n = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return n;
}
