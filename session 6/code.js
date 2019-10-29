// push(ds gía trị) => thêm vào cuối mảng
// unshift(ds giá trị) => thêm vào đầu mảng
// pop() => bỏ đi phần tử cuối
// shift() => bỏ đi phần tử đầu
// Array.isArray();  === arr instanceof Array

let mang =[2,6,7,8,9];
let tong = 0;
for(let i = 0; i < mang.length; i++){
    tong = tong + mang[i];
}
console.log(mang);
console.log("Tong = "+ tong);

let tb = 0;
console.log("Trung binh = "+ tong/mang.length);


// Tìm số lớn nhất, nhỏ nhất

var temp = 0;
for(let i = 0; i < mang.length; i++){
    if (temp < mang[i]){
        temp = mang[i];
    }
}

console.log("Số lớn nhất = "+ temp);

for(let i = 0; i < mang.length; i++){
    if (temp > mang[i]){
        temp = mang[i];
    }
}

console.log("Số nhỏ nhất = "+ temp)

// Sắp xếp tăng dần các phần tử trong mảng

for(let i = 0; i < mang.length; i++)
{
    for(let j = i+1; j < mang.length; j++){
        if(mang[i] > mang[j]){
            temp = mang[i];
            mang[i] = mang[j];
            mang[j] = temp;
        }
    }
}
console.log(mang);







