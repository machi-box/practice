// プラグインの object 要素を取得
var plugin = document.querySelector('object[type="application/x-wacomtabletplugin"]');
var pressure;

// Pen API からペンの筆圧を取得する (pointerType:1 = ペン, 2 = マウス, 3 = 消しゴム)
if (plugin && plugin.penAPI && plugin.penAPI.isWacom && plugin.penAPI.pointerType === 1) {
  pressure =  plugin.penAPI.pressure;
    console.log(pressure);
    document.write(pressure);
}