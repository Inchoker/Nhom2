function getVideo(){
    let xhr = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=high%20trip%20drop&type=video&key=AIzaSyC25wlU4AKd7qLgIVmugro1ZWZYbjUm4ZI&fbclid=IwAR1qnautC1LOm8tNUtC1peKRzckeC9xnObcmMlR0Dj8X_xFdEfw87MzBbKo";
    xhr.open("GET", url);
    xhr.onreadystatechange = function(result){
        if(this.readyState === 4 && this.status === 200){
            let object = JSON.parse(this.responseText);
            console.log(object);
            let s = '';
            let total = '';
            for(let j = 0; j < object.items.length; j++){
                s = "https://www.youtube.com/embed/" + object.items[j].id.videoId;
                // s += `<img style="scroll-margin-left: 10px;" style="display: inline-flex;" src="` + object.items[j].snippet.thumbnails.medium.url + `">`;
                // s += object.items[j].snippet.thumbnails.medium.url;
                total += '<iframe width="250" height="200" src="' + s + '"></iframe>';
                // total += s;
            }
            // document.getElementById("video").innerHTML = total;
            document.getElementById("video").innerHTML = total;
        }   
    }
    xhr.send();
}
getVideo();