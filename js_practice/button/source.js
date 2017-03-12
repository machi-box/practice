var five = require("johnny-five");
var board;
var sensor;
 
board = new five.Board();
 
board.on("ready", function() {
    var piezo = new five.Piezo(12);
    piezo.frequency(262, 3000);
  // Sensor
  sensor = new five.Sensor({
    // アナログ0番ピン
    pin: "A0",
    // 100ms間隔でセンサーにアクセスする 初期設定では25ms
    freq: 100
  });
 
  // センサーを追加(アクセス許可)
  board.repl.inject({
    pot: sensor
  });
 
  // センサーの入力値を0～100にスケーリングして取得
  sensor.scale(0, 100).on("data", function() {
  console.log(this.value);

  });
 
  // センサーの入力値が範囲内(40～100)になった
  sensor.within([15, 100], function() {
    console.log("近！");
    var tone = this.value*10;
    piezo.frequency(tone, 1000);
  });
});
