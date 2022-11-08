import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCartInner from './ServiceCartInner';

const ServiceCart = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='my-6'>
            <div className="font-bold text-3xl text-dark text-center py-3 w-1/5 mx-auto border-b-8 border-secondary-900">All Services</div>
            <p className='w-3/5 mx-auto my-10 italic'>Contact online delivery Today to Schedule House Shifting & Office Shifting Service company. Our Team of Professional Movers And Packers Can Help Your Packing and Moving Efficiently. Safe & Secure Services. Make Appointment Now. 24/7 Customer Support.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4'>
                {
                    services?.map(service=> <ServiceCartInner
                        key={service.service_id}
                        service={service}
                    ></ServiceCartInner>)
                }
            </div>
        </div>
    );
};

export default ServiceCart;