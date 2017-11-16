// $('#mainPic').addClass('animated fadeIn');
// $('#welcomeText').addClass('animated fadeInUp');
// $('#welcomeTextSecond').addClass('animated fadeInUp');
//
//
// $('document').ready(function() {
//   $(this).scrollTop(0);
//   $('a#entryButton').on('click', function(ev) {
//     $('#nonScroll').removeAttr('id');
//
//
//     var x = document.getElementById("myNav");
//     // debugger
//     // console.log(x)
//     if (x.style.display  === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//     if (this.hash !== "") {
//       ev.preventDefault();
//       var hash = this.hash;
//     $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function() {
//           window.location.hash = hash;
//         });
//       }
//   });
// });
//
// $(window).scroll(function() {
//   var x = $('.green')
//   // added a name to the span to try to grab it and loop to that as it's top
// })
//
//
// // Have the menu bar hidden when you first get to the page
$(document).foundation()

// $(window).ready(function() {
//     var x = $("#contactLinks");
//     setTimeout(function() {
//         x.addClass("animated rollin");
//     }, 350);
// });

$('.contactMe').on('click', function(ev){
  ev.preventDefaults;
  window.location.href = 'mailto:klich_mitchell@yahoo.com?subject=Contact&=Hello,';
});

$(window).scroll(function () {
  var x = $(".containClass");
  var xspot = x.offset().top - window.innerHeight;

  var left = $(".fix");
  var leftSpot = left.offset().top - window.innerHeight;

  var studyA = $(".intro3");
  var studySpot = studyA.offset().top - window.innerHeight;

  var scrollh = $(this).scrollTop();
  if (scrollh == 0) {
      $(".navbar").css({
          'height':'75px',
          'font-size': '1.75em',
          'color': '#87d37c',
          'transition': 'all .1s ease-in-out'
      });
  } else {
      $(".navbar").css({
          'height':'50px',
          'font-size': '1.0em',
      });
    }

  if (scrollh > xspot) {
    $(".containEducation").addClass("animated zoomIn").removeClass("hide");
  }

  if (scrollh > leftSpot) {
    setTimeout(function() {
      $(".leftEntry").addClass("animated bounceInLeft classEntrance");
      $(".rightEntry").addClass("animated bounceInRight classEntrance");
    }, 300);
  }

  if (scrollh > studySpot) {
    setTimeout(function() {
      $(".trips").addClass("animated fadeInUp").removeClass("hide");
    }, 500);
  }

});

$(".timeline-item").hover(function () {
    $(".timeline-item").removeClass("active");
    $(this).toggleClass("active");
    $(this).prev(".timeline-item").toggleClass("close");
    $(this).next(".timeline-item").toggleClass("close");
});
