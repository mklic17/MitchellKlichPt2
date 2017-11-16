$('#mainPic').addClass('animated fadeIn');
$('#welcomeText').addClass('animated fadeInUp');
$('#welcomeTextSecond').addClass('animated fadeInUp');


$('document').ready(function() {
  $(this).scrollTop(0);
  $('a#entryButton').on('click', function(ev) {
    $('#nonScroll').removeAttr('id');


    var x = document.getElementById("myNav");
    // debugger
    // console.log(x)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
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

$(window).scroll(function() {
  var x = $('.green')
  // added a name to the span to try to grab it and loop to that as it's top
})


// Have the menu bar hidden when you first get to the page
