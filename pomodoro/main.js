TIME = 10;
ONE_MSEC = 1000;
TIMER = setInterval(function () { Count_Down() }, ONE_MSEC);

function Count_Down() {
    timer_text.innerHTML = TIME;
    TIME--;
    if ( TIME < 0 ) {
        clearInterval ( TIMER );
    }
}

target_text = document.getElementById("target");
target_text.style.Color = "red";
target_text.style.fontSize = "5em";

var is_odd_click = false; // クリック数が奇数かどうか　初期値は0回でfalseとする

function Click_Button() {
  is_odd_click = !is_odd_click; // ボタンが押される度にtrue,falseを反転する
  
  // 三項演算子 変数 = bool ? boolがtrueの時セットされる値 : falseの時セットされる値
  const back_ground_color = is_odd_click ? "red"     : "green";
  const border_color      = is_odd_click ? "#ff7070" : "#308030";
  
  const button = document.getElementById("button_circle");
  
  button.style.backgroundColor = back_ground_color;
  button.style.borderBottomColor = border_color;
}


extraordinary_text.innerHTML = "すごいテキスト"