

// --- Slider --- //
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

// --- API-Main --- //
const API_URL_APPERTIZER = "https://celena-restaurant-api.vercel.app/appertizer-menu/";
const URL = "https://celena-restaurant-api.vercel.app";


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

getMainItemAPI(API_URL_APPERTIZER)

async function getMainItemAPI(API_URL_APPERTIZER){
    const res = await axios.get(`${API_URL_APPERTIZER}`);
    const data = await res.data;


    

    showMainItem(data);
}

function showMainItem(data){
    let htmlCode =``;
    const IMG = 'https://celena-restaurant-api.vercel.app/'
    data.map(function(item){
    htmlCode+=
    `<div class="col-12 col-sm-12 col-md-6">
    <div class="item-menu">
      <div class="logo-menu">
        <img src="${IMG + item.image}" alt="">
      </div>
      <div class="description-menu">
        <div class="name-menu">
          <h1>${item.title}</h1>
        </div>
        <div class="descrip-menu">
          <p>${item.description}</p> 
        </div>
        <div class="price-menu">
          <p>${item.price}</p>
        </div>
      </div>
    
    </div>
      
  </div>`

    const content = document.querySelector('.main .row');
    content.innerHTML = htmlCode;
    });
}