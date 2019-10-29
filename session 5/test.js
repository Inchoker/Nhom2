list = ["Java","C","Html"];
let nhap = prompt("Enter something");

console.log(list);
for(let i = 0; i < list.length; i++){
    if(nhap.toLowerCase() === list[i].toLowerCase() )
    {   var viTri = i;
        console.log("Suitable");
    }
}
console.log(list[viTri]);
