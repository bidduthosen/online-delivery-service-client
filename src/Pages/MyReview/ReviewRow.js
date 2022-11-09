import React, { useEffect, useState } from 'react';
import { FaStar, FaTrash } from 'react-icons/fa';

const ReviewRow = ({review, handleDelete}) => {
    const {_id, service_id, name,  email, title ,photoURL ,rating, message } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service_id}`)
        .then(res => res.json())
        .then(data => {
            // console.log("data service-id", data)
            setReviewService(data)
        })
        .catch(err=> console.log(err))
    },[service_id])

    
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5 py-6 px-3 border-4 shadow-xl rounded-lg'>
            <div className='flex justify-center md:justify-start items-center py-4'>
                <img className='h-16 w-16 mr-3 rounded-full' src={photoURL} alt="" />
                <div>
                    <h1 className='text-xl '>{name}</h1>
                    <h2 className='text-base'>{email}</h2>
                </div>
            </div>
            <div className='flex justify-center lg:justify-start items-center py-4'>
                {reviewService?.img && 
                
                <img className='h-32 w-32 mr-3' src={reviewService?.img} alt="" />
            }
                <div>
                    <h1 className='text-xl '>{title}</h1>
                    <div className='flex md:justify-start items-center'><FaStar className='mr-1'/>{rating}</div>
                </div>
            </div>
            <div className='flex justify-center md:justify-start items-center py-4'>
                    <h2 className='text-base'><strong className='underline hover:underline-offset-4'>message: </strong> {message.slice(1, 100) + '...'}</h2>
            </div>
            <div className='flex justify-center lg:justify-end items-center py-4'>
                <button className="btn btn-active btn-ghost">Update</button>
                <button onClick={()=>handleDelete(_id)} className="btn btn-ghost border-2 border-sky-500 mx-3"><FaTrash/></button>
            </div>
        </div>
    );
};

export default ReviewRow;