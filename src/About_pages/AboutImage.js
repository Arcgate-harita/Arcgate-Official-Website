import React, { useState } from 'react';
import "../About_pages/AboutImage.css";
import data from "../About_pages/data";
import { aboutImage1, aboutImage2, aboutImage3, aboutImage4, aboutImage5, aboutImage6, aboutImage7,aboutImage8,aboutImage9,aboutImage10,aboutImage11,aboutImage12,aboutImage13,aboutImage14, aboutImage15,aboutImage16,aboutImage17,aboutImage18,aboutImage19,aboutImage20,aboutImage21,aboutImage22,aboutImage23,aboutImage24,aboutImage25,aboutImage26,aboutImage27, } from '../About_pages/data';
import Component from '../About_pages/Component';
import VideoSection from "../About_pages/AboutVideo";
import "../About_pages/Component.css";

function AboutImage(images) {

    const [showPhotos, setShowPhotos] = useState(true);
    const [showSelectImageModal, setShowSelectImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


    const handleCloseModal = () => {
        setShowSelectImageModal(false);
        setSelectedImage(null);
        localStorage.removeItem("selectedImage");
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

                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage1} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images1 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage2} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images2 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage3} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images3 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage4} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage5} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage6} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                               


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage8} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage9} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                             
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage11} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage12} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>     <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage13} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>




                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage14} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage15} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage16} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage17} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage18} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage26} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage27} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage23} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage24} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage25} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            

                               



                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage7} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage10} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage19} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage20} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage22} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className='image-container1'>
                                    <div className='image-content2'>
                                        {data.map((section, index) => (
                                            <div key={index}>

                                                {section.images4 && (
                                                    <div data-aos="fade-up">

                                                        <Component setSelectedImage={setSelectedImage} setShowSelectImageModal={setShowSelectImageModal} images={aboutImage21} />


                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                ) : (

                    <VideoSection />
                )}


            </article>


            {selectedImage && <div className="modal fixed inset-0 flex items-center justify-center z-10">
                <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>
                <div className="modal-container mx-auto rounded-lg p-4 md:p-8 overflow-hidden shadow-lg z-50">
                    <span
                        className="close-button absolute top-0 right-0 px-4 py-2 text-xl cursor-pointer"
                        onClick={handleCloseModal}
                    >
                        &times;
                    </span>
                    <img
                        src={selectedImage}
                        alt="Full Screen"
                        className="full-screen-image max-h-screen mx-auto"
                    />
                      <div className="next-prev-buttons">
                        <button className="prev-button" >
                            Previous
                        </button>
                        <button className="next-button" >
                            Next
                        </button>
                    </div>
                </div>
            </div>}


        </div >
    )
}

export default AboutImage
