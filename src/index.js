module.exports = function check(str, bracketsConfig) {
  let chars = 0;
  bracketsConfig.forEach((item, numb) => bracketsConfig[numb] = String(item[0] + item[1]));
  while (true) {
    bracketsConfig.forEach((item) => str = str.replace(item, ''));
    if (str === '') return true;
    if (chars === str.length) return false;
    chars = str.length;
  }
}