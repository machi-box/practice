//モジュールの読み込み
var client = require('cheerio-httpcli');
var URL = require('url');

//URLとパラメーター
var url = "http://ja.wikipedia.org/wiki/";
var param = {};

client.fetch(url, param, function (err, $, res) {
    if (err) {
        console.log("error");
        return;
    }
    //リンクを抽出して表示
    $("img").each(function (idx) {
        var text = $(this).text();
        var href = $(this).attr('href');
        if (!href) return;
        var href2 = URL.resolve(url, href);
        console.log(text + " : " + href);
        console.log(" => " + href2 + "\n");
    });
});