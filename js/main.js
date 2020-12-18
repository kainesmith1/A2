{
var i = 0;
var images = []
var time = 3000;

images[0] = 'images/7.jpg';
images[1] = 'images/15.jpg';
images[2] = 'images/5.jpg';
images[3] = 'images/9.jpg';

function changeImg(){
	document.slideimg.src = images[i];
	
	if(i < images.length - 1){
		i++;
	} else {
		i = 0;
	}
	
	setTimeout("changeImg()", time);
	
}

window.onload = changeImg;
}

$("#submitbutton").click(function() {
	  document.getElementById("form1").reset();
   });

// var c = document.getElementById("homemessage");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World",10,50);
