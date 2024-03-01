import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import './About.css'

const About = () => {

    const comp = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from("#welcome", {
                    opacity: 0,
                    duration: 0.5,
                });
        }, comp);

        return () => ctx.revert();
    }, []);

    return (
        <>

            <div className="relative" ref={comp}>
                <div
                    id="intro-slider"
                    className="h-screen p-10 bg-l_orange absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight">
                    {/* style={{ height: '61vh' }} */}

                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-9xl transform scale-200" id="title-1">
                            What
                        </h1>
                        <h1 className="text-9xl transform scale-200" id="title-2">
                            do
                        </h1>
                        <h1 className="text-9xl transform scale-200" id="title-3">
                            we
                        </h1>
                        <h1 className="text-9xl transform scale-200" id="title-4">
                            offer ?
                        </h1>
                    </div>
                </div>

                <div className="h-screen flex justify-center items-center relative bg-d_grey">
                    <div
                        className="absolute inset-0">
                        {/* style={{ height: '60vh' }} */}
                    </div>
                    <div className="hero min-h-screen" style={{
                        backgroundImage: 'url(../assets/ml.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        <div className="hero-overlay "></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="text-white glass rounded-lg max-w-2xl pl-5 pr-5 ">
                                <h1 className="mb-5 mt-5 text-6xl font-bold">About Us</h1>
                                <p className="mb-5 text-lg text-start">Welcome to our React web application powered by machine learning! At our core, we are passionate about leveraging cutting-edge technology to create innovative solutions for everyday challenges. Our platform seamlessly integrates advanced machine learning models with a user-friendly interface to provide a unique and efficient experience.</p>
                                <p className="mb-5 font-bold">Click the button to view our Model!</p>
                                <p className="mb-5 mr">⬇️</p>
                                <button className="mb-5 btn btn-wide btn-neutral">🖥️</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mockup-code text-xl mt-20 ml-5 mr-5 mb-20 ">

                    <pre data-prefix="$"><code>npm install steps</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>

                    <div className="flex w-full ml">
                        <div className="flex justify-center mt-20 mb-20 ml-10 mr-16">

                            <div className=" carousel carousel-center max-w-5xl h-80 p-4 space-x-4 bg-black rounded-box">

                                <div className="carousel-item mr">
                                    <div className="text-white glass rounded-lg max-w-xl pl-10">
                                        <h1 className="mb-5 mt-5 text-5xl font-bold">1. Image Upload:</h1>
                                        <p className="mb-5">Our home portal allows users to upload images effortlessly. These images are then processed by our custom-trained machine learning model to detect faces.</p>
                                        <p className="mb-5 font-bold">Next step ➡️</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-white glass rounded-lg max-w-xl pl-10">
                                        <h1 className="mb-5 mt-5 text-5xl font-bold">2. Face Detection:</h1>
                                        <p className="mb-5">Once the image is uploaded, our machine learning model kicks into action. It accurately identifies and detects faces within the image, providing real-time feedback.</p>
                                        <p className="mb-5 font-bold">Next step ➡️</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-white glass rounded-lg max-w-xl pl-10">
                                        <h1 className="mb-5 mt-5 text-5xl font-bold">3. Attendance Log: </h1>
                                        <p className="mb-5">After face detection, our application generates an attendance log in a tabular format. This log provides detailed information about the individuals detected in the uploaded image, including their names  timestamps, and any additional relevant data.</p>
                                        <p className="mb-5 font-bold">Next step ➡️</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-white glass rounded-lg max-w-xl pl-10">
                                        <h1 className="mb-5 mt-5 text-5xl font-bold">4. Daily Updates:</h1>
                                        <p className="mb-5"> Our platform offers daily updates on attendance records, ensuring that users have access to the most recent and accurate information at all times.</p>
                                        <p className="mb-5 font-bold">Next step ➡️</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="text-white glass rounded-lg max-w-xl pl-10">
                                        <h1 className="mb-5 mt-5 text-5xl font-bold">5. Downloadable Table:</h1>
                                        <p className="mb-5">Our mission is to simplify attendance tracking and enhance productivity through the power of machine learning. By harnessing the capabilities of custom-trained models, we aim to revolutionize traditional attendance management systems, making them more accurate, reliable, and accessible.</p>
                                    </div>
                                </div>
                            </div>
                        </div >

                        <div className="divider divider-horizontal mt-10 mb-10 text-bold text-white">AND</div>

                        <div className="text-black bg-white glass rounded-lg max-w-xl mt-20 mb-20 ml-10 pl-4">
                            <h1 className="mb-5 mt-5 text-5xl font-bold">Our Mission</h1>
                            <p className="mb-5">Our mission is to simplify attendance tracking and enhance productivity through the power of machine learning. By harnessing the capabilities of custom-trained models, we aim to revolutionize traditional attendance management systems, making them more accurate, reliable, and accessible.</p>
                        </div>
                    </div>

                </div>



            </div>
            <Footer />
        </>
    );
}

export default About;
