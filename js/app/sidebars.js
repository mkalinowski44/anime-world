function Sidebar(page) {
   console.log('x');
   this.page = page;
   this.container = document.querySelector('.page-container.display-flex');

   if(this.page === 'left') {
      this.button = document.querySelector('.page-container.display-flex .hide-show-left');
   }
   if(this.page === 'right') {
      this.button = document.querySelector('.page-container.display-flex .hide-show-right');
   }

   this.buttonClick = function() {
      if(this.page === 'left') {
         if((" " + this.container.className + " ").replace(/[\n\t]/g, " ").indexOf(" expand-left ") > -1 ) {
            this.container.classList.remove('expand-left');
         } else {
            this.container.classList.add('expand-left');
            this.container.classList.remove('expand-right');
         }
      }
      if(this.page === 'right') {
         if((" " + this.container.className + " ").replace(/[\n\t]/g, " ").indexOf(" expand-right ") > -1 ) {
            this.container.classList.remove('expand-right');
         } else {
            this.container.classList.add('expand-right');
            this.container.classList.remove('expand-left');
         }
      }
   }.bind(this);

   this.init = function() {
      this.button.addEventListener('click', this.buttonClick);
   }.bind(this);

   this.init();
}

if($('.page-container.display-flex .left-col').length) {
   var leftSidebar = new Sidebar('left');
}
if($('.page-container.display-flex .right-col').length) {
   var rightSidebar = new Sidebar('right');
}