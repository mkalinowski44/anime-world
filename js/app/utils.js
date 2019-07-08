// Utils
function findParent(object, find) {
   if (object == find) {
      return true;
   }

   if (object == window || !object.offsetParent) {
      return false;
   }

   return findParent(object.offsetParent, find);
}

function getElementPosition(element) {
   var bodyRect = document.body.getBoundingClientRect();
   var elemRect = element.getBoundingClientRect();
   return elemRect.top - bodyRect.top;
}

function onShowOnce(element, callback) {
   this.callback = callback;
   this.element = document.querySelector(element);
   this.currentScroll = 0;
   this.elementPosition = getElementPosition(this.element);
   this.elementHeight = this.element.offsetHeight;
   this.isShow = false;
   this.windowHeight = window.outerHeight;

   this.scrollEvent = function() {
      if(!this.isShow) {
         this.currentScroll = window.pageYOffset;


         if(
            this.currentScroll + this.windowHeight > this.elementPosition &&
            this.currentScroll < this.elementPosition + this.elementHeight
         ) {
            this.callback();
            this.isShow = true;
            this.stop();
         }
      }
   }.bind(this);

   this.resizeEvent = function() {
      this.elementHeight = this.element.offsetHeight;
      this.windowHeight = window.outerHeight;
      this.elementPosition = getElementPosition(this.element);
   }.bind(this);

   this.start = function() {
      this.resizeEvent();

      window.addEventListener('resize', this.resizeEvent);
      window.addEventListener('scroll', this.scrollEvent);
   }.bind(this);

   this.stop = function() {
      window.removeEventListener('resize', this.resizeEvent);
      window.removeEventListener('scroll', this.scrollEvent);
   }.bind(this);

   this.start();
}