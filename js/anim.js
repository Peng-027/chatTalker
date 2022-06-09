// go-top
$('.go-top').click(function () {
  $('html,body').animate({
    'scrollTop': '0'
  }, 800)
});

// owl
$('.review-list').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 2
    },
    1201: {
      items: 3
    },
  }
})

// paid-plain
$('.pay-btn').on('click',function(){
  let resultA = 0;
  let resultB = 0;
  let temp = $(this).find('span').text();
  // console.log(temp);

  if(temp == 10000){
    resultA = 600;
    resultB = 1600;
  }else if(temp == 15000){
    resultA = 1000;
    resultB = 2000;
  }else if(temp == 20000){
    resultA = 1500;
    resultB = 2500;
  }else if(temp == 25000){
    resultA = 1800;
    resultB = 2800;
  }else{
    resultA = "優惠";
    resultB = "優惠";
  }
  
  $('.mon-payA').text(resultA);
  $('.mon-payB').text(resultB);
  $('.sub-num').text(temp);

})