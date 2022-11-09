import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Discount from '../Discount/Discount';
import Services from '../Services/Services';
import ServiceShow from '../ServiceShow/ServiceShow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServiceShow></ServiceShow>
            <About></About>
            <Discount></Discount>
        </div>
    );
};

export default Home;