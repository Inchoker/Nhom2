//Object là một kiểu dữ liệu lưu nhiều dữ liệu cùng lúc dạng key - value 
// và truy xuất dữ liệu thông qua key

//Cú pháp {
            // "key1" : value,
            // "key2" : value
//        }
// Value ở kiểu dữ liệu bất kì 
// Nhưng key phải là string hoặc số
// Đặc điểm : key là duy nhất 
// Nếu key bị khai báo trùng thì chỉ lấy key khai báo cuối


let person = {
    "name": "Tuân",
    "age": 20,
    2: [4,5,6],
    "name": "Something"
}

// console.log(person);


// Truy xuất :    tên biến[key] hoặc tên biến.key

// console.log(person["name"]);
// console.log(person.age);
// console.log(person["2"]);


// Thêm hoặc sửa :  
                    // Tên biến[key] = giá trị;
                    // Tên biến.key 
                    // Nếu key đã tồn tại trong object  => sửa giá trị trong object
                    // Nếu key không tòn tại trong object  => thêm cặp key - value vào object

// Xóa :
        // delete tenbien[key] / tenbien.key                    
// person.age = 18;
// person.favorite = "Eating";
// delete person.age;
// console.log(person);




// Duyệt:
  // forin => duyệt từng key trong object
  // forof => duyệt từng giá trị trong mảng mà không cần thông qua index
for (const key in person) {
        const value = person[key];
        console.log(key + ": "+ value);
}

let arr = ["a","b","c"];
for (const value of arr) {
    console.log(value);
}
// forof  Không dùng được cho object

arr.forEach(element => {
    console.log(element);
});



        









