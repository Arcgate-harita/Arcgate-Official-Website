import React from 'react'
import BodyContainer from '../body_container'
import "../components/Home.css";
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home-container'>
      <BodyContainer />
    </div>
  )
}

export default Home
