import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServiceItems from './ServiceItems';

const Services = () => {
    const [services, setServices] = useState();
    useTitle("online delivery service")
    
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 3)))
        .catch(err => console.log(err))
    },[])
    return (
        <div className='my-6'>
            <div className="font-bold text-3xl text-dark text-center py-3 w-1/5 mx-auto border-b-8 border-secondary-900">Services</div>
            <p className='w-3/5 mx-auto my-10 italic'>Contact online delivery Today to Schedule House Shifting & Office Shifting Service company. Our Team of Professional Movers And Packers Can Help Your Packing and Moving Efficiently. Safe & Secure Services. Make Appointment Now. 24/7 Customer Support.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4'>
                {
                    services?.map(service=> <ServiceItems
                        key={service._id}
                        service={service}
                    ></ServiceItems>)
                }
            </div>
           
            <Link to='/services'><button className="btn btn-outline btn-secondary my-8 flex mx-auto">View All <FaAngleDown></FaAngleDown></button></Link>
        </div>
    );
};

export default Services;