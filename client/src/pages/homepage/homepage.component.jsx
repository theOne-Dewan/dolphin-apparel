import React, { Profiler } from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
     <HomePageContainer>
         <Profiler id='Directory-Profiler' onRender={(id, phase, actualDuration) => {console.log()}}>
             <Directory/>
         </Profiler>
    </HomePageContainer>
);

export default HomePage;