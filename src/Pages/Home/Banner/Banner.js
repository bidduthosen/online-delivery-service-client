import React from 'react';
import BannerItems from './BannerItems';
import img1 from '../../../assets/images/banner/banner1.jpg'
import img2 from '../../../assets/images/banner/banner2.jpg'
import img3 from '../../../assets/images/banner/banner3.jpg'

const Banner = () => {
    const bannerData = [
        {
            image: img2,
            prev: 3,
            id: 1,
            next: 2,
        },
        {
            image: img1,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1,
        },
        
    ]
    return (
        <div className="carousel w-full">
             {
                bannerData.map(slider => <BannerItems
                    key={slider.id}
                    slider={slider}
                ></BannerItems>)
            }
        </div>
    );
};

export default Banner;