function f1() {
  var p,p1;
  p = document.getElementById("output");
  // заданное количество повторений

  for (var i = 0; i <= 100; i++) {  //i++  i=i+1
    p.innerHTML += i +"  ";
  }
}


function f2(){
  p = p = document.getElementById("output_2");
  var i = 0;
  while (i <= 100) {
      p.innerHTML += i+ " ";
      i++;
  }
}
