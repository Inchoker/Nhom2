function layTenBrowser(){
    let a = "Browser Name : " + navigator.appCodeName;
    document.getElementById("test").innerHTML = a;
}

function changeColor(a) {
    a.style.color = "blue";
}

function defaultColor(a) {
    a.style.color = "black";
}
