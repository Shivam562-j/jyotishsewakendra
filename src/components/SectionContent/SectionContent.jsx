import React from 'react'
import Button from '../Button/Button';

const SectionContent = ({ 
        className = "", 
        subHeading = "Discover Your Destiny with Astrology!", 
        heading = "Unravel Life’s Mysteries with Expert Astrological Guidance",
        description = "Get insights into your life, career, relationships, and future with our expert astrologers. Explore personalized Kundali analysis, Vastu consultation, and more!" ,
        ctaText="Book Your Consultation Now",
        ctaUrl="/appointment",
        subHeadingColor="text-[#ff7900]",
        headingColor="text-[#fff]",
        descriptionColor="text-[#fff]"
    }) => {
    return (
        <div className={`${ctaText ? 'w-full sm:w-1/2' : "w-full"} flex flex-col gap-3 sm:gap-5 ${className}`}>
            <h4 className={`text-xl font-bold ${subHeadingColor}`}>{subHeading}</h4>
            <h1 className={`text-2xl sm:text-4xl font-bold ${headingColor}`}>{heading}</h1>
            <p className={`text-base font-medium ${descriptionColor}`}>{description}</p>
            {ctaText && <Button to={ctaUrl}>{ctaText}</Button>}
        </div>
    )
}

export default SectionContent;