import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [reviews , setReviews] = useState([]);

    // console.log(reviews);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    },[user?.email]);

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure delete your selected orders');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        toast.success('review remove successfully')
                        const remaining = reviews.filter(rev=> rev._id !== id)
                        setReviews(remaining);
                    }
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div>
            <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">My Review</div>
            {
             reviews.map(review => <ReviewRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></ReviewRow>)
            }
        </div>
    );
};

export default MyReview;