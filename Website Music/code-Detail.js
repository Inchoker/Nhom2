//Lấy dữ liệu từ localstorage xuống để so sánh
let a = [];
for (let i = 1; i <= localStorage.length; i++) {
    a.push(JSON.parse(localStorage.getItem(`artist${i}`)));
}
console.log(a[0].name);

function xacDinh(e) {
    console.log(e)
    console.log(e.target.dataset.artistName);
    for (let i = 0; i < a.length; i++) {
        if (e.target.dataset.artistName === a[i].name) {
            alert('Đúng rồi!')
            localStorage.setItem('currentArtist',i+1);
            window.location.href= "Detail-Artist.html";
        }
    }
}