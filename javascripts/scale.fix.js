var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

function strpos (haystack, needle, offset) {
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}

$(function(){
	var date = new Date();
	date = date.getTime();
    $("a").each(function() {
		if(strpos(this.href, "mediafire.com") == false){
			if(strpos(this.href, "?") != false){
				$(this).attr("href", this.href + "&" + date);
			}else{
				$(this).attr("href", this.href + "?" + date);
			}
		}
    });
});