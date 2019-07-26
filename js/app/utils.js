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
         // console.log(this.currentScroll + this.windowHeight + " > " + this.elementPosition);

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
      this.scrollEvent();
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

function AnimeRate(element) {
   this.stars = document.querySelectorAll(element + " .stars i");
   this.savedStars = new Array();

   this.updateStars = function(e) {
      var rate = e.target.nthChild;
      for(var i = 0; i < rate; i++) {
         this.stars[i].innerHTML = 'star';
      }
      for(var i = 4; i >= rate; i--) {
         this.stars[i].innerHTML = 'star_border';
      }

   }.bind(this);

   this.resetStars = function() {
      for(var i = 0; i < 5; i++) {
         if(this.savedStars[i] === 1) {
            this.stars[i].innerHTML = 'star';
         } else {
            this.stars[i].innerHTML = 'star_border';
         }
      }

   }.bind(this);

   this.saveStars = function() {
      this.savedStars = new Array();
      for(var i = 0; i < this.stars.length; i++) {
         var rate = this.stars[i].innerText === 'star' ? 1 : 0;
         this.savedStars.push(rate);
      }
   }.bind(this);

   this.init = function() {
      this.saveStars();

      for(var i = 0; i < this.stars.length; i++) {
         this.stars[i].nthChild = i + 1;
         this.stars[i].addEventListener("mouseenter", this.updateStars);
         this.stars[i].addEventListener("mouseleave", this.resetStars);
         this.stars[i].addEventListener("click", this.saveStars);
      }
   }.bind(this);

   this.init();
}

if($('.anime-rate').length) {
   var rate = new AnimeRate('.anime-rate');
}