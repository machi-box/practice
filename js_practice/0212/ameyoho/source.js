(function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            //ここに書く
            console.log("ok!");
            console.log(this.response);
            //こっからどうやって降水量を出せばいいのかわからない
            weatherData = this.response;
            for (var i in weatherData) {
                var feature = weatherData[i];
            for (var i in feature) {
                console.log(feature[i]);
                var Property = feature[i];
            for (var i in Property) {
                console.log(Property[i]);
                var WeatherList = Property[i];
                
            for (var i in WeatherList) {
                var Weather = WeatherList[i];
                tenkimiru(Weather);
}
}
}
}
        }
        function tenkimiru(){
            console.log(Weather +"だよ");
        }
    };
    xhr.responseType = 'json';
    xhr.open('GET','https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj0zaiZpPVRLTFR4UjdmcHYxaSZzPWNvbnN1bWVyc2VjcmV0Jng9Y2M-',true);
    xhr.send(null);
})();