//Höhe Anpassen
window.onload = function() {
       var headerHeight = $("#menu").height() + 15;
       document.getElementById("content").style.marginTop = headerHeight + 'px';
   }

//Aufklapper (expander) https://kswedberg.github.io/jquery-expander/
$('div.aufklapper').expander({
    slicePoint:       0,  // default is 100
    expandPrefix:     ' ', // default is '... '
    expandText:       '>> mehr lesen', // default is 'read more'
    userCollapseText: '<< schließen'  // default is 'read less'
  });

//Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      var headerHeight = $("#menu").height();
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight - 15
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          /* var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };*/
        });
      }
    }
  });
