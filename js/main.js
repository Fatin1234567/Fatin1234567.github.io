
var controller = new ScrollMagic.Controller();
var animateIn = new TimelineMax();

$(".project").each(function(){

    var picOverlay = $(this).find(".overlay");
    var projectInfo = $(this).find(".project-info");
    var smallTitle = $(this).find(".small-title");
    var projectLink = $(this).find(".project-link");
    var title = $(this).find("h4");

var animateIn = new TimelineMax();


animateIn
.fromTo(picOverlay,2,{skewX:30, scale:1.5},{skewX:0, xPercent:100,
transformOrigin:"0% 100%",ease: Power4.easeOut})

.from(projectInfo,1,{scaleY:0,transformOrigin:"bottom left"},
"-=1.5")

.from(smallTitle,0.2,{autoAlpha:0,y:30, ease: Power4.easeOut},"=-0.8")

.from(projectLink,0.3,{autoAlpha:0,y:30, ease: Power4.easeOut},"-=0.8")

.from(title,0.3,{autoAlpha:0,y:30, ease: Power4.easeOut},"-=0.8")

var scene = new ScrollMagic.Scene({
    triggerElement: this,
})

.setTween(animateIn).addTo(controller)

});