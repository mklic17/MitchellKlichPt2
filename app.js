$('#mainPic').addClass('animated fadeIn');
$('#welcomeText').addClass('animated fadeInUp');
$('#welcomeTextSecond').addClass('animated fadeInUp');


$('document').ready(function() {
  $(this).scrollTop(0);
  $('a#entryButton').on('click', function(ev) {
    $('#nonScroll').removeAttr('id');
    var x = document.getElementById("myNav");
    x.style.display = "block";
    if (this.hash !== "") {
      ev.preventDefault();
      var hash = this.hash;
    $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
  });
});

// Have the menu bar hidden when you first get to the page

// External code
