import React, { useState } from 'react';
import Banner from '../../components/Banner';

const Preview = (props) => {
  const [banner] = useState(props.banner);
  return (
    <Banner {...banner} />
  )
}

export default Preview;