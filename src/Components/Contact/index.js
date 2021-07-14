import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiData } from '../../commonData';

const Contact = () => {

    const {catalogEntryView, ...restData} = apiData;
    return ( 
        <div className="products">
            {catalogEntryView.map(({name, fullImage, uniqueID,value, shortDescription}) => <div className="product" key={uniqueID}>
            <img className="image" src={fullImage}/>
                <h5>{name}</h5>
                <h3>{value}</h3>
                <p className="para">{shortDescription}</p>
               <Link to="/SignIn" ><button>Add to Cart</button></Link>
                )
        </div>)
}
        </div>

            );
}
 
export default Contact;