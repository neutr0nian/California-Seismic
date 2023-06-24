import React from 'react'
import { useParams } from 'react-router-dom'

const AsceReference = () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const value = params.get("value");

    console.log("params -> ", type, value);
    const imagePath = require(`../assets/asce7-16/${type}-${value}.png`);
  return (
    <div>
      <img src={imagePath} alt={imagePath} className='mx-auto my-10'/>
    </div>
  )
}

export default AsceReference
