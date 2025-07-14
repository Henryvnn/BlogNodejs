import React from 'react';
import Header from '../components/Header';
import Latestnews from '../components/Latest-news';
import Articlelist from '../components/Article-list';
import Popularnews from '../components/Popular-news';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <>
            <Header />
            <div className="wrapper-content">
                <Latestnews />
                <Popularnews />
                <Articlelist />
                <div className="spacing" />
            </div>
            <Footer />
        </>
    );
}

export default Homepage;
