// ページ読み込み時にpタグに class="hidden"とか追加追加
window.onload = function(){
    var status = document.getElementsByTagName("p");
    status.classList.add("foo");
    console.log(status);
}