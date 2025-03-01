import React from 'react'
import Button from '../Button/Button';

const ImageBox = ({ image = "https://placehold.co/287x183", name= "", description="", buttonName="", link="/" }) => {
    return (
        <div className='flex flex-col gap-1 bg-[#fff] border border-[#ff7900] shadow-sm hover:shadow-md rounded'>
            <img src={image} />
            <div className='p-5 pt-7'>
                <h4 className='font-bold text-2xl text-[#182036]'>{name}</h4>
                <p className='font-medium text-base text-[#0a122b]'>{description}</p>
                <Button bg="false" to={link} > {buttonName} </Button>
            </div>
        </div>
    )
}

export default ImageBox;