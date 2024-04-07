var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1");
	video.autoplay=false;
	console.log("autoplay off")
	video.loop=false;
	console.log("video looping off off")

});
document.querySelector("#play").addEventListener("click",function(){
	console.log("play");
	video.play();

	//update the volume
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click",function(){
	console.log("pause");
	video.pause();
});

document.querySelector("#slower").addEventListener("click",function(){
	console.log("slower");
	//ten percent less everytime
	video.playbackRate*=0.9;
	console.log("new decreased speed is:", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("faster");
	video.playbackRate/=0.9;
	console.log("faster speed is:", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip");
	if(video.currentTime+10>video.duration){
		video.currentTime=0;
	}else{
		video.currentTime+=10;
	}
	console.log("The current time of the video is:", video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.mute){//if mute is on
		console.log("unmuted");
		video.mute=false;
		document.querySelector("#mute").innerHTML="Mute";//next time we click it will mute
	}else{
		console.log("mute");
		video.mute=true;
		document.querySelector("#mute").innerHTML="Unmute";//next time we click it will unmute
	}
	
});
document.querySelector("#slider").addEventListener("input", function(){
	console.log("sliderrr");
	video.volume=this.value/100;//slider
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("old school");
	video.classList.add("oldSchool");//add it

});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("original");
	video.classList.remove("oldSchool");

});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

