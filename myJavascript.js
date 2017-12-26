var audio;
var playlist;
var tracks;
var current;
var audio; // = document.getElementById("mySong"); 
var myBody;
var bgList;
var bgIndex;
var numOfImages;


$( document ).ready(function() {
    console.log( "ready!" );
});

init();
function init(){
    bgList = new Array ("url('images/fireplace01.gif')", "url('images/fireplace02.gif')", 
                        "url('images/white01.jpg')", "url('images/white02.jpg')");
    bgIndex = 0;
    numOfImages = 4;

    current = 0;
    audio = $('audio');
    audio[0].play();
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .20;

    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });

    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });

}

function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();

}


/*
function playSong() { 
    audio.play(); 
} 

function pauseSong() { 
    audio.pause(); 
} 

function nextSong(){
    var tempFlag = audio.paused;
    audio.src = "http://www.archive.org/download/MoonlightSonata_755/Beethoven-MoonlightSonata.mp3";

    if(tempFlag==false)
    {
        audio.play();
        
    }

}
*/

function nextImage(){
    myBody = $('body');
    bgIndex = bgIndex + 1;
    document.body.style.backgroundImage = bgList[bgIndex % numOfImages];
}

function hidePlayer(){
    document.getElementById("mySong").style.visibility =  "hidden";
    document.getElementById("playlist").style.visibility =  "hidden";
    document.getElementById("hidePlayer").style.visibility =  "hidden";
    document.getElementById("showPlayer").style.visibility =  "visible";
}

function showPlayer(){
    document.getElementById("mySong").style.visibility =  "visible";
    document.getElementById("playlist").style.visibility =  "visible";
    document.getElementById("hidePlayer").style.visibility =  "visible";
    document.getElementById("showPlayer").style.visibility =  "hidden";
}

