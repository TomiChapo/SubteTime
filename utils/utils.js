export function format(time) {
  let seg = time % 60;
  if (seg / 10 < 1) seg = '0' + seg;
  let min = (time / 60) | 0;
  if (min / 10 < 1) min = '0' + min;
  return `${min}:${seg}`;
}
