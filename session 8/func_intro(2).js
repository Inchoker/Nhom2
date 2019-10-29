/*  Function có giá trị trả về
    Từ khóa: return  => trả về giá trị cho function.

    Cú pháp : 
        function tenFunction(dsThamSo){
            code;
            return giá trị;
            hoặc return;
        }


    Cách sử dụng:
        let tenBien = tenFunction(dsBien);
    => Biến sẽ nhận giá trị trả về từ từ khóa return.
    

    return giá trị;   trả về giá trị và dừng toàn bộ luồng code phía sau
*/
// Nhận vào 2 số , nhập từ bàn phím

// function tinhTong(soThuNhat,soThuHai) {
//     return soThuNhat + soThuHai;
// }

// let a = Number(prompt("So thu nhat:"));
// let b = Number(prompt("So thu hai:"));

// let tong = tinhTong(a,b);
// print(`Tong 2 so vua nhap la: ${tong}`);

function print(message){
    console.log(message);
    // alert(messagge);
}

//  Nhập vào cân nặng, chiều cao
    // Tính chỉ số BMI 
    // In ra đánh giá : Gầy , Trung bình, Béo


// let height = Number(prompt("Nhập chiều cao: (cm)"))/100;
// let weight = Number(prompt("Nhập cân nặng: (kg)"));

// function tinhChiSoBMI(chieuCao,canNang){
//     return canNang / (chieuCao**2)
// }

// function danhGia(BMI){
//     if( BMI < 18.5){
//         console.log(`Gầy`);
//     }
//     else{
//         if(BMI < 24.9){
//             console.log(`Trung bình`);
//         }
//         else{
//             if(BMI < 29.9){
//                 console.log(`Thừa cân nhẹ`);
//             }
//             else{
//                 console.log(`Béo`)
//             }
//         }
//     }
// }

// let chiSo = tinhChiSoBMI(height,weight);
// print(`Chiều cao của bạn: ${height} \n Cân nặng của bạn: ${weight} \n Chỉ số BMI tương ứng: ${chiSo}`);
// danhGia(chiSo);

// Nhập vào ngày, tháng , năm => in ra thứ

// let ngay =  prompt("Nhập vào ngày");
// let thang =  prompt("Nhập vào tháng");
// let nam =  prompt("Nhập vào năm");
// let d = new Date(nam,thang-1,ngay); //year,month,day
// let thu = d.getDay();

// chuanHoaThu(thu);
// console.log(`Thứ của ngày vừa nhập là ${thu}`);

// function chuanHoaThu(){
//     if(thu === 0){
//         thu = `Chủ nhật`;
//     }
//     else{
//        thu = `Thứ ${thu+1}`;
//     }
// }

// Nhập vào một số => viết function trả về true nếu đó là số nguyên tố ; false nếu không phải là số nguyên tố


// let input = parseInt(prompt("Nhập vào một số bất kì"));
// print(kiemTraSoNguyenTo(input));


// function kiemTraSoNguyenTo(a){
//     let dieuKien = 0;
//     for(let i = 0; i < a; i++){
//         if( (a % i ) === 0){
//             dieuKien += 1;
//         }
//     }
    
//     if(dieuKien === 1){
//         return true;
//     }

//     else{
//         return false;
//     }
// }

// let N = parseInt(prompt("Nhập một số"));
// if((N === 0) || (N === 1)){
//     console.log("Nhập sai");
// }
// else{
//     let isSNT = kiemTraSoNguyenTo(N);

//     if(isSNT){
//         console.log(`Đây là số nguyên tố`);
//     }
//     else{
//         console.log(`Đây không là số nguyên tố`);
//     }
// }


// function kiemTraSoNguyenTo(N) {
//     // Ý tưởng: đếm số nghiệm của N,
//     // Nếu lớn hơn 2 , thì không là số nguyên tố
//     // Ngược lại thì là số nguyên tố
//     let count = 0;
//     for(let i = 1; i <= N; i++){
//         if(N % i ===0){
//               count++;
//               if(count > 2){
//                   return false;
//               }
//             }
//     }
//     return true; // chứng tỏ return false chưa bao giờ chạy. => count <= 2/
// }
//     // if(count === 2){
//     //         return true;
//     //     }
//     // else{
//     //         return false;
//     //     }
//     // }

// // Nhập vào một số => Viết function trả về một danh sách các số nguyên tố nhỏ hơn hoặc bằng
//                     // => rồi in ra


// function timSoNguyenToNhoHon(n){
//     let danhSach = [];
//         for(let i = 2; i <= n; i++){
//                 if(kiemTraSoNguyenTo(i)){
//                     danhSach.push(i);
//                 }
//             }
//     return danhSach;
// }

// let ds = timSoNguyenToNhoHon(N);
// console.log(`Danh sách các số nguyên tố nhỏ hơn hoặc bằng số vừa nhập ${N} : ${ds}`)

// Nhập vào một số N, Viết function tìm số thứ N của dãy Fibonacci
// F = 1, 1, 2, 3, 5, 8, ...

// Cách 1
let n = parseInt(prompt("Nhập vào một số:"));

// let fi = [1,1];

// if( (n === 1) || (n === 2) ){
//     return 1;
// }
// else{
//     for(let i = 2 ; i < n; i++){
//         fi[i] = fi[i - 1] + fi[i - 2];
//     }
//     return fi[n - 1];
// }

// Cách 2

// function fibo(n) {
//     if( (n === 1) || (n === 2) ){
//         return 1;
//     }
//     else{
//         let fib1 = 1;
//         let fib2 = 1;
//         let fib = 0;
//         for(let i = 3; i <= n; i++){
//             fib = fib1 + fib2;
//             fib1 = fib2;
//             fib2 = fib;
//         }
//         return fib;
//     }   
// }

// let result = fibo(n);
// console.log(result)

// Cách sử dụng đệ quy:

// N = 1 => 1
// N = 2 => 1
// N > 2 => f(N) = f(N-1) + f(N-2);

// function fibonacci(stt){
//     if((stt === 1) && (stt === 2) ){
//         return 1;
//     }
//     else{
//         let fn = fibonacci(stt - 1) + fibonacci(stt - 2);
//         return fn;
//     }
// }

// console.log(fibonacci(n));

// N! = N * (N - 1)!
function giaiThua(number){
    if(number === 0){
        return 1;
    }
        return number*giaiThua(number - 1);
}

console.log(giaiThua(n))

let folderImages =
{
    'isFolder' : true,
    'content': [
        {
                isFolder : false, 
                content: [],
                name: 'abc1.jpg'
        },
        {
                isFolder : false, 
                content: [],
                name: 'abc2.jpg'
        },
        {
                isFolder : false, 
                content: [],
                name: 'abcd.jpg'
        },
    ],
    'name' : 'images'
}

// Đệ quy

// While

function timFile(searchString,Folder){
let listFolderSearch = [folderImages];
let result = [];
let searchString = '';
while(listFolderSearch.length > 0 ){
    let search = listFolderSearch.shift(); //Bỏ phần tử đầu khỏi mảng và gán cho search
    if(!search.isFolder){ // Nếu là một file
        if(search.name.includes(searchString)){
        result.push(search);
        }
    }
    else{ // Là folder thì gộp content của folder nằm trong vào folder ngoài
        listFolderSearch = listFolderSearch.concat(search.content);
    }       
}
console.log(result);
}
timFile('d',folderImages)



// Ghép toàn bộ phần tử của mảng b vào mảng a
let a = [1,2,3,4,5]
let b = [6,7,8]
a = a.concat(b);