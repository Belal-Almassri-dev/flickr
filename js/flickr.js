// JavaScript Document

(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON(flickerAPI, {
	  format: "json"
	})
	.done(function(data) {
		$.each(data.items, function(i, item) {
			var $append="";
			
			$append += "<div  class='small-12 medium-6 large-3 columns item'><div class='item_body'>";
			$append += "<img src=\"" + item.media.m + "\" class='main_img'/> <div class='clr'></div>";
			$append += "<p><a href=\"" + item.link + "\">" + item.title + "</a> ";
			$append += " by <a href=\"" + "https://www.flickr.com/people/" + item.author_id + "\">" + item.author + "</a></p>";
			if(item.tags != "") {
			$append += "Tags : " + item.tags + "";
			}
			$append += "</div></div>";
			$('#api_wrap').append($append);
		  }
		);
	  }
	);
})();
