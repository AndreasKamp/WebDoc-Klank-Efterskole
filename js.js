/*
 * fil: js.js
 * purpose: introdction to jQuery
 */
console.log('file: js/js.js loaded');
// A $( document ).ready() block.
$(document).ready(function () { // kører så snart DOM er klar
	console.log("jQuery 3.5.1 running. Alert level green.");
	// ... din kode herfra ...
var vid = document.getElementsByClassName("video2");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});

function hoverVideo(e)
{   
    this.play();
}
function hideVideo(e)
{
    this.pause();
}
    var vid = document.getElementsByClassName("uke");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', hideVideo, false);
});


	// ... din kode slut ...
}); // denne line må ikke slettes