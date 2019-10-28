// let xhr = new XMLHttpRequest();
// let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=cover%20fingerstyle%20guitar&type=video&key=AIzaSyC25wlU4AKd7qLgIVmugro1ZWZYbjUm4ZI&fbclid=IwAR1qnautC1LOm8tNUtC1peKRzckeC9xnObcmMlR0Dj8X_xFdEfw87MzBbKo";
// xhr.open("GET", url);
// xhr.onreadystatechange = function(result){
//     if(this.readyState === 4 && this.status === 200){
//         let object = JSON.parse(this.responseText);
//         console.log(object);
//         let s = '';
//         let total = '';
//         for(let j = 0; j < object.items.length; j++){
//             s = "https://www.youtube.com/embed/" + object.items[j].id.videoId;
//             total += '<iframe width="250" height="200" src="' + s + '"></iframe>';
//         }
//         document.getElementById("video").innerHTML = total;
//     }
// }   
// xhr.send();

//Play youtube in modal style
$(document).ready(function() {

    // Gets the video src from the data-id on each img tag

    let $videoSrc;
    // $('.vungChon').click(function() {
    //     $videoSrc = $(this).data("id");
    // });
    // console.log($videoSrc);
    $(document).on('click', '.vungChon', function(){
        $videoSrc = $(this).data('id');
    });


    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
})
