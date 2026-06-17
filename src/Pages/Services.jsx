import React from 'react';
import ServicesGrid from '../Components/ServicesPage/ServicesGrid';
import Activities from '../Components/ServicesPage/Activities';

function Services() {
    return (
        <div className="pt-28 md:pt-36 bg-white">
            <ServicesGrid />
            <div className="my-10"></div>
            <Activities />
        </div>
    );
}

export default Services;