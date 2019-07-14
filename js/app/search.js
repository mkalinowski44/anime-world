// Search
function searchController(form, options) {
   if(!options) options = {};
   this.hideOn = options.hideOn || null;
   this.scrollTo = options.scrollTo || null;
   this.bindEl = options.bindEl ? document.querySelector(options.bindEl + ' input') : null;
   this.formEl = document.querySelector(form);
   this.inputEl = document.querySelector(form + ' *[data-search="input"]');
   this.resetEl = document.querySelector(form + ' *[data-search="reset"]');
   this.dropdownEl = document.querySelector(
      form + ' *[data-search="dropdown"]'
   );
   this.isShow = false;

   this.changeEvent = function() {
      if(this.bindEl) {
         this.bindEl.value = this.inputEl.value;
      }

      if (this.inputEl.value !== "") {
         this.resetEl.classList.remove("hide-el");
         this.dropdownEl.classList.add("expand");
         this.isShow = true;

         if(this.scrollTo) {
            window.scroll({
               top: this.scrollTo,
               left: 0,
               behavior: 'smooth'
            });
         }
      } else {
         this.resetEl.classList.add("hide-el");
         this.dropdownEl.classList.remove("expand");
         this.isShow = false;
      }
   }.bind(this);

   this.focusEvent = function() {
      if (this.inputEl.value !== "") {
         this.dropdownEl.classList.add("expand");
         this.resetEl.classList.remove('hide-el');
         this.isShow = true;

         if(this.scrollTo) {
            window.scroll({
               top: this.scrollTo,
               left: 0,
               behavior: 'smooth'
            });
         }
      } else {
         this.resetEl.classList.add('hide-el');
      }
   }.bind(this);

   this.blurEvent = function(e) {
      if (e.relatedTarget && findParent(e.relatedTarget, this.dropdownEl)) {
         this.inputEl.focus();
      } else {
         this.dropdownEl.classList.remove("expand");
         this.isShow = false;
      }
   }.bind(this);

   this.scrollEvent = function() {
      if(this.hideOn) {
         var currentScroll = window.pageYOffset;
         var hideOn = this.hideOn.split(' ');
         var hideOn = {
            direction: hideOn[0],
            value: Number(hideOn[1])
         }

         if(this.isShow) {
            var event = new Event('blur');

            if(hideOn.direction === '<') {
               if(hideOn.value < currentScroll) {
                  this.inputEl.dispatchEvent(event);
               }
            }
            if(hideOn.direction === '>') {
               if(hideOn.value > currentScroll) {
                  this.inputEl.dispatchEvent(event);
               }
            }
         }
      }
   }.bind(this);

   this.inputEl.addEventListener("keyup", this.changeEvent);
   this.inputEl.addEventListener("focus", this.focusEvent);
   this.inputEl.addEventListener("blur", this.blurEvent);
   window.addEventListener('scroll', this.scrollEvent);

   this.resetEl.addEventListener(
      "click",
      function() {
         this.inputEl.value = "";
         if(this.bindEl) {
            this.bindEl.value = this.inputEl.value;
         }
         this.resetEl.classList.add("hide-el");
      }.bind(this)
   );
}

var pageContainer = document.querySelector('.page-wrapper');
var pageContainerPosition = getElementPosition(pageContainer);
var search = new searchController(
   "#search-form",
   {
      hideOn: '< ' + pageContainerPosition,
      bindEl: '#nav-search-form',
      scrollTo: pageContainerPosition - 100
   }
);
var search2 = new searchController(
   "#nav-search-form",
   {
      hideOn: '> ' + pageContainerPosition,
      bindEl: '#search-form'
   }
);
