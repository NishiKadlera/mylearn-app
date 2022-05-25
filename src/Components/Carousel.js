import React from "react";
import carousel from '../assets/carousel.png'

function Carousel(){
    return(
        <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousel} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
    )
}
export default Carousel;