import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);

    console.log(reviews);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    },[user?.email]);

    return (
        <div>
            <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">My Review</div>
            {
             reviews.map(review => <ReviewRow
                        key={review._id}
                        review={review}
                    ></ReviewRow>)
            }
        </div>
    );
};

export default MyReview;