(function (window) {

	var GoodByeSpeaker = {};
	var speakWord = "Good Bye";

	GoodByeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.byeSpeaker = GoodByeSpeaker;

})(window);