import React from 'react';
import product1Img from "../../assets/images/product1.webp";
import Img from '../LazyLoadImage/Img';
import { IoMdClose } from "react-icons/io";


const Modal = ({ openModal = false, setOpenModal = () => { } }) => {

    if (!openModal) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-[999] overflow-auto">
            <div className="bg-white rounded-lg p-6 w-[95vw] min-w-[50vw] max-w-md max-h-[90vh] overflow-y-auto shadow-lg relative flex flex-col gap-2">
                
                <div className='flex flex-row justify-between'>
                    <h4 className={`text-2xl font-bold text-[#182036] text-center mb-4`}>Exclusive Offer for You!</h4>
                    <IoMdClose onClick={() => setOpenModal(false)} className='text-[34px] p-2 bg-[#182036] hover:bg-[#ff7900] text-[#fff] cursor-pointer transition' />
                </div>


                <div className="flex flex-col sm:flex-row gap-4 w-full">

                    <div className='w-full sm:w-1/2 text-center'>
                        <Img
                            src={`${product1Img}`}
                            alt="Puja Pushpanjali"
                            // className="w-32 h-48 object-cover rounded-md"
                            className={`h-[280px] sm:h-[350px] w-full`}
                        />
                    </div>

                    <div className='w-full sm:w-1/2 text-center sm:text-left'>
                        <h1 className={`text-lg font-bold text-[#ff7900]`}>Puja Pushpanjali</h1>
                        <p className={`text-base font-medium text-[#0a122b] mt-1`}>"Puja Pushpanjali" includes detailed procedures for <b>Shiv Pooja Vidhi, Kalash Poojan, Bhagwati Pujan Vidhi, Maha Mrityunjay Jap Vidhi, Lakshmi Poojan Vidhi, Rudrabhishek, Havan Vidhi, Parthiv Shiv Poojan Vidhi, Shree Suktam, Kumbh Vivah, Chhag Balidan, and Mash Bali</b>. This sacred text presents traditional Sanatan Dharma rituals in a simple and authentic manner, enabling devotees to perform pujas correctly and attain maximum spiritual benefits.'</p>
                    </div>
                </div>

                <a
                    href='https://dl.flipkart.com/s/ATo9INuuuN'
                    target='_blank'
                    className="w-full bg-[#ff7900] text-white rounded-md hover:scale-95 scale-100 transition-transform duration-300 ease-in-out px-[30px] py-[15px] text-base font-medium"
                >
                    Exclusive on Flipkart – Buy Now
                </a>

            </div>
        </div>
    )
}

export default Modal