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
    console.log(shareUrl, 'shareurl')
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
                {/* <img style={{width:"100px", height:'100px'}} src="https://tayaba.org/wp-content/uploads/2020/05/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg" alt="" /> */}
                {/* <ShareList> */}
                <div className="mr-2">
                    <FacebookShareButton
                        url={`https://facebook.com/sharer/sharer.php?u=${encoded}`}
                        quote={'title facebook'}
                        className="Demo__some-network__share-button"
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </div>
                <div className="mr-2">
                    <LinkedinShareButton
                        url={shareUrl}
                        data-url="https://tayaba.org/wp-content/uploads/2020/05/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"
                        title={'titleLinkedIn'}
                        className="Demo__some-network__share-button"
                    >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </div>
                <div>
                    <PinterestShareButton
                        url={shareUrl}
                        media={'https://tayaba.org/wp-content/uploads/2020/05/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg'}
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
