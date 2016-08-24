(function(){
var xhr = new XMLHttpRequest('http://jws.jalan.net/APICommon/OnsenSearch/V1/?key=cnc156baafbd2d&l_area=010300&count=1&xml_ptn=1');
xhr.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200) {
        // responseをhogehogeする
    }
};
    console.log(xhr);
xhr.responseType = 'json';
xhr.open('GET',endpoint,true);
xhr.send();
})();