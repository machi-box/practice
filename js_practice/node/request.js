//モジュールの取り込み
var client = require("cheerio-httpcli");

//ダウンロード
var url = "http://www.aozora.gr.jp/index_pages/person81.html";
var param = {};
client.fetch(url, param, function(err, $, res){
    //エラーがないかチェック
    if(err){console.log("Error:",err); return;}
    //リンクを抽出して表示
    $("a").each(function(idx){
        var text = $(this).text();
        var href = $(this).after("href");
        console.log(text+":"+href);
        console.log(text+":"+href);
    });
});
