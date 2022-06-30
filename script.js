
const swiper = new Swiper(".mySwiper", {
    lazy: true,
    observer: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
//  Controling duplicates
// document.querySelectorAll('.swiper-slide').forEach(slide=>{
//     slide.addEventListener("transitionend",()=>console.log('transition ended'))
// })
document.querySelector('.swiper-wrapper').addEventListener('transitionend', function(){
    if(swiper.activeIndex == 4 ){
        swiper.slideTo(0, 0)
    } 
})
//   swiper.on('slideChange', function(){
//     console.log(this.activeIndex)
    
//     if(swiper.activeIndex == 4 ){
//         console.log(document.querySelector('[data-swiper-slide-index = "3"]'))
//         // swiper.slideTo(0, 0)
//     }  
//   })


/*      Charts init     */
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
  
    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        maintainAspectRatio:false
      }
    
    };
    const configBubble = {
      type: 'bubble',
      data: {
  datasets: [{
    label: 'First Dataset',
    data: [{
      x: 20,
      y: 30,
      r: 15
    }, {
      x: 40,
      y: 20,
      r: 10
    }, {
        x: 15,
        y: 10,
        r: 5
      }
],
    backgroundColor: 'rgb(120, 50, 130)',
  }]
},
      options: {
        maintainAspectRatio:false
      }
    }
  
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    const anotherChart = new Chart(
      document.getElementById('anotherChart'),
      config
    );
    const bubbleChart = new Chart(
      document.getElementById('bubbleChart'),
      configBubble
    );
