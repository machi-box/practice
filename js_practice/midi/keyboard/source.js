var midi;
 
//通信成功時
function success(midiAccess){
    midi = midiAccess;
    console.log("MIDI READY");
    setInputs(midiAccess);
}
 
//通信失敗時
function failure(msg){
    console.log("MIDI FAILED - " + msg);
}
 
//MIDIAccessオブジェクトのInputsを取得してイベントに対して関数を渡す
function setInputs(midiAccess){
    var inputs = midiAccess.inputs;
    inputs.forEach(function(key,port){
        console.log("[" + key.state + "] manufacturer:" + key.manufacturer + " / name:" + key.name + " / port:" + port);
        key.onmidimessage = onMidiMessage;
    });
}
 
//MIDIデバイスからメッセージが送られる時に実行
function onMidiMessage(event){
    console.log(event);
    var str = '';
    for (var i = 0; i < event.data.length; i++) {
        str += event.data[i] + ':';
    }
    console.log(str);
    
    //create a synth and connect it to the master output (your speakers)
    var synth = new Tone.Synth().toMaster();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");
    frequency = 10;
    volume = "4";
}
 
//MIDIデバイスへアクセスする
navigator.requestMIDIAccess()
    .then(success, failure);

var wave = {
  Set:{
    frequency:10,//周波数
    volume:50,//ボリューム
    phase:0,//初期位相
    diff:0,//1サンプルで移動する位相量
    type:"sin"//波形タイプ(sin,saw,squ,tri)
  },
  getY:function(){
    var y;
    this.Set.phase += this.Set.diff;
    while (this.Set.phase > TWO_PI) {
      this.Set.phase -= TWO_PI;
    }
    switch (this.Set.type) {
      case "sin"://サイン波
        y = Math.sin(this.Set.phase);
        break;
      case "saw"://ノコギリ波
        y = this.Set.phase / PI - 1;
        break;
      case "squ"://矩形波
        y = this.Set.phase < PI ? -1 : 1;
        break;
      case "tri"://三角波
        y = this.Set.phase < PI ? -2 / PI * this.Set.phase + 1 : 2 / PI * this.Set.phase - 3;
        break;
    }
    //センターラインの位置とボリュームで調整
    y = y * this.Set.volume + height/2;
    return y;
  }
};

function setup() {
  createCanvas(800, 120);
}

function draw() {
  background(250);
  //センターライン
  stroke(220,220,220);
  line(0,height/2,width,height/2);
  //波形の色
  stroke(125,125,125);
  // スタート時点のy座標
  var lastpoints = wave.getY();
  //周波数でサンプリング数で割る
  wave.Set.diff = TWO_PI * wave.Set.frequency / width;
  //サンプル（横幅）分繰り返す
  for (var i = 1; i < width; i++) {
    var y = wave.getY();
    //波形描画
    line(i-1,lastpoints,i,y);
    lastpoints = y;
  }
}


