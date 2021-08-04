window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
  })