import React from 'react';
import { FaGithub, FaGoogle, FaLightbulb, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import login from '../../../assets/images/login/login.gif'

const Login = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col grid lg:grid-cols-2 lg:flex-row ">
                    <div className="text-center lg:text-left relative">
                    <h1 className="text-4xl w-1/2 font-bold absolute flex text-top transform -translate-y-1/2 left-1/3 right-5 top-12">Login now!</h1>
                    <img className='w-full' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl" style={{background:"#ffffffb5"}}>
                    <div className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary w-1/5">Login</button>
                        </div>
                        <div className='flex justify-between m-5'>
                            <p className='flex items-center	'>Login with-</p>
                            <div className='flex justify-between'>
                                <Link className='bg-zinc-400 p-3 mx-1 rounded-full'><FaGoogle style={{fontSize:'25px'}}/></Link>
                                <Link className='bg-zinc-400 p-3 mx-1 rounded-full'><FaGithub style={{fontSize:'25px'}}/></Link>
                                <Link className='bg-zinc-400 p-3 mx-1 rounded-full'><FaLinkedin style={{fontSize:'25px'}}/></Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;