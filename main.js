'use strict';
// １．1から100までの数字を画面に表示する
// ２．数字が3の倍数のときは数字の代わりに「Fizz」と表示する
// ３．数字が5の倍数のときは数字の代わりに「Buzz」と表示する
// ４．数字が15の倍数のときは数字の代わりに「FizzBuzz」と表示する

window.onload = function () {
  let outstr = '';
  console.log = function (...args) {
    outstr += args.map((arg) => arg.toString()).join(' ') + '<br>';
  };

  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
  document.getElementById('console').innerHTML = outstr;
};
