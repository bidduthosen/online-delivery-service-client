import React, { useEffect, useState } from 'react';
import CategoryReviewCart from './CategoryReviewCart';

const CategoryReview = ({title}) => {
    const [addReview, setAddReview] = useState([]);


    useEffect(()=>{
        fetch(`https://online-delivery-service-server-lovat.vercel.app/reviews?title=${title}`)
            .then(res => res.json())
            .then(data => {
                setAddReview(data);
            })
            .catch(err => console.log(err))
    },[title]);

    return (
        <div>
            {addReview.length ? 
            <>
                <div className="font-bold text-2xl text-dark text-center py-3 md:w-2/5 mx-auto my-6  border-4 border-double border-black rounded-xl  p-4 hover:border-solid">Review</div>
                <div className='md:w-4/5 mx-auto'>
                    {addReview.map(rvw=> <CategoryReviewCart
                        key={rvw._id}
                        review={rvw}
                    ></CategoryReviewCart>)}
                </div>
            </>
            : 
            <>
                <div className="font-bold text-2xl text-dark text-center py-3 md:w-2/5 mx-auto my-12  border-4 border-double border-black rounded-xl  p-4 hover:border-solid">No review Information Please added reviews</div>
            </>
            }
            
        </div>
    );
};

export default CategoryReview;