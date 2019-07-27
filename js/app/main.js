// Materialzie
M.AutoInit();
// window scroll

function WindowScroll() {
   this.body = document.querySelector('body');
   this.isBlocked = false;

   this.disable = function() {
      if(this.isBlocked === false) {
         this.body.classList.add('no-scroll');
         this.isBlocked = true;
      }
   }.bind(this);

   this.enable = function() {
      if(this.isBlocked === true) {
         this.body.classList.remove('no-scroll');
         this.isBlocked = false;
      }
   }.bind(this);
}

var windowScroll = new WindowScroll();


document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.modal');
   var instances = M.Modal.init(elems, {
      onOpenStart: function() {
         document.querySelector('body').classList.add('no-scroll');
      },
      onCloseEnd: function() {
         document.querySelector('body').classList.remove('no-scroll');
      }
   });
});