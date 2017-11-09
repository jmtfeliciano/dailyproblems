function XO(str) {
  let x = str.match(/x/ig);
  let o = str.match(/o/ig);
  return (x && x.length) === (o && o.length);
}