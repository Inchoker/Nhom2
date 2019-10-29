// C      R    U      D
// Create Read Update Delete

//Create
let menu = ["Phở gà", "Bánh mì trứng" , "Cơm sườn" , "Mì xào" , "Chè" ];

// // console.log(menu);

// // // truy cập bằng index 
// // let food = menu[0];
// // console.log(food);

//Read
// // menu.length         //=> số lượng phần tử trong array
// for (let i=0; i < 5; i++)
// {
//     console.log(menu[i]);
// }

// menu.forEach( (item,index) => { 
//                                console.log(index,item) } )

VD:

// menu.forEach( (a,b) =>  
//          {  console.log(` ${b+1}. ${a} `);     }   
//             );

// for (let i = 0; i < menu.length; i++)
// {
//     console.log ( (i+1) + ". " + menu[i]);
// };


// Update
// Lệnh thêm phần tử

menu.push("Bún gà");
// console.log(menu);

// let add = prompt("Bạn muốn thêm món vào không ?");
// menu.push(add);
// console.log(menu);

//Thay đổi giá trị của 1 phần tử bên trong array;

// menu[1] = "Bánh đa cua";
// console.log(menu);

// Nhập vị trí + thay đổi vị trí và giá trị

// let vitri = Number( prompt("Bạn muốn thay đổi món ăn ở vị trí nào?") );
// let monAn = prompt("Bạn muốn đổi thành món gì?") 

// menu[vitri - 1] = monAn;
// console.log(menu);

// indexOfMonAn = menu.indexOf("Bánh đa cua");
// console.log(indexOfMonAn);

// let monAn = prompt ("Bạn muốn thay đổi món nào?");
// let viTri=menu.indexOf(monAn)   ;
// let monAn1 = prompt("Bạn muốn đổi thành món gì?");
// menu[viTri] = monAn1;
// console.log(menu);


// Delete

//  console.log(menu);

//  menu.splice(0,2);

//  console.log(menu);

// console.log(menu);
// let monAn = prompt("Bạn muốn xóa món ăn nào");
// let vitri = menu.indexOf(monAn); 
// menu.splice(vitri,1);
// console.log(menu);

// In ra cho người dùng sản phâm của một shop bán hàng 5 sản phẩm 
// Cho người dùng xem mặt hàng
// Hỏi người dùng có muốn gì  ? C/R/U/D Exit
// C => Tạo thêm gì ? N => quay lại hỏi  / C cho điền món đồ mới => in ra list mới 
// R => hỏi muốn xem sản phẩm nào 
// U => Món đồ muốn sửa => Món đồ mới => in ra list mới 
// D => Món đồ muốn xóa => In ra list mới 
// Không thì thanks
// ( nếu món đồ không tồn tại thì => món đồ không tồn tại )
// E => thoát

let sanpham = ["Nhẫn","Quần","Áo","Vòng tay","Mũ"];
console.log(sanpham);
loop = true

while(loop){

   let nhap = prompt("Bạn muốn làm gì? C/R/U/D/E");
   if ( nhap == "C")
   {
     let them = prompt("Bạn muốn tạo thêm sản phẩm gì?");
           sanpham.push(them);
           console.log(sanpham);
    
    }

   else if (nhap == "R" )
    { 
     while(loop){
     let xem = prompt("Bạn muốn xem cái nào? (Gõ B để quay lại)");
     let vitri = sanpham.indexOf(xem);
     if ( (vitri === (-1) ) && (xem != "B") )
     {
       console.log("Sản phẩm này không tồn tại");
     }
     else if (xem == "B"){
       loop = "false";
       break;
     }

    //  if ( sanpham.includes(xem) )
    // {
    //     console.log(xem);
    // }
    // else console.log("Nhập sai";
    //      
     else { loop ="false";
           console.log(sanpham[vitri]); 
           break;
          }
                }
    }
    
    else if (nhap == "U")
    {
      while(loop){
      let sua = prompt("Bạn muốn sửa món đồ nào ? (Gõ B để quay lại)");
      let vitri = sanpham.indexOf(sua);
      if ( (vitri === (-1) ) && (sua != "B") )
       {
       console.log("Sản phẩm này không tồn tại");
       }
     else if (sua == "B"){
      loop = "false";
      break;
    }

     else { loop = "false";
           let suadothanh = prompt("Bạn muốn sửa thành món gì?");
           sanpham[vitri] = suadothanh;
           console.log(sanpham);
           break;
          }

                 }
     
    }

    else if (nhap == "D")
    { while(loop){
      let xoa = prompt("Bạn muốn xóa món đồ nào ? (Gõ B để quay lại)");
      let vitri = sanpham.indexOf(xoa);
      if ( (vitri === (-1) ) && (xoa != "B") )
     {
       console.log("Sản phẩm này không tồn tại");
     }
     else if (xoa == "B"){
       loop = "false";
       break;
     }
     
     else { loop = "false";
           sanpham.splice(vitri,1);
           console.log(sanpham);
           break;
          }
                 }
    }
    
    else if (nhap == "E")
    { 
        break;  
    }
    else 
    {   
        console.log("Câu lệnh không hợp lệ");
    }
}


