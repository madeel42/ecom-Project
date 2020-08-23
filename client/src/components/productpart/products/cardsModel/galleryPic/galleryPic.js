import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./styles.css";
import { ArrowRightOutlined,ArrowLeftOutlined,MinusOutlined  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./custom.css"
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import MaximizeIcon from "@material-ui/icons/Maximize";
class Carousels extends Component {
  state = {
    activeSilde: 0,
    itm:null
  };

  handleSlideSelect = () => {};

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
      return (
        <li
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        >
          {/* <MinusOutlined /> */}
      <li className="imgDiv"><img src={this.props.modelItem} alt=""/></li>
      {/* <img src={this.props.modelItem} alt=""/> */}
        </li>
      );
    };

    const arrowStyle = {
      background: "transparent",
      border: 0,
      color: "#fff",
      fontSize: "80px"
    };
    const CustomRight = ({ onClick }) => (
      <button className="arrow right" onClick={onClick} style={arrowStyle}>
        <ArrowRightOutlined  style={{ fontSize: "21px" }} />
      </button>
    );
    const CustomLeft = ({ onClick }) => (
      <button className="arrow left" onClick={onClick} style={arrowStyle}>
        <ArrowLeftOutlined  style={{ fontSize: "21px" }} />
      </button>
    );
    //Also please improve the dot problem
    // Here we used number to just know click event buthelp us with ui too

    return (
      // <!-- Main Carousel Section Start -->
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            // focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            showDots
            sliderClass=""
            // slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
          >
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                // src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                src={this.props.modelItem}
                alt="First slide"
              />
            </div>
            <div className="carousel-item active ">
              <img
                className="d-block w-100"
               src={this.props.modelItem}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={this.props.modelItem}
                alt="Third slide"
              />
            </div>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={this.props.modelItem}
                alt="forth slide"
              />
            </div>
          </Carousel>
        </div>
      </div>
      /* <!-- Main Carousel Section End --> */
    );
  }
}

export default Carousels;


// import React from 'react'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import classes from './gallery.module.css'
// import { useState } from 'react';
//   const arrowStyle = {
//     background: "transparent",
//     border: 0,
//     color: "#fff",
//     fontSize: "80px"
//   };
// const CustomDotCArosel = (props) => {
//   const [active,setactive] = useState(false)
//   const handleSelect = () => {
//     setactive(true)
//   }
//   console.log(props,"kf")
//   const {modelItem} = props;
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     }
//   };

//   const CustomDot = ({ onMove, index, onClick, active }) => {
//     return (
//       <li
//         className={active ? "active" : "inactive"}
//         onClick={() => onClick()}
//         style={{display:"flex",}}
//       >
//         <div><button>x</button></div>
//         <div><button>u</button></div>
//         {/* <MaximizeIcon /> */}
//       </li>
//     );
//   };

//   const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//     const {
//         carouselState: { currentSlide }
//     } = rest;
//     return (
//         <div className="carousel-button-group">
//             <div
//                 className={currentSlide === 0 ? "disable" : ""}
//                 onClick={() => previous()}
//             >
//                 m
//                 </div>
//             <div onClick={() => next()}>Next</div>
//             <div onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </div>

//         </div>
//     );
// };
  
//   const CustomRight = ({ onClick }) => (
//     <button className={`${classes.arrow} ${classes.right}`} onClick={onClick} style={arrowStyle}>
//      wdwd
//     </button>
//   );
//   const CustomLeft = ({ onClick }) => (
//     <button className={`${classes.arrow} ${classes.left}`} onClick={onClick} style={arrowStyle}>
//       back
//     </button>
//   );
// // const customDo
//   return  <Carousel
//     swipeable={true}
//     draggable={true}
//     showDots={true}
//     sliderClass=""
//     slidesToSlide={1}
//     responsive={responsive}
//     keyBoardControl
//     minimumTouchDrag={80}
//     additionalTransfrom={0}
//     arrows={true}
//     // ssr={true} // means to render carousel on server-side.
//     infinite={true}
    
//     // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//     // autoPlaySpeed={1000}
//     keyBoardControl={true}
//     customTransition="all .5"
//     transitionDuration={500}
//     containerClass="carousel-container"
//     removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//     // deviceType={this.props.deviceType}
//     dotListClass="custom-dot-list-style"
//     itemClass="carousel-item-padding-40-px"
//   // customButtonGroup={<ButtonGroup />}
//     customDot={<CustomDot />}
//     customRightArrow={<CustomRight />}
//     customLeftArrow={<CustomLeft />}
//   >
//    <div className={`carousel-item active ${classes.mainPicture}`}>
//               <img
//                 className="d-block w-100"
//                 src={modelItem }
//                 alt="First slide"
//               />
//             </div>
//   </Carousel>;
// }
// export default CustomDotCArosel