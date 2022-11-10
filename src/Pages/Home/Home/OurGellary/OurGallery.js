import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const OurGallery = () => {
    return (
        <div className='m-3'>
            <div className="font-bold text-3xl text-dark text-center py-5 my-11 w-1/5 mx-auto border-b-8 border-secondary-900">Our Gallery</div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 '>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/qWqBMQq/restaurant-delivery-orders-1024x683.jpg">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/qWqBMQq/restaurant-delivery-orders-1024x683.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/4mhhH35/ic-Food-Feature-1.png">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/4mhhH35/ic-Food-Feature-1.png" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/ZMLwqH4/free-delivery.png">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/ZMLwqH4/free-delivery.png" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/y4NQYNk/online-food-delivery-program-restroapp.png">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/y4NQYNk/online-food-delivery-program-restroapp.png" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/HK7HNZv/delivery-1-width-1524.jpg">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/HK7HNZv/delivery-1-width-1524.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/zXmxHnx/1623334423104967095760c21e17c6cb9.jpg">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/zXmxHnx/1623334423104967095760c21e17c6cb9.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/HC6Vhtb/veges-2x-3a214e06e1b90bc556793741ffda305e.png">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/HC6Vhtb/veges-2x-3a214e06e1b90bc556793741ffda305e.png" alt="" />
                </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
                <PhotoView src="https://i.ibb.co/MSkdtG0/istockphoto-1197811940-612x612.jpg">
                <img className='h-full w-full rounded-lg border-4  border-orange-100 hover:border-orange-300' src="https://i.ibb.co/MSkdtG0/istockphoto-1197811940-612x612.jpg" alt="" />
                </PhotoView>
            </PhotoProvider>
            </div>
        </div>
    );
};

export default OurGallery;