// window onload
// window resize
let activeDesc = $(".faqs_panel.faqs_active .faqs_desc");
activeDesc.height(activeDesc.prop("scrollHeight") + "px");

$(".faqs_label").on("click", function() {
  if (!$(this).parent().hasClass("faqs_active")) {
    $(".faqs_panel").removeClass("faqs_active");
    $(".faqs_desc").height(0);
    $(this).parent().addClass("faqs_active");
    let desc = $(this).parent().find(".faqs_desc");
    desc.height(desc.prop("scrollHeight") + "px");
  } else {
    $(this).parent().removeClass("faqs_active");
    $(".faqs_desc").height(0);
  }
});

// preloader

// custom cursor

$(function() {
  // header effect on scroll
  var prevScrollTop = 0;

  $(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    // console.log(scrollTop);

    if (scrollTop > 0) {
      $(".header").addClass("scroll");
    }
    // scroll up and down effect
    if (scrollTop > 103) {
      if (scrollTop > prevScrollTop) {
        $(".header").addClass("scroll_down");
        $(".header").removeClass("scroll_up");
      } else {
        $(".header").addClass("scroll_up");
        $(".header").removeClass("scroll_down");
      }
      prevScrollTop = scrollTop;
    }

    if (scrollTop <= 0) {
      $(".header").removeClass("scroll");
      $(".header").removeClass("scroll_down");
      $(".header").removeClass("scroll_up");
    }
  });

  // follower scroll effect
  var follower = document.getElementById("follower");
  var baseFollower = document.getElementById("baseFollower");
  var follower_val = {
    height: 0,
    bottom: 0
  };

  baseFollower.style.height = "100%";

  $(window).on("scroll", function() {
    if (!follower_val.bottom) {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.body.scrollHeight;
      let innerHeight = window.innerHeight;

      let parcentFollower =
        (100 * scrollTop) / (scrollHeight - innerHeight) +
        (innerHeight / scrollHeight) * 100;

      (follower.style.height = "".concat(parcentFollower, "%")),
      (follower_val.height = parcentFollower),
      follower_val.height > 99 && (follower_val.bottom = 1);
    }
  });

  $(".bannar_scrolldown").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 680,
      },
      500
    );
  });

  $(".property .big_img .scroll").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: window.innerHeight,
      },
      500
    );
  });
});

// buttons

// menu
$(function() {
  $("#hamburger").on("click", function(event) {
    event.preventDefault();
    openSideMenu();
  });
  const openSideMenu = () => {
    $("#sidemenu").addClass("show");
  };

  $(".sidemenu_close_btn").on("click", function(event) {
    event.preventDefault();
    closeSideMenu();
  });
  const closeSideMenu = () => {
    $("#sidemenu").removeClass("show");
  };
});

// modals

// primary slider
// $(function () {
//   $(".header").addClass("scroll");
//   $(".header").addClass("scroll_down");
//   $(".header").addClass("scroll_up");
// });
//# sourceMappingURL=script.js.map
