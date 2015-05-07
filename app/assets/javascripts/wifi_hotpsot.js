$(document).ready(function() {

	$("video").on('timeupdate', function(event){	
		var currentTime = this.currentTime;
		var duration = this.duration;

		$(".current").text(currentTime);
		$(".length").text(duration);

		if(currentTime == duration){
			$("button").prop("disabled", false)
			$("a").css('pointer-events', 'auto');
		}
	});
});