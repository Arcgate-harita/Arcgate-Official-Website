import React, { useState } from 'react';
import "../About_pages/AboutImage.css";
import ImageModal from '../ImageModal';
import VideoSection from "../About_pages/AboutVideo";
import imagePaths from '../imagePath';

function AboutImage() {

    const [selectedImage, setSelectedImage] = useState(null);
    const [showPhotos, setShowPhotos] = useState(true);

    const openImage = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };


    return (
        <div className='image-container'>
            <article>
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
                            <button className='button1' onClick={() => setShowPhotos(true)}>PHOTOS</button>
                            <button className='button2' onClick={() => setShowPhotos(false)}>VIDEOS</button>
                        </center>
                    </div>
                </section>

                {showPhotos ? (
                    <section className='image-section2'>
                        <div className='image-div2'>
                            <div className='image'>
                                <div className='image-container1'>
                                    <div className="image-content2">
                                        <div onClick={() => openImage(imagePaths.aboutImage1)}>
                                            <img src={imagePaths.aboutImage1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage2)}>
                                            <img src={imagePaths.aboutImage2} alt='' />


                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage3)}>

                                            <img src={imagePaths.aboutImage3} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage4)}>

                                            <img src={imagePaths.aboutImage4} alt='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage5)}>

                                            <img src={imagePaths.aboutImage5} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage6)}>

                                            <img src={imagePaths.aboutImage6} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage8)}>

                                            <img src={imagePaths.aboutImage8} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage9)}>

                                            <img src={imagePaths.aboutImage9} alt='' />

                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage11)}>

                                            <img src={imagePaths.aboutImage11} alt='' />

                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage19)}>

                                            <img src={imagePaths.aboutImage19} alt='' />

                                        </div>
                                    </div>
                                </div>




                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage7)}>

                                            <img src={imagePaths.aboutImage7} alt='' />

                                        </div>
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage10)}>

                                            <img src={imagePaths.aboutImage10} alt='' />

                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage12)}>

                                            <img src={imagePaths.aboutImage12} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage13)}>

                                            <img src={imagePaths.aboutImage13} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage14)}>

                                            <img src={imagePaths.aboutImage14} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage15)}>

                                            <img src={imagePaths.aboutImage15} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage16)}>

                                            <img src={imagePaths.aboutImage16} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage17)}>

                                            <img src={imagePaths.aboutImage17} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage18)}>

                                            <img src={imagePaths.aboutImage18} alt='' />

                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage26)}>

                                            <img src={imagePaths.aboutImage26} alt='' />


                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage21)}>

                                            <img src={imagePaths.aboutImage21} alt='' />

                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage22)}>

                                            <img src={imagePaths.aboutImage22} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage23)}>

                                            <img src={imagePaths.aboutImage23} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage24)}>

                                            <img src={imagePaths.aboutImage24} alt='' />


                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage25)}>

                                            <img src={imagePaths.aboutImage25} alt='' />


                                        </div>
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage20)}>

                                            <img src={imagePaths.aboutImage20} alt='' />

                                        </div>
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        <div onClick={() => openImage(imagePaths.aboutImage27)}>

                                            <img src={imagePaths.aboutImage27} alt='' />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ) : (

                    <VideoSection />
                )}


            </article>
            {
                selectedImage && (
                    <ImageModal imageUrl={selectedImage} onClose={closeImage} />
                )
            }
        </div >
    )
}

export default AboutImage
