var list8 = []
getTrending();

function getTrending(t) {
    let xhr = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=8&regionCode=vn&key=AIzaSyCepC9SX6DixNi4cvc81jr266aaFxQfS2w"

    xhr.open("GET", url);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            showTrend(this.responseText);

        }
    }
    xhr.send();
}


function showTrend(json) {
    let trend = JSON.parse(json);
    let item = trend.items;

    for (let i = 0; i < item.length; i++) {
        let bai = item[i];
        let snippet = bai.snippet;
        let thumbnails = snippet.thumbnails;
        let defthumb = thumbnails.high;
        let url = defthumb.url;
        list8.push(url);
    }
    displayInfo();
}

let n = -1;

function displayInfo() {
    for (i = 100; i < 108; i++) {
        n += 1;
        let string = "" + i
        console.log(n)
        document.getElementById(string).src = list8[n];

    }

}