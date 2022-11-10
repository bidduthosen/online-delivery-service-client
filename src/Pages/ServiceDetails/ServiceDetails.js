import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCrown, FaDollarSign, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import CategoryReview from '../CategoryReview/CategoryReview';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    useTitle('Product information');
    const  {_id, title, price, img, description, rating} = serviceDetails;

    const handleInReview = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const message = form.message.value;
        
        const review = {
            service_id: _id,
            name,
            title: title,
            img:img,
            rating: rating,
            email: user?.email,
            photoURL,
            message,
            
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('Review added done!')
                form.reset();
            }
        })
        .catch(err => console.error(err))

    }
    return (
        <div>
            <div className='m-3'>
                <div className="card w-full bg-base-100 shadow-xl border-2 border-success-500 my-7">
                    <div className="font-bold text-3xl text-dark text-center py-3 mb-12 w-1/5 mx-auto border-b-8 border-secondary-900">Product information details</div>
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {title}
                        <sub><FaCrown className='text-secondary'></FaCrown> </sub>
                        </h2>
                        <p className='italic'>{description}</p>
                        <div className="card-actions justify-end mt-3">
                        <div className="badge badge-outline p-3"><FaStar/> <FaStar/> <FaStarHalfAlt className='mr-1'/> {rating}</div>
                        <div className="badge badge-outline p-3">Price: <FaDollarSign></FaDollarSign>{price}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {user ? 
                <>
                    <div className="hero py-10  bg-base-200">
                        <div className="hero-content w-4/5">
                            <div className="card flex-shrink-0 w-full shadow-2xl" style={{background:"#ffffffb5"}}>
                            <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">Check Out Form</div>
                            <form onSubmit={handleInReview}  className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-bordered h-28" placeholder="Message" required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary md:w-1/5">Check Out</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <p className='my-6 text-2xl w-2/5 mx-auto text-center p-4 hover:border-solid'>Please? <Link className='text-orange-600' to='/login'>Login</Link> to add a review</p>
                </>
                }
            </div>
            <div>
                <CategoryReview title={title}></CategoryReview>
            </div>
        </div>
    );
};

export default ServiceDetails;