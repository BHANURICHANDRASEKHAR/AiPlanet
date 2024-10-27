import React from 'react';
import './Sliderbar.css';
import FileUpload from './FileUpload';
export default function Logo() {
  return (
    <div className='container-fluid bg-dark'>
      <div className='row   d-flex justify-content-between'>
        <div className='col-6  d-flex justify-content-start'>
          <img 
            className='img' 
            src='https://framerusercontent.com/images/pFpeWgK03UT38AQl5d988Epcsc.svg?scale-down-to=512' 
            alt='Logo'
          />
        </div>
        <div className='col-6 text-white-50 d-flex justify-content-end'>
          <FileUpload />
        </div>
      </div>
    </div>
  );
}
