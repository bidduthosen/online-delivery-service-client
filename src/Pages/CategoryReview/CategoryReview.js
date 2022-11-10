import React, { useEffect, useState } from 'react';
import CategoryReviewCart from './CategoryReviewCart';

const CategoryReview = ({title}) => {
    const [addReview, setAddReview] = useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?title=${title}`)
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
                <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">Review</div>
                <div className='md:w-3/5 mx-auto'>
                    {addReview.map(rvw=> <CategoryReviewCart
                        key={rvw._id}
                        review={rvw}
                    ></CategoryReviewCart>)}
                </div>
            </>
            : 
            <>
                <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">No reviews Informations Please added</div>
            </>
            }
            
        </div>
    );
};

export default CategoryReview;