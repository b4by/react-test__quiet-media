import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import Banner from '../../components/Banner';

const Preview = () => {

  const { settings } = useContext(Context);
  
  return (
    <Banner {...settings} />
  )
}

export default Preview;