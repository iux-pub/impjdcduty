$(function () {
  menu();
  maintab();
  outlink();
  guidetab();
  guidetab2();

  $('.calendar').flatpickr({
    wrap: true,
    locale: 'ko',
    mode: 'range', // 기간 선택 모드
    dateFormat: 'Y년m월d일',
  });

  $('section.sub-content #sub-menu li.on a').on('click', function (e) {
    $('nav#sub-menu').toggleClass('active');
    e.preventDefault();
  });

  $(window).on('resize', function () {
    $('nav#main-menu h3 a').unbind();
    menu();
  });

  $('div.find-form').last().hide();

  var radioContent = $('div.find-form');

  $("div.find-type input[type='radio']").click(function () {
    radioContent.hide();
    radioContent.eq($("input[type='radio']").index(this)).show();
  });

  $('.sign-modal').on('click', function () {
    $('.modal').addClass('on');
  });

  $('.modal-content .close').on('click', function () {
    $('.modal').removeClass('on');
  });
});

/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on('resize', function () {
  windowh = $(window).height();
  windowW = $(window).width();
});

/* ----- menu ----- */
function menu() {
  $('button.main-menu').on('click', function () {
    $('nav#main-menu').addClass('active');
  });

  $('nav#main-menu button.close').on('click', function () {
    $('nav#main-menu').removeClass('active');
  });

  $(document).ready(function () {
    var $header = $('header');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $header.addClass('scrolled');
      } else {
        $header.removeClass('scrolled');
      }
    });
  });
}

/* ----- main tab ----- */
function maintab() {
  $('.main-content .news h3').on('click', function () {
    $('.main-content .news h3').removeClass('active');
    $(this).addClass('active');

    $('.main-content .news .tab-data').removeClass('active');

    $('.main-content .news .' + $(this).attr('data') + '').addClass('active');
  });
}

/* ----- outlink ----- */
function outlink() {
  $('.agency-open').click(function () {
    console.log('클릭');
    $(this).toggleClass('on');
  });
}

function guidetab() {
  $('.select-btn .tab01').on('click', function () {
    $('.select-btn button').removeClass('active');
    $(this).addClass('active');

    $('.guide-box').removeClass('active');

    $('.guidetab01').addClass('active');
  });
}
function guidetab2() {
  $('.select-btn .tab02').on('click', function () {
    $('.select-btn button').removeClass('active');
    $(this).addClass('active');

    $('.guide-box').removeClass('active');

    $('.guidetab02').addClass('active');
  });
}
