//Quản lý điện thoại

let listPhones = [
    {
        'name': 'Iphone 11',
        'price': 50e+6,
        'factory': 'Apple',
        'amount': 100,
    },
    {
        'name': 'S10',
        'price': 15e+6,
        'factory': 'Samsung',
        'amount': 200,
    },
    {
        'name': 'Bphone 3',
        'price': 7e+6,
        'factory': 'Bphone',
        'amount': 50,
    },
    {
        'name': 'Joyplus',
        'price': 3e+6,
        'factory': 'Vsmart',
        'amount': 20,
    },
    {
        'name': 'Iphone X',
        'price': 25e+6,
        'factory': 'Apple',
        'amount': 150,
    },
];

let menu ="1.Hiện danh sách điện thoại\n"
        + "2.Thêm điện thoại\n"
        + "3.Sửa điện thoại\n"
        + "4.Xóa điện thoại\n"
        + "5.Sắp xếp\n"
        + "6.Tìm\n"
        + "Nhấn phím bất kì để thoát.\n";


let isExit = false;

while(!isExit){
    let input = prompt(menu + "Mời bạn chọn:");

    if(input === "1"){
        inDanhSachDienThoai(listPhones);   
    }
       
    else if(input === "2"){
        themDienThoai();
        inDanhSachDienThoai(listPhones);
    }

    else if(input === "3"){
        suaDienThoai(listPhones);
    }

    else if(input === "4"){
        xoaDienthoai(listPhones);
    }

    else if(input === "5"){
        // Sắp xếp ( theo giá);
       // Listphones = [ {}, {}, ]
        sapXepTangDan('amount');
    //    sapXepTangDan('price');
    }

    else if(input === "6"){ //tìm theo tên  ,và filter theo khoảng giá
      timVaFilter(listPhones);
    }

    else{
        isExit = true;
    }

};


function inDanhSachDienThoai(phones){
    let result = '';
        for(let i = 0 ; i < phones.length; i ++){ // duyệt từng điện thoại
            const phone = phones[i];
            result += (i + 1) + '.';
            for (const key in phone) { //Duyệt từng key - value của điện thoại
                     const value = phone[key];      
                     result += `${key} : ${value},`;
                }
                result = result.substr(0, result.length - 1);
                result += '\n-------------------------------------------------\n';
            }
            
        alert(result);
};

function themDienThoai(){
    let name = prompt("Nhập tên:");
    let price = Number(prompt("Nhập giá:"));
    let factory = prompt("Nhập nhà sản xuất:");
    let amount = Number(prompt("Nhập số lượng:"));

    // debugger; 
    // Cho phép chạy từng dòng code một  ( bấm F10)
    //F11 đi vào function hoặc hàm
    //F8 chạy hết
    // chạy trong F12 source
    listPhones.push({
        'name': name,
        'price': price,
        'factory': factory,
        'amount': amount,
    });
};



function sapXepTangDan(sapXepTheo){
    // JSON.parse(JSON.stringify(listPhones))
    let copy = JSON.parse(JSON.stringify(listPhones)) ; // Tạo ra một mảng copy mới;
                                                    // C2
                                                //     let mangMoi = [];
                                                //     for (const phone of listPhones) {
                                                //         let object = {};
                                                //         for (const key in phone) {
                                                //             object[key] = phone[key];
                                                //         }
                                                //         mangMoi.push(object);
                                                //     }   
                                                // }
    for(let i = 0; i < copy.length - 1; i++){
        for(let j = i + 1; j < copy.length; j++){
            if( copy[i][sapXepTheo] < copy[j][sapXepTheo]){
                let temp = copy[i];
                copy[i] = copy[j];
                copy[j] = temp;
            }
        }
    }
    alert("Đã sắp xếp thành công");
    inDanhSachDienThoai(copy);
};

function suaDienThoai(){
    let viTri = Number(prompt("Bạn muốn sửa điện thoại ở vị trí nào?"));
        let phone = listPhones[viTri-1];
        let index = viTri - 1;
        if( ( index >= listPhones.length) || ( index < 0 ) ){
            alert("Nhập sai rồi");
        }
        else{
            let name = prompt("Nhập tên:");
            let price = Number(prompt("Nhập giá:"));
            let factory = prompt("Nhập nhà sản xuất:");
            let amount = Number(prompt("Nhập số lượng:"));
            phone.name = name;
            phone.price = price;
            phone.factory = factory;
            phone.amount = amount;
        alert("Sửa thành công");
        }
};

function xoaDienthoai(){
    let viTri = Number(prompt("Bạn muốn xóa điện thoại ở vị trí nào?"));
    let phone = listPhones[viTri-1];
    let index = viTri - 1;
    if( ( index >= listPhones.length) || ( index < 0 ) ){
        alert("Nhập sai rồi");
    }
    else{
        for (const key in phone) {         
                phone[key] = '';
        }
        // delete (phone.name);
        // delete(phone.price);
        // delete(phone.factory);
        // delete(phone.amount);
        alert('Xóa thành công');
    }
};

function timVaFilter(){
    let nhap =prompt("Bạn muốn tìm điện thoại theo tên hay theo khoảng giá? \n 1.Theo tên \n 2.Theo khoảng giá");
    if(nhap === "1"){
        let tim = prompt("Bạn muốn tìm điện thoại tên gì?");
        for (const phone of listPhones) {
            if(phone.name.toLowerCase().includes(tim.toLowerCase()) ){
                 alert(`Name:${phone.name} \nPrice: ${phone.price} \nFactory: ${phone.factory} \nAmount: ${phone.amount} `);
        }
        
    }
}
    else if(nhap === "2"){
        let from = Number(prompt("Nhập khoảng giá bạn muốn \n Từ: "));
        let to = Number(prompt("Đến?"));
        for (const phone of listPhones){
            if( (phone.price >= from) && (phone.price <= to) ){
                 alert(`Name:${phone.name} \nPrice: ${phone.price} \nFactory: ${phone.factory} \nAmount: ${phone.amount} `);
            }

        }
    }
    else{
        alert(`Nhập sai rồi`);
    }
};