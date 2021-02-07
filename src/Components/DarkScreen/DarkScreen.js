import React from 'react';
import Banner from './Banner';
import Divider from './Divider';
import ExDivider from './ExperienceDivider';
import About from './About';
import Experience from './Experience';

export default function DarkScreen(props) {
    return (
        <React.Fragment>
            <Banner/>
            <Divider/>
            <About/>
            <ExDivider/>
            <Experience/>
        </React.Fragment>
    )
}

