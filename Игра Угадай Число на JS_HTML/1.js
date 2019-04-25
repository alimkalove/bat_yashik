
var  prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
/* Math.random() генерирует дробное число, при умножении на 10,
число становится целым. И Math.floor округляет число в нижнюю
 сторону и число 1 компенсирует округление в нижнюю сторону */
// tempOut = document.getElementById('temp_out');
// tempOut.innerHTML = prNum;
console.log(prNum);


function f1() {
      var num, out;
      num = document.getElementById('my_num'). value;
      out = document.getElementById("out");

      if(num == prNum) {
        out.innerHTML = 'Вы угадали!';
      }
      else if (num > prNum) {
        out.innerHTML = 'Вы ввели число больше чем нужное!';
      }
      else {
        out.innerHTML = 'Выбери число меньше чем нужно!';
      }

}
