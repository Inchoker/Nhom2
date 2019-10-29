
// // let h1 = document.getElementById("Welcome");

// // console.dir(h1);
// // console.log(h1.innerHTML);
// // // console.log(h1.attributes);

// // h1.innerHTML = "Hello world";

// let tagName = document.getElementsByTagName("h1");   
// console.dir(tagName);   
// // => Lấy ra tất cả thẻ h1

// // let className  = document.getElementsByClassName("color");
// // console.dir(className);
// // => Lấy ra tất cả thẻ có class = "color"
// let pDocument = document.getElementById("p-document");
// let listSpan = pDocument.getElementsByTagName("h1");
// console.dir(listSpan);

// let height = Number(prompt("Nhập chiều cao (cm)"))/100;
// let weight = Number(prompt("Nhập cân nặng (kg)"));

//     let BMI = weight/(height*height);
//     let kq = document.getElementById("Ketqua").innerHTML;
//     document.write(`BMI = ${BMI}`);
//     if(BMI < 18.5){
//         kq = "Gầy";
//     }
//     else if(BMI < 25){
//         kq = "Bình thường"; 
//     }
//     else if(BMI < 29){
//         kq = "Thừa cân";
//     }
//     else {
//         kq = "Béo phì";
//     }


// // let h1 = document.getElementsByTagName("h1");
// // console.dir(h1);
// // for (const h of h1) {
// //     h.innerHTML = "....";
// // }

// let h1 = document.getElementById("Ketqua");
// // h1.style.color = "crimson";
// // h1.style.fontSize = "large";
// // h1.innerHTML = kq.innerHTML;
// h1.className = "crimson";
// // h1.innerHTML = kq;

// let pHTML = document.getElementById("p-html");
// pHTML.innerHTML = "<span> Nội dung </span>"

// let monHoc = ["Javascript","Html","CSS"];

// // let ds = document.getElementById("danh-sach-mon-hoc");
// // for(let i = 0; i < monHoc.length; i++){
// //     ds.innerHTML += `<li> ${monHoc[i]} </li>`;
// // };

// let result = [];
// for (const mon of monHoc) {
//     result += "<li>" + mon + "</li>";
    
// }

// let intro = "Ví dụ về code HTML: &nbsp;&nbsp; &lt;html&gt; &lt;/html&gt;"

// document.getElementById("danh-sach-mon-hoc").innerHTML = intro;

// // ds.style.color = "blue";

// function displayInfo(){
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let result = "Bạn tên là : " + name + ", Tuổi : "+ age;
//     document.getElementById("displayInfo").innerHTML = result;
// }

function displayBMI(){
    let chieuCao = Number(document.getElementById("height").value)/100;
    let canNang = Number(document.getElementById("weight").value);
    let BMI = canNang/(chieuCao*chieuCao);
    let input = `Chiều cao : ${chieuCao} (m) <br> Cân nặng : ${canNang} (kg) <br> BMI = ${BMI} <br>`;
    let kq = 'Tình trạng: ';
    if(BMI < 18.5){
        kq += "Gầy";
    }
    else if(BMI < 25){
        kq += "Bình thường"; 
    }
    else if(BMI < 29){
        kq += "Thừa cân";
        }
    else {
        kq += "Béo phì";
    }
    document.getElementById("TinhTrang").innerHTML = input + kq;
    document.getElementById("height").value = ''; // Xóa luôn dữ liệu trong ô vừa nhập.
    document.getElementById("weight").value = '';
}

function displayNow(e){
    console.log(e); 
    let time = new Date();
    let gio = time.getHours();
    let phut = time.getMinutes();
    let giay = time.getSeconds();
    let ngay = time.getDate();
    let thang = time.getMonth() + 1;
    let nam = time.getFullYear();
    let BayGio = `${gio}:${phut}:${giay} &nbsp;&nbsp;  ${ngay}/ ${thang} /${nam}`;
    document.getElementById("BayGio").innerHTML = BayGio;
    // document.getElementById("nut").outerHTML ='';
    // document.getElementById("nut").remove() ;      // Mất luôn
    // document.getElementById("nut").style.display = "none";  // Không cho hiển thị
    
    e.target.style.display = "none";
}
