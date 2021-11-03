import React from 'react';

import Directory from '../../components/directory/directory';
// import './homepage.scss';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
  // <div className='homepage'>
  //   <Directory />
  // </div>
);

export default HomePage;