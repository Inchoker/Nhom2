    // B1: Tạo được danh sách tên công việc ( chưa cần quan tâm trạng thái)

    //B2: In ra màn hình console, 
    // Thêm sửa xóa được list danh sách

    // Tìm hiểu về object

//Todo list
let list = ["Java","C","Ruby"];

// let l1 = {
//     STT: 1,
//     Content:"Java"
// }
// let l2 = {
//     STT: 2,
//     Content:"C"
// }
// let l3 = {
//     STT: 3,
//     Content:"Ruby"
// }


let loop = true;
// console.table([l1,l2,l3]);

function show()  {
        console.log(`STT\tContent`),
        list.forEach( (item,index) =>
        console.log(`${index+1}.\t${item}  `)) 
    }


function strASc(a,b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    }

function timkiem(a,b){

}



// while(loop){
//    let them = prompt("What you wanna add to the list? (E to move to function)");
//    if(them == "E"){
//     break;
// }  
//    list.push(them);
// }
// list.forEach((item,index) =>
// console.log(`STT:${index+1} To-do list: ${item}`) )
//Tìm kiếm không phân biệt hoa hay thường 
while(loop){
    let act = Number(prompt("Menu:\n 1.In \n 2.Thêm \n 3.Sửa \n 4.Xóa \n 5.Sắp xếp \n 6.Tìm kiếm \n 7.Thoát "));
    if(act === 1){
    // console.log(`STT\tContent`);
    // list.forEach( (item,index) =>
    // console.log(`${index+1}.\t${item}  `))
    show();

    //alert() giống console.log nhưng nó in ra một kết quả trong một màn hình
}
    else if(act === 2){
    let them = prompt("Which one you wanna create?");
    list.push(them);
    show();

}
    else if(act === 3){
    let viTri = Number(prompt("Bạn muốn sửa ở vị trí nào?"));
    if(list.includes(list[viTri-1]) == false ){
        console.log("This item does not exist.")
    }
    else{
        let sua = prompt("You wanna change to what?")
        list[viTri - 1] = sua;
        show();
    }
    
}
    else if(act === 4){
    while(loop){
    let viTri = Number(prompt("Bạn muốn xóa ở vị trí nào? (0 to turn back)"));
    if(viTri === 0){
        break;
    }
    // else{
    
    if(list.includes(list[viTri-1]) == false ){
        console.log("This item does not exist.")
    }
    else{
        list.splice(viTri-1,1);
        show();
    }
}
}

// }
    else if(act === 5){
        while(loop){
            let hd = Number(prompt("1.Sắp xếp tăng dần \n 2.Sắp xếp giảm dần"))
        if(hd === 1){
            console.log("Sắp xếp tăng dần:");
            list.sort(strASc);
            show();
            break;
        }
        else if(hd === 2){
            console.log("Sắp xếp giảm dần:");
            list.reverse();
            show();
            break;
        }
        else{
            console.log("Wrong command.Please try again.");
        }
    }
        
    }

    else if(act === 6){
            let tim = prompt("Bạn muốn tìm gì?");
            // if(list.includes(tim) === false){
            //     console.log("Sản phẩm bạn tìm không có trong danh sách");
            //     break;
            // }
            // else{
            //     loop === false;
            //     console.log(`STT\tContent`);
            //     list.forEach( () =>
            //     console.log(`${viTri+1}.\t${tim}  `))     
            // }
            var viTri ;
            for(let i = 0; i < list.length; i++){
                   if(tim.toLowerCase() === list[i].toLowerCase() )
                   {    
                    viTri = i;
                   }
                   else if(tim === list[i]){
                       viTri = i;
                   }
                   else if(tim === list[i].slice(1,tim.length)){
                       vitri = i;
                   }
   
}           
            console.log(`STT\tContent`),
            list.forEach( (item,index) =>
            console.log(`${viTri+1}.\t${list[viTri]}  `))     
}

    else if(act === 7){
    loop = false;
    console.log("You exited.");
}
    else{
        console.log("Wrong command. Please try again.");
    }
}

// document.getElementById()



// let person = {
//     name : "Tuan",
//     age : 20,

// }

// console.log(person);
// person.address = "HP"
// console.log(person)
// person.address = "HN"
// console.log(person)

//
 