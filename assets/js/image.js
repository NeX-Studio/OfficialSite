$(document).ready(function(){
	var works = $("article.gallery").toArray();
	for(var i in works){
		var img = $(works[i]).find("img");
		$(img).css("margin-top",$(works[i]).height()/2-$(img).height()/2);
	}
});