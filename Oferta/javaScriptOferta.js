//alert("conectatOferta");


function addSourceToVideo(element, src, type) {
    var source = document.createElement('source');

    source.src = src;
    source.type = type;

    element.appendChild(source);
}

var video = document.createElement('video');

//document.getElementById("interior").appendChild(video);


//addSourceToVideo(video, 'http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv', 'video/ogg');
addSourceToVideo(video, 'https://www.youtube.com/watch?v=q0hyYWKXF0Q', 'video');
document.body.appendChild(video);
//video.play();


var source1 = document.createElement('video');

source1.src="https://www.youtube.com/watch?v=q0hyYWKXF0Q";
source1.type = "video/ogg";

document.body.appendChild(video);


var video = document.createElement('video');

video.src = 'urlToVideo.ogg';
video.autoplay = true;

if (video.canPlayType('video/ogg').length > 0) {
    /* set some video source */
}


// incercare de a pune melodie

//document.getElementsByClassName("interior").innerHTML = '<audio id="audio-player" controls="controls" src="Smiley - Piesa de YouTube.mp3" type="audio/mpeg">';
document.getElementById("test").appendChild = '<audio id="audio-player" controls="controls" src="Smiley - Piesa de YouTube.mp3" type="audio/mpeg">';
//document.body.innerHTML = '<audio id="audio-player" controls="controls" src="Smiley - Piesa de YouTube.mp3" type="audio/mpeg">';

var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'Smiley - Piesa de YouTube.mp3';
sound.type     = 'audio/mpeg';
//document.getElementById("test").appendChild(sound);
document.body.appendChild(sound);