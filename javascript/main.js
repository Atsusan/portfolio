'use strict'


// ハンバーガーメニュー



$('.btn-hamburger').click(function() {
  $('body').toggleClass('open');
});

$('.header-nav').click(function() {
  $('body').removeClass('open');
});

$('a[href^="#"]').click(function() {
  $('body').removeClass('open');
});

  // #から始まるURLがクリックされた時

$('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  const header = $(".header").innerHeight();
  const headerRepair = 700;
  const headerPad = 550;
  const headerSp = 400;

  // 移動速度を指定（ミリ秒）
  const speed = 300;

  // hrefで指定されたidを取得
  const id = $(this).attr("href");

  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  const target = $("#" == id ? "html" : id);

  // ページのトップを基準にターゲットの位置を取得からトップからの距離からヘッダー分の高さを引く

  var windowWidth = $(window).width();
  var windowPad =768;
  var windowSm = 510;
  if (windowWidth <= windowPad) {
  //横幅768px以下（スマホ）に適用させるJavaScriptを記述
    if(windowWidth <= windowSm) {
      let position = $(target).offset().top - header + headerSp;
      $("html, body").animate(
        {
            scrollTop: position
        },
        speed
        );
        return false;
    } else {
      let position = $(target).offset().top - header + headerPad;
      $("html, body").animate(
        {
            scrollTop: position
        },
        speed
        );
        return false;
    }

  } else {
  //横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
  let position = $(target).offset().top - header + headerRepair;
  $("html, body").animate(
    {
        scrollTop: position
    },
    speed
    );
    return false;
  }

  // ターゲットの位置までspeedの速度で移動



});

// Topへ戻る

$(function() {
  var pagetop = $('.floating');
  pagetop.hide();
  $(window).scroll(function() {
      if($(this).scrollTop() > 70) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function() {
      $('body, html').animate({scrollTop: 0}, 500);
      return false;
  });
});


// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 640px
    728: {
      spaceBetween: 40
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

// googleform
let $form = $('#js-form');
$form.submit(function(e) {
  $.ajax({
   url: $form.attr('action'),
   data: $form.serialize(),
   type: "POST",
   dataType: "xml",
   statusCode: {
      0: function() {
        //送信に成功したときの処理
        $form.slideUp();
        $('#js-success').slideDown();
      },
      200: function() {
        //送信に失敗したときの処理
        $('#js-error').slideDown();
      }
    }
  });
  return false;
});