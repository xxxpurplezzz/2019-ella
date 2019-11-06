// (function() {
// 	var now = 0;
// 	var gap = 20000;
// 	var speed = 500;
// 	var ani = function() {
// 		$(".banners").stop().animate({"top": (-750*now)+"px"}, 500, function(){
// 			if(now == 5) {
// 				now = 1;
// 				$(this).css({"top":0});
// 			}
// 			else now++;
// 		});
// 	}
// })();

(function() {
	var now = 0;
	var interval = setInterval(slide, 3000);
	function slide() {
		$(".banners").stop().animate({"top": (-380*now)+"px"}, 500, function(){
			if(now == 5) {
				now = 1;
				$(this).css({"top":0});
			}
			else now++;
		});
	}
})();