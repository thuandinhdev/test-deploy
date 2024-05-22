$(document).ready(function() {
    //     // Add smooth scrolling to all links

    const elm = document.querySelector('#sidebar');
    const ms = new MenuSpy(elm, {
        // menu selector
        menuItemSelector: 'a[href^="#"]',
        // CSS class for active item
        activeClass: 'active',
        // // amount of space between your menu and the next section to be activated.
        threshold: -700,
        // timeout to apply browser's hash location.
        hashTimeout: 500,
        // called every time a new menu item activates.
        callback: null

    });
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('#sidebar ul').each(function() {
        $('#sidebar ul li a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 300, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    var dropdown = document.getElementsByClassName("nav-dropdown");
    var i;

    for (i = 0; i < dropdown.length; i++) {
          dropdown[i].addEventListener("click", function() {
              this.classList.toggle("active");
              var dropdownContent = this.nextElementSibling;
              if (dropdownContent.style.display === "block") {
                  dropdownContent.style.display = "none";
              } else {
                  dropdownContent.style.display = "block";
              }
          });
    }
});