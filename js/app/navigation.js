// Navigation
function Menu(navbar, menu, button, anchor, closeArea) {
   this.navbar = document.querySelector(navbar);this.menu = document.querySelector(menu);
   this.button = document.querySelector(button);
   this.anchor = document.querySelector(anchor);
   this.closeArea = document.querySelector(closeArea);
   this.isShow = false;
   this.anchorPosition = 0;
   this.currentScroll = 0;
   this.menuTimeout = null;


   this.showHideMenu = function() {
      if(this.isShow) {
         this.button.classList.remove('active');
         this.menu.classList.remove('expand');
         this.closeArea.classList.remove('active');
         windowScroll.enable();
         this.isShow = false;
      } else {
         this.button.classList.add('active');
         this.menu.classList.add('expand');
         this.closeArea.classList.add('active');
         windowScroll.disable();
         this.isShow = true;
      }
   }.bind(this);

   this.resizeEvent = function() {
      this.anchorPosition = getElementPosition(this.anchor);
   }.bind(this);

   this.isNavbarActive = function() {
      return this.navbar.classList.contains('active');
   }

   this.scrollEvent = function() {
      this.currentScroll = window.pageYOffset;

      if(this.currentScroll >= this.anchorPosition && !this.isNavbarActive()) {
         this.navbar.classList.add('active');
         this.menu.classList.add('hide-el');
         this.menu.classList.add('hide');
         this.button.classList.add('show-el');
         this.navbar.classList.add('fixed');

         clearInterval(this.menuTimeout);

         setTimeout(function() {
            this.menu.classList.remove('hide');
         }.bind(this), 310);
      }
      else if(this.currentScroll < this.anchorPosition && this.isNavbarActive()) {
         if(this.isShow) {
            this.showHideMenu();
         }

         this.navbar.classList.remove('active');
         this.menu.classList.remove('hide-el');
         this.button.classList.remove('show-el');
         this.menu.classList.remove('hide');

         this.menuTimeout = setTimeout(function() {
            this.navbar.classList.remove('fixed');
         }.bind(this), 310);
      }
   }.bind(this);

   this.init = function() {
      this.anchorPosition = getElementPosition(this.anchor);
      this.button.addEventListener('click', this.showHideMenu);
      this.closeArea.addEventListener('click', this.showHideMenu);
      window.addEventListener('resize', this.resizeEvent);
      window.addEventListener('scroll', this.scrollEvent);
   }.bind(this);

   this.init();
}

var menu = new Menu(
   '.nav-bar',
   '.nav-container',
   '.menu-hamburger',
   '.page-wrapper',
   '.nav-close-area'
);