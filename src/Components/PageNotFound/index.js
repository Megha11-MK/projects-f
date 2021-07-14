import React from 'react';
import './PnF.css';
import ImgError from '../../Images/ImgError.png'

const PageNotFound = () => {
    return ( 
        <div className="m-10 p-20 justify-content-center">
            <img src={ImgError} alt="Page Not Found"/>
        </div>
     );
}
 
export default PageNotFound;