window.onload = function(){
    
    var photoList = [
        {src: 'img/spring.jpg', title:'春の桜'},
        {src: 'img/summer.jpg', title:'夏のひまわり'},
        {src: 'img/autumn.jpg', title:'秋の紅葉'},
        {src: 'img/winter.jpg', title:'冬の山'}
    ];
    
    var photoLength = photoList.length;
    
    //要素の取得
    var photo = document.getElementById('photo');
    var nextBtn = document.getElementById('nextBtn');
    var title = document.getElementById('title');
    
    //現在のインデックスを保存するための変数
    var currentIndex = 0;
    
    //指定の画像に表示を切り替える関数
    function showPhoto(index){
        //すべての画像を非表示
        for (var i = 0; i<photoLength; i++){
            photoList[i].elem.style.display = 'none';
        }
        //表示する対象の要素を取得
        var targetPhoto = photoList[index];
        
        var viewNumber = index+1;
        title.innerHTML = viewNumber + '.' + targetPhoto.title;
        targetPhoto.elem.style.display='inline';
    }
    
    nextBtn.onclick = function(){
        currentIndex++;
        if (currentIndex === photoLength){
            currentIndex = 0;
        }
        
        showPhoto(currentIndex);
    };
    
    var item, img;
    for (var i = 0; i<photoLength; i++){
        item = photoList[i];
        
        img = document.createElement('img');
        
        img.src = item.src;
        img.alt = item.title;
        photo.appendChild(img);
        
        item.elem = img;
    }
    
    showPhoto(currentIndex);
    
}