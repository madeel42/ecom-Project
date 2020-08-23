import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import freeDelivey from './assets/freeDelivey.png'
import giftVoucher from './assets/giftVoucher.jpg'
import classes from './slick.module.css'
import './slickcustom.css'

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider className={classes.slick} {...settings}>
          <div>
         <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
          </div>
          <div >
          <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
         {/* <img className={classes.giftVoucher} src={giftVoucher} alt=""/> */}
          </div>
          <div >
          <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
          </div>
          <div >
          <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
          </div>
          <div >
          <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
          </div>
          <div >
          <img className={classes.freeDelivery} src={freeDelivey} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}