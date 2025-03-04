import React from 'react'

const ImageContent = ({
        imgUrl1="https://placehold.co/406x203", 
        imgUrl2="https://placehold.co/406x50",
        className = "flex-col p-0 sm:p-5"
    }) => {
    return (
        <div className={`w-full sm:w-1/2 flex justify-center gap-5 ${className}`}>

            <img src={imgUrl1} alt='image' className={`${ !imgUrl2 ? 'w-full' : ""}`} />
            {imgUrl2 && <img src={imgUrl2} alt='image' />}

        </div>
    )
}

export default ImageContent;