
$(document).ready(function() {
	var countdownClock = {
	time: 120,
	reset: function() {
		this.time = 120;
		$("#timer").html("Time Remaining: 02:00");
	},

	start:function(){
		counter = setInterval(countdownTimer.count, 1000);
	},

	stop:function(){
		clearInterval(counter);
	},

	count:function(){
		countdownClock.time--;
		var converted = countdownClock.timeConverter(countdownClock.time);
		$('#timer').html(converted);
	},

	timeConverter:function(t){
		var minutes = Math.floor(t/60);
		var seconds = t-(minutes*60);
		if(seconds<10){
			seconds = "0" + seconds;
		}
		if(minutes === 0){
			minutes = "00";
		}else if(minutes<10){
			minutes = "0" + minutes;
		}
		
		return minutes + ":" + seconds;
	}
}
};



		


