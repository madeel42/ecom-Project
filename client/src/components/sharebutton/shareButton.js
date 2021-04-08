import React from 'react'
// import React from 'react';
// import { useSpring, animated } from "react-spring";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  PinterestShareCount,
} from "react-share";
export const ShareButton = () => {
    const shareUrl = window.location.href;
    console.log(shareUrl,'shareurl')
    // const ShareList = Passers(share(<P
    //   url={image}
    //   className="network__share-button"
    
    // />))({ className: "network" })("li");
    // const title = "Arquibusco";
    const encoded = encodeURI(shareUrl);
    // console.log(image,'images')
    return (
        <div>
            <div className="flex">
          {/* <ShareList> */}
        <div className="mr-2">
            <FacebookShareButton
              url={shareUrl}
              quote={'title facebook'}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
        </div>
          <div className="mr-2">
            <LinkedinShareButton
              url={shareUrl}
              title={'titleLinkedIn'}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
          <div>
            <PinterestShareButton
              url={`https://facebook.com/sharer/sharer.php?u=${encoded}`}
              media={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png%2F1200px-Image_created_with_a_mobile_phone.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&tbnid=gxFxsvFBmxeZ9M&vet=12ahUKEwim4-Py_e7vAhWp2OAKHdQjA30QMygBegUIARDVAQ..i&docid=0JWe7yDOKrVFAM&w=1200&h=900&q=image&ved=2ahUKEwim4-Py_e7vAhWp2OAKHdQjA30QMygBegUIARDVAQ'}
              description={'title'}
              className="Demo__some-network__share-button"
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>
          {/* </ShareList> */}
        </div>
        </div>
    )
}
