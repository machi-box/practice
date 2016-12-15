var url = "http://api.openweathermap.org/data/2.5/find?q=tokyo-to,jp&units=metric&APPID=b0b2df3843cddddea70869f090036e35" ;
var request = new XMLHttpRequest();

window.onload = function(){
	request.open('GET', url);
request.onreadystatechange = function () {
    if (request.readyState != 4) {
        // リクエスト中
    } else if (request.status != 200) {
        // 失敗
    } else {
        // 取得成功
        // var result = request.responseText;
			var wether = JSON.parse(request.response);
			console.log(wether);
			var list = wether["list"];
			tenki = list[0];
			kekka = tenki["weather"];
			ondo = tenki["main"];
			console.log(ondo.temp);
			moumuri = kekka[0];
			console.log(moumuri.description);
			wetherLoad(moumuri,ondo);
    }
};
request.send(null);
};

function wetherLoad(){
	if ( moumuri.description = "Sky is Clear" ){
		document.write('<style>body{text-align: center;display: block;color: dimgrey;}</style>');
		document.write('晴れだよ<br>')
		document.write('<img src="hare.png" alt=""><br>');
		
	}else{
		document.write("多分それ以外");
	};
	
	document.write("東京は" + ondo.temp +"度");
};