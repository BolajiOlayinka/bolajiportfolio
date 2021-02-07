import React from 'react';
import Banner from './Banner';
import Divider from './Divider';
import About from './About';

export default function DarkScreen() {
    return (
        <React.Fragment>
            <Banner/>
            <Divider/>
            <About/>
        </React.Fragment>
    )
}

