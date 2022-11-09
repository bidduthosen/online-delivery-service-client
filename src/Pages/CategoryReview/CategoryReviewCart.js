import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const CategoryReviewCart = ({review}) => {
    const { photoURL, email, name, rating, message} = review;
    return (
        <div className='border-solid border-2 border-sky-500 p-4 my-5'>
            <div className='my-6 grid md:grid-cols-2'>
                <div className='flex justify-start items-center'>
                    <img className='h-16 w-16 mr-3' src={photoURL} alt="" />
                    <div>
                        <h1 className='text-xl '>{name}</h1>
                        <h2 className='text-base'>{email}</h2>
                    </div>
                </div>
                <div className='flex justify-end items-center'><FaStar/><FaStar/><FaStarHalfAlt className='mr-1'/> {rating}</div>
            </div>
            <div className='w-4/5 mx-auto'><strong className='underline hover:underline-offset-4'>User message:</strong> {message}</div>
        </div>
    );
};

export default CategoryReviewCart;