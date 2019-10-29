// console.log("Hello");

// let age = 5;

// if(age < 18 )
// {
//  console.log("Vị thành niên");
// }
// else if (age <25)
//  {
//      console.log("Đủ tuổi cưới vợ :v");
//  }
//  else 
//  {
//      console.log("Lấy vợ đi");
//  }


let a = Number(prompt("Nhap a"));
let b = Number(prompt("Nhap b"));
let c = Number(prompt("Nhap c"));

let result = "Khong co gi ca";

if ( a === 0)
{
    
     if ( b === 0)
     {
         if ( c === 0)
         {
              result = "Phuong trinh co vo so nghiem";
         }
         else { result = "Phuong trinh vo nghiem";
              }
     }   
     else  {
            result = `Phuong trinh co mot nghiem = " + ${-c/b} ` ;
           }
}
// else { let delta = b**2 - 4*a*c;
//        if (delta > 0)
//       {
//        console.log("Phuong trinh co 2 nghiem: "
//        ,"Nghiem 1 =" + ( ( (-b) - Math.sqrt(delta) ) / (2*a) ) 
//        ,"Nghiem 2 =" + ( ( (-b) + Math.sqrt(delta) ) / (2*a) )
//                   );
//       }
//      else 
//           { if ( (delta) == 0)
//               {
//                 console.log("Phuong trinh co mot nghiem kep = " + (-b) /  (2*a) );
//               }
//            else console.log("Phuong trinh vo nghiem");
                
//           }
//      }

else 
{
    let delta = b**2 - 4*a*c;
    if (delta > 0)
    {
        nghiem1 = (-b - Math.sqrt(delta) ) / (2*a);
        nghiem2 = (-b + Math.sqrt(delta) ) / (2*a);
        result = `Phuong trinh co 2 nghiem phan biet: ${nghiem1} va ${nghiem2}`

    }
    else {
        if (delta < 0)
             { 
             result = "Phuong trinh vo nghiem";
             }
        else result = `Phuong trinh co 1 nghiem kep la : ${ -b / (2*a) } `
         } 
}

console.log(result);


//Số nguyên tố
let du = 0;
let number = Number(prompt("Moi ban nhap vao so"));
if (number === 1)
{
    console.log("Khong phai so nguyen to");
}
if (number === 2)
{
    console.log("Day la so nguyen to");
}

for (let i=2; i < number ; i++)
{
    if ( (number%i) === 0 )
    {
        du = du + 1;
    }

}
if (du === 0)
{
    console.log("Day la so nguyen to");
}
else console.log("Day khong phai la so nguyen to");
// n= 1 => k phair
// n =  2 => SNT


    