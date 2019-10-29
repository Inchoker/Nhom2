
// let question = {
//     'title': 'Nội dung câu hỏi 1',
//     'answer': [
//         {   
//           'content': 'Nội dung câu trả lời 1',
//           'isRight': false,
//         }
//     ],
//     'isMultipleChoose': false,

// }

// // let x = JSON.stringify(question);
// // // console.log(x)

// // let q = JSON.parse(x);
// // console.log(q);

// // SHIFT ALT F

// let json = `
//     [
//         {
//             "name": "iPhone X",
//             "price": 20e+6
//         },

//         {
//             "name": "Note 10",
//             "price": 14e+6
//         }
//     ]
// `
// // let a = JSON.stringify(json);
// // document.write(a);

// // console.log(json)
// let arr = JSON.parse(json);
// // console.log(arr)

// // document.getElementById("ten1").innerHTML = arr[0].name;
// // document.getElementById("gia1").innerHTML = arr[0].price;
// // document.getElementById("ten2").innerHTML = arr[1].name;
// // document.getElementById("gia2").innerHTML = arr[1].price;   

// let bodyTable = document.getElementById("data")

// let s  = '';

// for(let i = 0; i < arr.length; i ++){
//     const element = arr[i];
//     s += '<tr>'
//     s += '<td>' + (i + 1) + '</td>';
//     s += '<td>' + element.name + '</td>';
//     s += '<td>' + element.price + '</td>';
//     s += '<tr>'
// }

// bodyTable.innerHTML = s;

function getWeatherToDay(){
let xhr = new XMLHttpRequest();    
let url = "http://demo1167548.mockable.io/api/get-current-weather";

xhr.open("GET",url);

// Phương thức của AJAX: get post put

xhr.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);

        // let a = JSON.parse(this.responseText);
        // console.log(a);
        // console.log(a.temperature);
        // disPlayWeather(a.context)
        // disPlay(this.responseText);
        
    }
}

xhr.send();
}

function getWeatherAWeek(){
let xhr = new XMLHttpRequest();    
let url = "http://demo1167548.mockable.io/api/get-weather-of-week";

xhr.open("GET",url);

// Phương thức của AJAX: get post put

xhr.onreadystatechange = function () {
    if(this.readyState === 4 && this.status === 200){
        console.log(this.responseText);

        // let a = JSON.parse(this.responseText);
        // console.log(a);
        // console.log(a.date)
        // console.log(a.temperature,a.date);

    }
}

xhr.send();
}


function disPlayWeather(json){
    let weather = JSON.parse(json);
    if(weather.context !== "nice" || weather.context !== "normal"){
        document.getElementById("value").innerHTML = '<img src ="https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png" width ="100" height = "100">'
    }
    else{
        document.getElementById("value").innerHTML = '<img src = "https://image.flaticon.com/icons/svg/136/136723.svg" width ="100" height = "100">'
    }

    document.getElementById("date").innerHTML = weather.date;
    document.getElementById("temperature").innerHTML = weather.temperature + "&#176;C";
    
}




function disPlay(json){
    document.write(json);
}

