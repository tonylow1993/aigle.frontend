import React from 'react';
import teamPic from '../../../Assets/about.svg';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about" className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid"/>
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <h1 className="headerTitle">About Us - <span className="headerHighlight">AIGLE.AI</span></h1>
                            <p className="headerContent">At Aigle.ai, we believe in the transformative power of technology to redefine the future of healthcare. We stand at the intersection of cutting-edge artificial intelligence and medical imaging, committed to ushering in a new era of diagnostic precision.</p>
                            <p className="headerContent">Founded by a team of visionary medical professionals and AI experts, Aigle.ai harnesses the vast potential of machine learning to analyze and interpret medical images with unparalleled accuracy. Our state-of-the-art platform delves deeper than the human eye, identifying subtle patterns and anomalies that might otherwise go unnoticed.</p>
                            <p className="headerContent">But we're not just about algorithms and data. We are driven by a profound desire to make a meaningful difference in the lives of patients worldwide. By assisting doctors in making faster, more informed decisions, we aim to optimize treatment outcomes and enhance patient care.</p>
                            <p className="headerContent">Join us on this remarkable journey as we reimagine the boundaries of medical diagnostics. With Aigle.ai, the future is clearer, brighter, and healthier.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;