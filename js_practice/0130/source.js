var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function()
{
            console.log(this.response);
            var hoge = this.response;
            console.log(hoge);
            hogehoge = Object["name"];
}

xmlHttpRequest.open( 'GET', 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=b0b2df3843cddddea70869f090036e35', true );
xmlHttpRequest.responseType = 'json';
xmlHttpRequest.send( null );