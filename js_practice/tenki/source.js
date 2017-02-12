
var request = new XMLHttpRequest();

var country = ["tokyo-to,jp","NewYork,us"];
var now = 0;

window.onload = function () {
    
    url ="http://api.openweathermap.org/data/2.5/find?q=" + country + "&units=metric&APPID=b0b2df3843cddddea70869f090036e35";
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (request.readyState != 4) {}
        else if (request.status != 200) {
            // 失敗
        }
        else {
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
            wetherLoad(moumuri, ondo);
        };
    };
    request.send(null);
};

function kirikae() {
    url = "http://api.openweathermap.org/data/2.5/find?q=" + country + "&units=metric&APPID=b0b2df3843cddddea70869f090036e35";
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (request.readyState != 4) {}
        else if (request.status != 200) {
            // 失敗
        }
        else {
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
            wetherLoad(moumuri, ondo);
        };
    };
    request.send(null);
};


function wetherLoad() {
    if (moumuri.description == "rain") {
        console.log("雨だよ");
        document.getElementById("temp").innerHTML = ondo.temp;
        document.getElementById("ame").style.display = "block";
        document.getElementById("hare").style.display = "none";
        document.getElementById("kumori").style.display = "none";
    }
    else if (moumuri.description == "Sky is Clear") {
        console.log("晴れだよ");
        document.getElementById("temp").innerHTML = ondo.temp;
        document.getElementById("hare").style.display = "block";
        document.getElementById("ame").style.display = "none";
        document.getElementById("kumori").style.display = "none";
    }else if (moumuri.description == "scattered clouds") {
        console.log("曇りだよ");
        document.getElementById("temp").innerHTML = ondo.temp;
        document.getElementById("kumori").style.display = "block";
        document.getElementById("ame").style.display = "none";
        document.getElementById("hare").style.display = "none";
    };
};

function OnButtonClick() {
    document.getElementById("country").innerHTML = country[now];
    now = parseInt(now) + 1;

    url = "http://api.openweathermap.org/data/2.5/find?q=" + country + "&units=metric&APPID=b0b2df3843cddddea70869f090036e35";
    kirikae();
    syokika(now);
};

function syokika(){
    console.log(now);
    if (now > 1){
       now = 0;
    };
};