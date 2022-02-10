$(document).ready(function () {
  // $(this).scrollTop(0);
});

// alert(`screen width ${screen.width}`); // width of the screen
// alert(`inner width of the browser window ${window.outerWidth}`); // inner width of the browser window

function topArrow() {
  $(window).scrollTop(0);
}

function skills() {
  $("html, body").animate(
    {
      scrollTop: $("#ht").offset().top - 110,
    },
    "fast"
  );
}

function about() {
  $("html, body").animate(
    {
      scrollTop: $("#about-section").offset().top - 60,
    },
    "fast"
  );
}

function education() {
  if ($(window).width() < 1000) {
    $("html, body").animate(
      {
        scrollTop: $("#education-target").offset().top - 750,
      },
      "fast"
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $("#education-target").offset().top - 480,
      },
      "fast"
    );
  }
}

function work() {
  $("html, body").animate(
    {
      scrollTop: $("#wrks").offset().top - 100,
    },
    "fast"
  );
}

function contact() {
  $("html, body").animate(
    {
      scrollTop: $("#cnts").offset().top - 90,
    },
    "fast"
  );
}
