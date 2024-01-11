import React, { useEffect, useState } from 'react';
import '../About_pages/AboutImage.css';
import images from '../About_pages/data';
import { SRLWrapper } from 'simple-react-lightbox';
import VideoSection from "../About_pages/AboutVideo";

const options = {};

function AboutImage() {
    const [showPhotos, setShowPhotos] = useState(true);
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    }, [tag]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Image-App">
            <section className='image-section1'>
                <div className='image-content1'>
                    <div className='image-div1'>
                        <h1>Life at Arcgate</h1>
                        <center>
                            <p>Take a look at our delivery center in Udaipur, India and our unique work culture.</p>
                        </center>
                    </div>
                </div>
            </section>

            <section className='image-section-button'>
                <div className='image-content-button'>
                    <center>
                        <button
                            className={`button1 ${showPhotos ? 'active' : ''}`}
                            onClick={() => setShowPhotos(true)}
                        >
                            PHOTOS
                        </button>
                        <button
                            className={`button2 ${!showPhotos ? 'active' : ''}`}
                            onClick={() => setShowPhotos(false)}
                        >
                            VIDEOS
                        </button>
                    </center>
                </div>
            </section>

            {showPhotos ? (
                <SRLWrapper options={options}>
                    <div className="container">
                        {filteredImages.map(image => (
                            <div key={image.id} className="image-card">
                                <a href={`/images/${image.imageName}`}>
                                    <img className="image" src={`/images/${image.imageName}`} alt="" />
                                </a>
                            </div>
                        ))}
                    </div>
                </SRLWrapper>
            ) : (
                <VideoSection />
            )}
        </div>
    );
}

export default AboutImage;
