(function() {
   var countersOptions = {
      separator: " "
   }

   var counters = [
      {element: "#counter1"},
      {element: "#counter2"},
      {element: "#counter3"},
      {element: "#counter4"}
   ];

   counters.forEach(function(el) {
      el.counter = new CountUp(
         el.element.slice(1),
         Number($(el.element).attr('data-value')),
         countersOptions
      );

      el.callback = function() {
         if(!el.counter.error) {
            el.counter.start();
         } else {
            console.error(el.counter.error);
         }
      }

      el.onShow = new onShowOnce(el.element, el.callback);
   });
})();

