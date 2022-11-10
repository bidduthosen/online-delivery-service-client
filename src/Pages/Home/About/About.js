import React from 'react';
import calender from '../../../assets/images/about/calender.webp';

const About = () => {
    return (
        <div>
            <div className="font-bold text-3xl text-dark text-center py-3 mb-12 w-1/5 mx-auto border-b-8 border-secondary-900">About us</div>
                <p className='w-3/5 mx-auto my-7 italic'>Delivery is the process of transporting goods from a source location to a predefined destination. Cargo is primarily delivered via roads and railroads on land, shipping lanes on the sea, and airline networks in the air.We're digital nomads, living a digital life! And one thing that we have learned over the course of this evolution is that whatever we want or need, can be obtained with just a few clicks on our beloved smart devices. Even the food - all kinds, to satiate our different cravings on different days of the week. It's really an era that has something for everyone - whether a consumer or a provider.</p>
            <div className='grid md:grid-cols-2'>
                <div className=''>
                    <img src={calender} className='h-full' alt="" />
                </div>
                <div className='bg-black text-center text-white flex justify-center items-center'>
                    <div>
                    <h1 className='text-3xl font-bold my-4'>Our  Online delivery service </h1>
                    <h2 className='text-xl  w-3/5 mx-auto'>Ods Freight Solutions is focused on taking care of every need of our diverse shipping and logistics customers.</h2>

                    <p className='w-4/5 mx-auto'>We move poultry, beef, pork, and produce across the Americas.  We help our e-commerce and retail shipping partners meet their customers’ demands.  Huge construction equipment, tires, lumber, and retail merchandise get delivered intact and on time.  And, we ship freight to and from the U.S. via more than 60 ports around the world. </p>
                    <p className='w-4/5 mx-auto'>The introduction of the AJC Freight Solutions brand within AJC Logistics is new, but we are not a startup. We are part of the multi-billion-dollar AJC Group with a 50-year legacy of solving transportation and logistics issues for regional partners and Fortune 500 companies. </p>
                    <div className='flex justify-end m-6'>
                    <button className="btn btn-outline btn-secondary">times sit</button>
                    <button className="btn btn-outline btn-secondary mx-4">Learning more</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;