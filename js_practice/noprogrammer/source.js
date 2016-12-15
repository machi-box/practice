window.onload = function(){
    var photoList = [
        { src: 'img/illust1.png', title:'あんよ王国'},
        { src: 'img/illust2.jpg', title:'ウルスラ様のサンストはご褒美'},
        { src: 'img/illust3.jpg', title:'聖戦VCヤッタァァァァ'},
        { src: 'img/illust4.jpg', title:'チキだけは覚醒派'}
    ];//配列おわり
    var photoLength = photoList.length;
    
    //要素の取得
    var photo = document.getElementById('photo');
    var nextBtn = document.getElementById('nextBtn');
    var title = document.getElementById('title');
    
    //現在のインデックスを保存するための変数
    var currentIndex = 0;
    
    /*===
    *関数の定義
    *====*/
    
    //指定の画像に表示をきりかえる関数
    function showPhoto(index) {
        //すべての画像を非表示にする
        for (var i = 0; i < photoLength; i++){
            photoList[i].elem.style.display = 'none';
        }
        
        //表示する対象の要素を取得
        var targetPhoto = photoList[index];
        
        //タイトルの表示
        var viewNumber = index + 1;
        title.innerHTML = `[` + viewNumber + `]` + targetPhoto.title;
        
        //画像の表示
        targetPhoto.elem.style.display = 'inline';
        
    }
    /*===
    *イベントの設定
    *====*/
    
    //nextボタンを押した時の処理
    nextBtn.onclick = function(){
        currentIndex++; //インデックスを保存する変数に1をついか
        if(currentIndex === photoLength){
            currentIndex = 0;
        }
        //画像の切り替え
        showPhoto(currentIndex);
    };
    /*===
    *初期化処理
    *====*/
    
    //img要素をhtmlについか
    var item, img;
    for(var i = 0; i<photoLength; i++){
        item = photoList[i];
        
        //img要素の作成
        img = document.createElement('img');
        
        //作成したimg要素に属性を設定
        img.src = item.src;
        img.alt = item.title;
        
        //作成したimg要素をHTMLについか
        photo.appendChild(img);
        
        //作成したimg要素を保存
        item.elem = img;
        
    }
    //初期表示のためにshowPhoto関数を実行する
    showPhoto(currentIndex);
}