// luminous//
new LuminousGallery(document.querySelectorAll(".luminous"));

// Safari以外にクラス付与

document.addEventListener('DOMContentLoaded', () => {
  const elm = document.querySelector('.mv-img')
  const agent = window.navigator.userAgent.toLowerCase()

  if (agent.indexOf("msie") != -1 || agent.indexOf("trident") != -1) {

    } else if (agent.indexOf("edg") != -1 || agent.indexOf("edge") != -1) {
    } else if (agent.indexOf("opr") != -1 || agent.indexOf("opera") != -1) {
    } else if (agent.indexOf("chrome") != -1) {
      elm.classList.add('notSafari')
      console.log(elm)
    }
})

// スムーススクロール

$('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    const header = $(".header").innerHeight();

    // 移動速度を指定（ミリ秒）
    const speed = 300;

    // hrefで指定されたidを取得
    const id = $(this).attr("href");

    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    const target = $("#" == id ? "html" : id);

    // ページのトップを基準にターゲットの位置を取得からトップからの距離からヘッダー分の高さを引く
    const position = $(target).offset().top - header;

    // ターゲットの位置までspeedの速度で移動

    $("html, body").animate(
    {
        scrollTop: position
    },
    speed
    );
    return false;

});

// ハンバーガーメニュー実装

jQuery(".js-openbtn").click(function () {
  //
  jQuery(this).toggleClass("active"); // ボタン自身にactiveクラスを付与
  jQuery("#js-g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

jQuery("#js-g-nav a").click(function () {
  jQuery(".js-openbtn").removeClass("active"); //ボタンのactiveクラスを削除
  jQuery("#js-g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを削除
});

jQuery("#js-g-nav").click(function () {
  // 背面をクリックしたら解除する処置
  jQuery(".js-openbtn").removeClass("active");
  jQuery("#js-g-nav").removeClass("panelactive");
});

// MVアニメーション
const titleElement = document.querySelector(".mv-read"),
  titleTexts = titleElement.textContent.split("");

titleElement.textContent = "";

let outputTexts = "";

titleTexts.forEach(
  (text) => (outputTexts += text === " " ? " " : `<span>${text}</span>`)
);
titleElement.innerHTML = outputTexts;

const target = ".mv-read span";

document.querySelectorAll(target).forEach((el) => {
  gsap.set(el, {
    x: "random(-200, 200)",
    y: "random(-200, 200)",
    rotationX: "random(-90, 90)",
    rotationY: "random(-90, 90)",
    rotationZ: "random(-90, 90)",
    opacity: 0,
    color: `hsl(${gsap.utils.random(0, 360, 1)}, 90% , 60%)`,
  });
});

const tl = gsap.timeline();

tl.to(target, 3, {
  opacity: 1,
  rotation: 0,
  x: 0,
  y: 0,
  rotationX: 0,
  rotationY: 0,
  rotationZ: 0,

  ease: "power2.out",
  stagger: {
    amount: 1,
    from: "center",
  },
})
  .to(
    target,
    3,
    {
      color: "#fff",

      ease: "sine.out",
      stagger: {
        amount: 1,
        from: "center",
      },
    },
    "<"
  )
  .to(
    target,
    1.5,
    {
      opacity: 1,

      ease: "power3.in",
      stagger: {
        amount: 1.2,
        from: "edges",
      },
    },
    "+=.2"
  );

// bar

window.addEventListener("DOMContentLoaded", () => {
  // DOM要素を取得
  const skillEls = document.querySelectorAll(".js-skill");

  // カウントアップの設定
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOut = (t) => t * (2 - t);
  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  // Intersection observerに渡すコールバック関数
  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const proficiencyVal = entry.target.dataset.proficiency;
        const skillBar = entry.target.querySelector(".skill-bar");
        const percentage = entry.target.querySelector(".skill-percentage");
        const countup = entry.target.querySelector(".countup");

        skillBar.style.width = proficiencyVal + "%";
        percentage.style.opacity = 1;
        countup.textContent = proficiencyVal;
        animateCountUp(countup);

        observer.unobserve(entry.target);
      }
    });
  };

  // Intersection observerに渡すオプション
  const options = {
    rootMargin: "-50px 0px",
  };

  // IntersectionObserver初期化
  const io = new IntersectionObserver(cb, options);
  io.POLL_INTERVAL = 100; // Polyfillの設定
  skillEls.forEach((el) => {
    io.observe(el);
  });
});

// Topへ戻る

$(function () {
  var pagetop = $(".floating");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// gsap アニメーション
const items = document.querySelectorAll('.animation01');

items.forEach((el) => {
  gsap.from(el, 0.5, {
    opacity: 0,
    y: 20,
    scrollTrigger: {
      trigger: el,
      start: "top center",
      stagger: .1
    },
  });
});