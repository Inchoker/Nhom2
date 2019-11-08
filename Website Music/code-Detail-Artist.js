

// Lấy dữ liệu từ localStorage
let a = '';
a = JSON.parse(localStorage.getItem(`artist${localStorage.getItem('currentArtist')}`));

console.log(a);


document.getElementById("name").innerHTML = a.name;
document.getElementById("real-name").innerHTML = a.tenThat;
document.getElementById("birthday").innerHTML = a.sinhNhat;
document.getElementById("nation").innerHTML = a.nation;
document.getElementById("singer1-cover-boder").innerHTML = a.anhBackGround;
document.getElementById("singer1-ava-boder").innerHTML = a.image;
document.getElementById("infor").innerHTML = a.inFor;


if (a.name === 'Sơn Tùng M-TP') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/embed/knW7-x7Y7RE" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/FN7ALfpGxiI" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/Llw9Q6akRo4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/qGRU3sRbaYw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/32sYGCOYJUM" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe  src="https://www.youtube.com/embed/LCyo565N_5w&list=OLAK5uy_loz58c4-udKkhKY71zabCicwq4EQKY_Is&index=7&t=0s" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/30KI5SuECuc&list=OLAK5uy_loz58c4-udKkhKY71zabCicwq4EQKY_Is&index=8&t=0s"  width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/PdbsnGuduvo&list=OLAK5uy_loz58c4-udKkhKY71zabCicwq4EQKY_Is&index=12&t=0s" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/embed/-vtBgNxMyZI" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>'
}

else if (a.name === 'Amee') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/watch?v=YXkp77tR9vw" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=-mDjSuS-Fiw" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=I3RICWXA_3U" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=ZwDxaM5VBJM" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=95ahbau-rJk" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe  src="https://www.youtube.com/watch?v=iE52-XXnQqs" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=_UCb4U82tTk"  width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=X006NGyDFK8" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=8oa9i2_p7K4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>'
}

else if (a.name === 'Soobin Hoàng Sơn') {
    document.getElementById('ds-bai-hat').innerHTML =
        '<iframe src="https://www.youtube.com/watch?v=7kP8Qnu2TJ8" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=dOZ1gK5YFBI" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=wnSNyE2hVu4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=j__Q13iAxNk" width="350" height="200" frameborder="0"allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=z5Jc7KiTLbs" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe  src="https://www.youtube.com/watch?v=nIjreHymcWU" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=X7sSE3yCNLI"  width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=Mtiz26WdeKA" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>' +
        '<iframe src="https://www.youtube.com/watch?v=G6towqFgoZ4" width="350" height="200" frameborder="0" allowFullScreen class="spacing"></iframe>'
}



