import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {

    const handleAddService = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        
        const service = {
            title,
            price,
            img: photo,
            rating,
            description
        }
        console.log("add service",service)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('service added done!')
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero py-10  bg-base-200">
                        <div className="hero-content w-4/5">
                            <div className="card flex-shrink-0 w-full shadow-2xl" style={{background:"#ffffffb5"}}>
                            <div className="font-bold text-2xl text-dark text-center py-3 md:w-1/5 mx-auto my-6  border-4 border-double border-sky-400  p-4 hover:border-solid">Add a Service</div>
                            <form onSubmit={handleAddService}  className="card-body">
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="title" className="input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL, <small>please provide a imgbb link.</small></span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" required/>
                                </div>

                                <div>
                                <label className="label">
                                    <span className="label-text">price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">rating</span>
                                </label>
                                <input type="number" name='rating'  placeholder="rating" className="input input-bordered" required/>
                                </div>

                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered h-28" placeholder="Message" required></textarea>
                                </div>

                                <div className="form-control mt-6">
                                <button className="btn btn-primary md:w-1/5">Add Service</button>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default AddService;