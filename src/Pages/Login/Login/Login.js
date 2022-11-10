import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/login/login.gif'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    const {signInEmailAndPass, signInGoogle} = useContext(AuthContext);
    useTitle('login')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleSignInEmailAndPassword = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInEmailAndPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login done');
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(err => console.error(err))
    }
    const handleSignGoogle = () =>{
        signInGoogle(googleProvider)
            .then(result =>{
                const user = result.user;
                console.log('google sign user', user);
                toast.success('Google sign in done');
                navigate(from, {replace: true});
            })
            .catch(err=> console.error('err', err))
    }
    return (
        <div>
            <div className="hero py-10  bg-base-200">
                <div className="hero-content flex-col grid lg:grid-cols-2 lg:flex-row ">
                    <div className="text-center lg:text-left relative">
                    <h1 className="text-4xl w-1/2 font-bold absolute flex text-top transform -translate-y-1/2 left-1/3 right-5 top-12">Login now!</h1>
                    <img className='w-full' src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl" style={{background:"#ffffffb5"}}>
                        <form onSubmit={handleSignInEmailAndPassword} className="card-body">
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-primary w-1/5">Login</button>
                            </div>
                            <div className='flex justify-between mx-5 mb-0 mt-3'>
                                <p className='flex items-center	'>Login with-</p>
                                <div className='flex justify-between'>
                                    <Link onClick={handleSignGoogle} className='bg-zinc-400 p-3 mx-1 rounded-full'><FaGoogle style={{fontSize:'25px'}}/></Link>
                                    <Link className='bg-zinc-400 p-3 mx-1 rounded-full'><FaGithub style={{fontSize:'25px'}}/></Link>
                                    <Link className='bg-zinc-400 p-3 mx-1 rounded-full'><FaLinkedin style={{fontSize:'25px'}}/></Link>
                                </div>
                            </div>
                        </form>
                        <p className='text-center my-4'>Create a new account? <Link className='text-orange-600' to='/register'>Registration now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;