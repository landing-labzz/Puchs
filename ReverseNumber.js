var num = 5921;
function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
// console.log(getReversedNum(num));

var number = 76543;
function reverse(number) {
    let res = 0;
    while (number){
        res = res * 10 + number % 10;
        number = Math.floor(number / 10)      
    }
    return res
}
// console.log(reverse(number));
