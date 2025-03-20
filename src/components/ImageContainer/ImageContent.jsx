import React from 'react'
import Img from '../LazyLoadImage/Img';

const ImageContent = ({
        imgUrl1="https://placehold.co/406x203", 
        imgUrl2="https://placehold.co/406x50",
        className = "flex-col p-0 sm:p-5",
        isAboutImg = false
    }) => {
    return (
        <div className={`w-full sm:w-1/2 flex justify-center gap-5 ${className}`}>

            <Img src={imgUrl1} alt='image' className={`${ isAboutImg ? 'h-[350px] w-auto' : !imgUrl2 ? 'w-full' : ""}`} />
            {imgUrl2 && <Img src={imgUrl2} alt='image' />}

        </div>
    )
}

export default ImageContent;