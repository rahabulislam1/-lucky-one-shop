import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services/Services';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;