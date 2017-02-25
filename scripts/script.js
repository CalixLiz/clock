

function currentTime() {
	var d = new Date(),
	    hrs = d.getHours(),
	    min = d.getMinutes(),
	    sec = d.getSeconds()

	 if(min < 10) {
	 	min = '0' + min
	 }
	
		if(sec < 10) {
			sec = '0' + sec
		}

	 var clockNode = document.querySelector('.container')
	 clockNode.innerHTML =  hrs + ':' + min + ':' + sec

	 
	 var color = '#' + ((hrs * 3).toString(16)).slice(1) + min.toString(16) + (sec * 9).toString(16)
	 clockNode.style.background = color

}

currentTime()
setInterval(currentTime, 1000)
