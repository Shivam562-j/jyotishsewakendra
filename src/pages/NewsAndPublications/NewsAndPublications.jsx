import React, { useEffect, useState } from 'react'
import { Img } from '../../components';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";


const 
NewsAndPublications = () => {

    const images = [
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
        { src: "https://placehold.co/406x406" },
    ];

    const slides = images.map((image, idx) => ({
        src: image,
        index: idx, // Custom index added
    }));

    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <div className='mt-[154px]'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <Img
                        key={index}
                        src={image.src}
                        alt={`News ${index + 1}`}
                        className="cursor-pointer rounded-lg shadow-lg hover:opacity-80"
                        onClick={() => { setCurrentIndex(Number(index)); setOpen(true) }}
                    />
                ))}

                {/* <Lightbox open={open} close={() => setOpen(false)} slides={images} index={currentIndex} /> */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={currentIndex}
                    on={{ view: ({ index }) => setCurrentIndex(index) }}
                    render={{
                        slide: ({ slide }) => {
                            const currentIndex = slides.findIndex((s) => s.src === slide.src);
                            return (
                                <div className="relative text-center">
                                    <img src={slide?.src?.src} className="max-w-full max-h-screen" />
                                    <p className="text-white mt-2">
                                        {currentIndex + 1} / {slides.length}
                                    </p>
                                </div>
                            );
                        },
                    }}
                    styles={{
                        container: {
                            backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark transparent background
                            backdropFilter: "blur(10px)", // Blur effect
                        },
                    }}
                />


            </div>
        </div>
    )
}

export default NewsAndPublications;