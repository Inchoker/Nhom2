
// let nhap = Number(prompt('Bạn muốn làm gì ?  \n Menu: \n 1.Thêm thông tin nghệ sĩ \n 2.Sửa thông tin nghệ sĩ \n 3.Xóa thông tin nghệ sĩ'));

// //Thêm + Sửa + Xóa
// Tên
// Ảnh
// VideoId
// Tiểu sử
// Quốc gia
// Thể loại nhạc: EDM acoustic indie INSTRUMENTAL MUSIC
// ...
// ChannelID:?

// Bấm vào hiện bài hát 
// => kết quả : API channel id 
// search =>  lưu channel id để suy ra danh sách bài hát

let artist = [
    {
        'name': 'Sơn Tùng M-TP',
        'nation': 'Việt Nam',
        'image': '<img src="https://i.imgur.com/hg6ukiT.jpg" class="rounded" width="200" height="200">',
        'videoId': ['knW7-x7Y7RE', 'FN7ALfpGxiI'],
        'thumbnail': [],
    },

    {
        'name': 'Soobin Hoàng Sơn',
        'nation': 'Việt Nam',
        'image': '<img src="https://i.imgur.com/IcSyIaS.jpg" class="rounded" width="200" height="200">',
        'videoId': ['7kP8Qnu2TJ8', 'HK31DrqpztM&bpctr=1572624414'],
        'thumbnail': [],
    },
];

function getData(){
for (let i = 0; i < artist.length; i++) {
    let xhr = new XMLHttpRequest();
    let keyword = '20 bài hát trending của' + artist[i].name + ' Official Music Video';

    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" +
        keyword + "&type=video&key=AIzaSyA0EXoz8yj9TA8GzYy_60N8umR-c2I6PI4"

    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            getInfor(this.responseText, artist[i]);

        }
    }

    xhr.send();
}
}

getData();
// Hiển thị thông tin từng nghệ sĩ ra màn hình
function displayInfor() {
    document.getElementById('table-content').innerHTML=''
    for (let i = 0; i < artist.length; i++) {
        document.getElementById('table-content').innerHTML +=
            '<tr> <th scope="row">' + (i + 1) + '</th> <td>' + artist[i].name +
            '</td><td>' + artist[i].nation +
            '</td><td>' + artist[i].image +
            '</td><td>' + artist[i].videoId +
            '</td><td>' + 
            // for(let i = 0 ; i < artist[i].thumbnail.length; i++){


            // }
            // '<img  class="rounded" width="200" height="200" + src=""' +
            artist[i].thumbnail + 
            '<td><button class="btn btn-primary" data-artist-name = "'+artist[i].name+'" onclick="suaInfor(event)"> Sửa </button><button class="btn btn-info" data-artist-name="'+artist[i].name+'" onclick = "xoaInfor(event)"> Xóa </button> </td> </tr>'

    // console.log(artist[i].videoId);
    }
}


// Lấy videoID và thumbnail theo nghệ sĩ tương ứng  
function getInfor(json, currentArtist) {
    let video = JSON.parse(json);
    let ds = video.items;
    let videoIDs = [];
    let anhVideo = [];

    // console.log(video);
    // console.log(ds[0].snippet.thumbnails.high.url);

    for (let i = 0; i < ds.length; i++) {
        videoIDs.push(ds[i].id.videoId)      // Lấy id của video
        anhVideo.push(ds[i].snippet.thumbnails.high.url)     // Lấy url của thumbnail 
    }

    // console.log(videoIDs);
    // console.log('thumbnails:' + anhVideo.length)

    for (let j = 0; j < videoIDs.length; j++) {
        currentArtist.videoId.push(videoIDs[j]);
    }

    for (let j = 0; j < anhVideo.length; j++) {
        currentArtist.thumbnail.push(anhVideo[j]);
    }
    displayInfor();

}

function search() {

}


function themNgheSi() {
    let name = prompt('Bạn hãy nhập tên của ca sĩ:');
    let nation = prompt('Bạn hãy nhập quốc tịch của ca sĩ:');
    let image = prompt('Bạn hãy nhập link ảnh của ca sĩ ( nếu có ):');
    artist.push({
        'name': name,
        'nation': nation,
        'image': '<img class="rounded" width="200" height="200" src=" ' + image + '">',
        'videoId': [],
        'thumbnail': [],
    })
    // document.getElementById('table-content').innerHTML +=
        console.log(artist)
        getData();
        displayInfor();
}


function suaInfor(e) {
    let ten = prompt('Bạn muốn sửa tên thành gì ?');
    let quocTich = prompt('Bạn muốn đổi quốc tịch thành của nước nào ?');
    let anh = prompt('Bạn muốn thêm link ảnh của nghệ sĩ này không ?');
    for (let i = 0; i < artist.length; i++) {
        if (e.target.dataset.artistName === artist[i].name) {
            artist[i].name = ten;
            artist[i].nation = quocTich;
            artist[i].image = anh;
        }
    }
    console.log(e)
    displayInfor();
   
}


function xoaInfor(e) {
    // let index = Number(prompt('Bạn muốn xóa hết thông tin của nghệ sĩ ở vị trí nào ?'));
    // artist.splice(index - 1, 1)
    // for (let i = 0; i < artist.length; i++) {
    //     console.log(artist[i])
    // }
    // displayInfor();
    for(let i = 0; i < artist.length; i++){
        if(e.target.dataset.artistName === artist[i].name){
            artist.splice(i,1);
        }
    }
    displayInfor(); 
    console.log(e.target.dataset.artistName);

}


// console.log(artist[0].image)

// function display(){
//     let name = 'Tên nghệ sĩ: \n';
//     let nation = 'Quốc tịch: ';
//     for(let i = 0; i < artist.length; i++){
//         nation = 'Quốc tịch: ' + artist[i].nation;
//         name += (i+1) + ': ' + artist[i].name + '\n' + nation + '\n';

//     }
//     alert(name)
// }

// display();
// alert(artist[0].name)

// OK
// document.getElementById('1').innerHTML =  object[0].image 
