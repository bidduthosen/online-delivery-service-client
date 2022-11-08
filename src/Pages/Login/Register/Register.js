import React, { useContext } from 'react';
import register from '../../../assets/images/register/register.jpg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const {createANewUser} = useContext(AuthContext);

    const handleCreateNewUser = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createANewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('done')
            })
            .then(err => console.error(err))
    }
    return (
        <div>
            <div className="hero py-10  bg-base-200">
                <div className="hero-content w-4/5">
                    <div className="card flex-shrink-0 w-full shadow-2xl" style={{background:"#ffffffb5"}}>
                    <img className='h-24 w-80 mx-auto mt-5' src={register} alt="" />
                    <form onSubmit={handleCreateNewUser} className="card-body">
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
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/5">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;