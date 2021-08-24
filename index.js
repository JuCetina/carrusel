window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: false, //If true, Glider.js will scroll to the nearest slide after any scroll interactions
        draggable: false, //If true, the list can be scrolled by click and dragging with the mouse
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            // screens greater than >= 480px
            breakpoint: 480,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            // screens greater than >= 768px
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            // screens greater than >= 1200px
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          }
        ]
    })
  })