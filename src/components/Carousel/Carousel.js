import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Slider(){
    return(
      <div>
      <Carousel>
    <Carousel.Item>
    <img
      className=" d-block w-100 "
      src="https://identixweb.com/wp-content/uploads/2019/11/url-short-link-genrater.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <p>More Secure and Faster.</p>
    </Carousel.Caption>
  </Carousel.Item>


  
  </Carousel>
        </div>
    )
}
export default Slider;
