import React, { useState, useEffect } from 'react';
import './index.scss';


const Banner = ({ banner_name, banner_img_y, banner_img_h, banner_link }) => {

  const [deviceOrientation, setDeviceOrientation] = useState((window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait');

  const [bannerImg, setBannerImg] = useState((deviceOrientation === 'landscape') ? banner_img_h : banner_img_y);

  useEffect(() => {
    const updateBannerImage = () => {
      if (window.matchMedia(`(orientation: landscape)`).matches) {
        setDeviceOrientation('landscape')
        setBannerImg(banner_img_h)
      } else {
        setBannerImg(banner_img_y)
        setDeviceOrientation('portrait')
      }
    }
    updateBannerImage();
    window.addEventListener('resize', updateBannerImage);
    return () => {
      window.removeEventListener('resize', updateBannerImage);
    };
  }, [banner_img_h, banner_img_y]);

  return (
    <div className="container">
      <div className="banner">
        <div className="banner__content" style={{backgroundImage: `url(${bannerImg})`}}>
          <span className="banner__title" style={(deviceOrientation === 'landscape') ? {order: '-1'} : {order: '2'}}>{banner_name}</span>
          <a 
            target="_blank"
            rel="noopener noreferrer"
            className="banner__link btn" 
            href={banner_link}
          >
            Перейти
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner;