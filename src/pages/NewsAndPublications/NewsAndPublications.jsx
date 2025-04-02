import React, { useEffect, useState } from 'react'
import { Img } from '../../components';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { layoutContainer } from '../../utils/constant';
import newsImg1 from '../../assets/images/news/news1.webp';
import newsImg2 from '../../assets/images/news/news2.webp';
import newsImg3 from '../../assets/images/news/news3.webp';
import newsImg4 from '../../assets/images/news/news4.webp';
import newsImg5 from '../../assets/images/news/news5.webp';
import newsImg6 from '../../assets/images/news/news6.webp';
import newsImg7 from '../../assets/images/news/news7.webp';
import newsImg8 from '../../assets/images/news/news8.webp';


const
    NewsAndPublications = () => {

        const images = [
            { src: `${newsImg1}` },
            { src: `${newsImg2}` },
            { src: `${newsImg3}` },
            { src: `${newsImg4}` },
            { src: `${newsImg5}` },
            { src: `${newsImg6}` },
            { src: `${newsImg7}` },
            { src: `${newsImg8}` }
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
            <section className='w-full h-full bg-custom-footer bg-no-repeat bg-[length:100%_auto] bg-[-800px_-800px]'>

                <div className={`${layoutContainer} py-14 flex flex-col gap-8 justify-between w-full border-[#182036] pt-24`}>
                    <div className='flex w-full flex-col items-center justify-center gap-10'>

                        
                        <div className='flex flex-col items-center gap-2'>
                            <h4 className='text-xl text-[#ff7900] pb-1 border-b border-[#ff7900] w-fit uppercase font-bold'>News & Publications</h4>
                            <h1 className='text-4xl text-center font-bold text-[#182036]'>Stay Updated with Our Latest Media Coverage</h1>
                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative group border-[2px] cursor-pointer p-2 border-[#dddddd] bg-[#f7f7f7]">
                                    <div className='border border-[#ccc] bg-white p-1 w-full flex items-center justify-center h-full'>
                                        <Img
                                            key={index}
                                            src={image.src}
                                            alt={`News ${index + 1}`}
                                            // className="cursor-pointer rounded-lg shadow-lg hover:opacity-80"
                                            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-contain hover:opacity-80"
                                            onClick={() => { setCurrentIndex(Number(index)); setOpen(true) }}
                                        />
                                    </div>
                                </div>
                            ))}

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
                                                <img src={slide?.src?.src} className="max-w-full max-h-[80vh]" />
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
                </div>
            </section>
        )
    }

export default NewsAndPublications;