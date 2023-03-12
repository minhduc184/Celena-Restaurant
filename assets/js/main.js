$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          300: {
            items: 1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
});





const API_URL_MAINITEMS = "https://celena-restaurant-api.vercel.app/main-item";
const URL = "https://celena-restaurant-api.vercel.app";
getMainItemAPI(API_URL_MAINITEMS)
async function getMainItemAPI(API_URL_MAINITEMS){
    const res = await axios.get(`${API_URL_MAINITEMS}`);
    const data = await res.data;


    showMainItem(data);
}




function showMainItem(data){
    let htmlCode =``;
    
    data.map(function(item){
        htmlCode+=`<div class="col-12 col-sm-4 col-md-4">
        <div class="logo">
          <div class="title">
            <p>${item.description}</p>
            <h3>${item.title}</h3>
          </div>
          <div class="detail">
            <p>FIND OUT MORE</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>`

      const content = document.querySelector('.main-item .row');
      content.innerHTML = htmlCode;
    });

}




