import React from 'react';
import "../View_page/View.css";
import imagePaths from '../imagePath';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import ViewPara from './view_para';


function View3() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
 
  return (
    <div className='view-container'>
      <article>
        <section className='view-insight-section1'>
          <div className='view-content1'>
            <h1>Insights</h1>
            <p></p>
          </div>
        </section>

        <section className='view-insight-section2'>
          <div className='view-content2'>
            <div className='view-div'>
                <div className='view-insight-row1'>
              <div className='view-body'>
                <br></br>
                <Link to="/blogView">
                <span className='span-image'>        
                  <img src={imagePaths.insight1} />
                </span>
                </Link>
                <br></br>
                <span className='span-text'>Blog</span>
                <br></br>
              </div>
              <div className='view-body'>
              <Link to="/podcast">
                <span className='span-image'>
                  <br></br>
                  <img src={imagePaths.insight2} />
                  <br></br>
                </span>
                </Link>
                <span className='span-text'>Podcasts</span>
                <br></br>
              </div>
              </div>
              <br></br>
            </div>
            <br></br>
          </div>
        </section>
      </article>
    </div>
  )
}


export default View3