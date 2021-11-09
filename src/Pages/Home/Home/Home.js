import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import TripInfo from '../TripInfo/TripInfo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TripInfo></TripInfo>
            <Gallery></Gallery>
            <About></About>
            
        </div>
    );
};

export default Home;