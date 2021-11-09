import React from 'react';
import nf from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <h2>not found</h2>
            <img src={nf} alt="" />
        </div>
    );
};

export default NotFound;