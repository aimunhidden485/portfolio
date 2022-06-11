import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;