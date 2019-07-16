// Header parallax
function headerParallax(element, speed) {
   this.element = document.querySelector(element);
   this.speed = speed || 0.3;
   this.elementOffset = 0;

   this.scrollEvent = function() {
      var currentScroll = window.scrollY;

      if (this.elementOffset + window.outerHeight > currentScroll) {
         var offset = currentScroll * this.speed;
         this.element.style.transform = "translateY(" + offset + "px)";
         this.elementOffset = offset;
      }
   }.bind(this);

   this.start = function() {
      window.addEventListener("scroll", this.scrollEvent);
   };

   this.stop = function() {
      window.removeEventListener("scroll", this.scrollEvent);
   };

   this.start();
}

if($('.page-header').length) {
   var header = new headerParallax(".page-header", 0.25);
}
if($('.background-image').length) {
   var header2 = new headerParallax(".background-image", 0.25);
}
