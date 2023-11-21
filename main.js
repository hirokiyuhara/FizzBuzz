'use strict';
// １．1から100までの数字を画面に表示する
// ２．数字が3の倍数のときは数字の代わりに「Fizz」と表示する
// ３．数字が5の倍数のときは数字の代わりに「Buzz」と表示する
// ４．数字が15の倍数のときは数字の代わりに「FizzBuzz」と表示する

// Pattern 1
window.onload = function () {
  let outputHtml = '';

  for (let i = 1; i < 101; i++) {
    let output = '';
    if (i % 15 === 0) {
      output += 'FizzBuzz';
    } else if (i % 5 === 0) {
      output += 'Buzz';
    } else if (i % 3 === 0) {
      output += 'Fizz';
    } else {
      output += i.toString();
    }
    console.log(output);
    outputHtml += output + '<br>';
  }
  document.getElementById('console').innerHTML = outputHtml;
};

// Pattern 2 １５の倍数についての記述なし

// window.onload = function () {
//   let outputHtml = '';

//   for (let i = 1; i < 101; i++) {
//     let output = '';
//     if (i % 5 === 0) {
//       output += 'Buzz';
//     }
//     if (i % 3 === 0) {
//       output += 'Fizz';
//     }
//     if (output === '') {
//       output += i.toString();
//     }
//     console.log(output);
//     outputHtml += output + '<br>';
//   }
//   document.getElementById('console').innerHTML = outputHtml;
// };

// Pattern 3

// window.onload = function () {
//   let outputHtml = '';
//   for (let i = 1; i < 101; i++) {
//     let output =
//       i % 15 === 0
//         ? 'FizzBuzz'
//         : i % 3 === 0
//         ? 'Fizz'
//         : i % 5 === 0
//         ? 'Buzz'
//         : i.toString();
//     console.log(output);
//     outputHtml += output + '<br>';
//   }
//   document.getElementById('console').innerHTML = outputHtml;
// };

// while文でのFizzBuzz
// let num = 1;
// while (num < 100) {
//   console.log(num);
//   num++;
// }
