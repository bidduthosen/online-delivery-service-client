import React from 'react';
import discount from '../../../assets/images/bnr.jpg'

const Discount = () => {
    return (
        <div className='my-12'>
            <div className="card bg-base-100 image-full z-0">
                <figure className='relative'><img className='w-full' src={discount} alt="Shoes" /></figure>
                <div className="">
                    <div className=" absolute text-center transform -translate-y-1/2 left-5 right-5 top-1/2  z-10">
                        <h3 className=' italic text-white md:py-5 md:w-2/5 mx-auto text-3xl'>Enjoy with Family and Friends</h3>
                        <h3 className='border-dotted border-4 border-white text-white py-5 w-2/5 mx-auto text-4xl'>15% Discount!</h3>
                        <h3 className=' italic text-white py-5 w-2/5 mx-auto text-xl'>Make a out online delivery service</h3>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Discount;