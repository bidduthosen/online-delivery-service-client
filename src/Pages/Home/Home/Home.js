import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Services from '../Services/Services';
import ServiceShow from '../ServiceShow/ServiceShow';
import OurGallery from './OurGellary/OurGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServiceShow></ServiceShow>
            <About></About>
            <Discount></Discount>
            <OurGallery></OurGallery>
        </div>
    );
};

export default Home;