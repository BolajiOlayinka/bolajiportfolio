import React from 'react';
import Banner from './Banner';
import Divider from './Divider';
import ExDivider from './ExperienceDivider';
import About from './About';
import Experience from './Experience';
import ProjectDivider from './ProjectDivider';
import Projects from './Projects';
import MoreDivider from './MoreDivider';
import MoreProjects from './MoreProjects';
import Tools from './Tool';
import Footer from './Footer';

export default function DarkScreen(props) {
    return (
        <React.Fragment>
            <Banner/>
            <Divider/>
            <About/>
            <ExDivider/>
            <Experience/>
            <ProjectDivider/>
            <Projects/>
            <MoreDivider/>
            <MoreProjects/>
            <Tools/>
            <Footer/>
        </React.Fragment>
    )
}

