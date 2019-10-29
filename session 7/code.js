let result = [];


 
let object = {
    blank : "-",
    player: "P",
    exit: "E",
    key: "K"
}
 
let move = {
    up : "W",
    right: "D",
    left: "S",
    down: "A"
}
 
// function createMap(){
//     for(let i = 0; i < chieuDai; i++){
//         for(let j = 0; j < chieuRong; j++){
//             document.write("-");
//             a.push("-\t");
//         }
//         document.write("<br>");
//     }
//     b.push(a + "\n");
// }
 
 
function createMap(chieuDai,chieuRong){
    for(let i = 0; i < chieuDai; i++){
        let hang = [];
        for(let j = 0; j < chieuRong; j++){
            hang.push("-");
        }
        result.push(hang);
    }
    result[2][1] = object.player;
    result[1][2] = object.key;
    result[2][3] = object.exit;
 }

createMap(4,4);

console.log(result);

function moveUp(a,b){
    result(a - 1, b) = object.player
}
function moveDown(a,b){
    result(a + 1, b) = object.player
}
function moveLeft(a,b){
    result(a, b - 1) = object.player
}
function moveRight(a,b){
    result(a, b + 1) = object.player
}



let isExit = false;

while(!isExit){
    let input = prompt(`Your move?
                 \n Up:W 
                 \n Right:D
                 \n Left:A 
                 \n Down:S`);
 
   if(input === "W" ){
   moveUp(result);
   console.log(result);
}

    else if(input === "S"){
    moveDown(result);
    console.log(result);
}

    else if(input === "A"){
    moveLeft(result);
    console.log(result);
}

    else if(input === "D"){
    moveRight(result);
    console.log(result);
}
    else{
        isExit = true;
    }

}

       

