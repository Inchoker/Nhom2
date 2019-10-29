/* Function là gì?
    Là một đoạn block code thực hiện một chức năng nhất định.
    Viết một lần và sử dụng nhiều lần.

    Cú pháp:
    function tênFunction(Danh sách tham số){
        Code
    }

    Gọi function
    tênfunction(danh sách biến);

    ds biến không có thì để trống


    function tenFunction (Tên tham số nhận giá trị , ngăn cách nhau bởi dấu phẩy){
        code
    }
    
    Cách sử dụng: tenFunction(tên biến truyền giá trị cho tham số);

    Tên tham số nhận giá trị : chỉ là nơi nhận các giá trị của biến khi gọi truyền vào, 
    không liên quan đến các biến khác ngoài Function
*/

function Welcome(){
    console.log("Welcome!");
}

// Welcome();
// Welcome();
// Welcome();


// function xinChao(a){
//     console.log("Xin chào: " + a);
// }

// let name = prompt("Nhập tên");
// xinChao(name);

// function tinhTongHaiSo(soThuNhat, soThuHai){
//     console.log(`${soThuNhat} + ${soThuHai} = ${soThuNhat + soThuHai}`);
// }

// let a = 5;
// let b = 10;
// tinhTongHaiSo(a, b);

// function: nhập tên và năm sinh, hiện ra 
// xin chào: [tên], bạn [tuổi] tuổi.

// function hienTenVaNamSinh(ten,namSinh){
//     let tuoi = 0;

//     function tinhTuoi(namSinh){
//         let now = new Date();
//         tuoi = now.getFullYear() - namSinh;
//     }

//     tinhTuoi(namSinh);
//     console.log(`${ten}, bạn ${tuoi} tuổi.`)
// }


// let name = prompt("Nhập tên:");
// let year = prompt("Nhập năm sinh");

// hienTenVaNamSinh(name,year);

// let favorite = ['1','2'];

// function getFullName(){
//     console.log(this.FirstName + " " + this.LastName);
// }

// let person = {
//     FirstName : "Phạm",
//     LastName : "Tuân",
//     FullName : getFullName,
//     Favorite : favorite,
// }

// person.FullName();

/*  Định nghĩa cách 2
    let tenbien = function(danh sách tham số){
        code
    }

    Sử dụng: 
    tenbien(ds biến truyền vào);

*/

// let xinChao = function(name){
//     console.log("Xin chào " + name);
// }

// xinChao("Tuân");


// function doiTen(name){
//     name = "abc";
// }

// let tenThat = "Nam";
// doiTen(tenThat);
// console.log(tenThat); // Nam

// let person = {
//     name : 'Nam'
// }

// function doiTen2(nguoiNaoDo){
//     nguoiNaoDo.name = "abc";
// }

// doiTen2(person);
// console.log(person); // abc


/*  Tham chiếu - Tham trị
-   Tham trị : chỉ truyền giá trị vào tham số .
    Áp dụng cho các kiểu dữ liệu : Số , Chuỗi, Boolean .

-   Tham chiếu : truyền cả địa chỉ ô nhớ của biến vào làm tham số . (Tham số mà bị thay đổi thì biến thay đổi theo )
    Áp dụng cho các kiểu dữ liệu : Mảng , Object .

*/
let mang = [1,3,5,4];
function sapXepTangDan(mang){
    for(let i = 0; i < mang.length - 1;i++){
        for(let j = i + 1; j < mang.length ; j++){
            if(mang[j] < mang[i] ){
               let temp = mang[i];
                mang[i] = mang[j];
                mang[j] = temp;
            }           
        }
    }
}

// function sapXepTangDan(mang){
//     let isTangDan = false;
//     for(let i = 0; i < mang.length - 1;i++){
//         for(let j = i + 1; j < mang.length; j++){
//             isTangDan(mang[i], mang[j]);
//             if(isTangDan){
//                 if(mang[i] < mang[j]){
//                     let temp = mang[i];
//                     mang[i] = mang[j];
//                     mang[j] = temp;
//                 }
//             }           
//         }
//     }
// }
    // function sapXepTangDan(mang){
    //     mang.sort(function(a, b){
    //         return a - b;
    //     })
    // }

// function sapXepGiamDan(mang){
//     for(let i = 0; i < mang.length - 1;i++){
//         for(let j = i + 1; j < mang.length; j++){
//             if(mang[j] > mang[i] ){
//                 temp = mang[i];
//                 mang[i] = mang[j];
//                 mang[j] = temp;
//             }           
//         }
//     }
// }

    // function sapXepGiamDan(mang){
    //     mang.sort(function(a, b) {
    //         return b - a;
    //     })
    // }

    // sapXepTangDan(mang);
    // console.log(mang);
    // sapXepGiamDan(mang);
    // console.log(mang);


    // let person1 = [
    //     {
    //         age : 20
    //     },

    //     {
    //         age : 18
    //     },

    //     {
    //         age : 25
    //     },

    // ]

    // person1.sort(function(a , b) {
    //     return a.age - b.age;
    // })

    // console.log(person1);

    // let result = [];
    // for (const key in person1) {
    //     const value = person1[key];
    //         result += `${key}: ${value}`;
    // }

    // alert(result);

