import React from 'react';
import './Home.css';
import {headerItems, professionals} from '../../utils/ProfessionalsData';
import Banner1 from '../../BannerImages/Banner1.png';
import Banner2 from '../../BannerImages/Banner2.jpg';
import Banner3 from '../../BannerImages/Banner3.jpg';
import Banner4 from '../../BannerImages/Banner4.jpg';
import Banner5 from '../../BannerImages/Banner5.jpg';
import Banner6 from '../../BannerImages/Banner6.jpg';
import Slider from '../../components/Slider/Slider';
import Professionals from '../../components/Professionals/Professionals';
import BackToTop from '../../components/BackToTop/BackToTop';

const Home = () => {
  const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <div>
      <div className='item-container'>
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className='home'>
        <div className='home-container'>
          <Slider images = {bannerImages} />
          <div className='home-row'>
            {professionals.slice(0,2).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div className='home-row'>
            {professionals.slice(2,5).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div className='home-row'>
            {professionals.slice(4,6).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div style={{marginTop: '40px'}}>
            <BackToTop />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Home
