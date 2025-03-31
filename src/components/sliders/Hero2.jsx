import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";

import Data from '@data/sliders/hero-2';
import Link from "next/link";

const Hero2Slider = ({ item }) => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = (e) => {
        e.preventDefault();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };
    
  return (
    <>
        {/* Onovo Hero */}
        <section className="onovo-section onovo-hero hero--two">

            {/* Hero swiper */}
            <Swiper
                {...sliderProps.hero2Slider}
                className="swiper-container js-hero-slider"
            >
                <div className="swiper-wrapper">
                    {Data.items.map((item, key) => (
                    <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                        <div className="onovo-hero-slide-item">
                            {item.video == undefined &&
                            <div className="image" data-dimg={item.image.desktop} data-mimg={item.image.mobile}>
                                <div className="ovrl" style={{"opacity": "0.95"}} />
                            </div>
                            }
                            {item.video && (
                                <div className="image video">
                                    <video 
                                        ref={videoRef} 
                                        autoPlay 
                                        muted={isMuted} 
                                        loop 
                                        playsInline
                                    >
                                        <source src={item.video} type="video/mp4" />
                                    </video>
                                    <a 
                                        className={`onovo-play-btn ${!isMuted ? "active" : ""}`} 
                                        onClick={toggleMute}
                                        style={{ position: "absolute", bottom: "20%", right: "10px", zIndex: 10 }}
                                    >
                                        <span className="play-circles" />
                                        <span className="play-lines">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </span>
                                    </a>
                                    <div className="ovrl" style={{ opacity: 0.95, zIndex: 5 }} />
                                </div>
                            )}
                            <div className="container" style={{ position: "unset" }} >
                                <div className="titles">
                                    <h1 className="title onovo-text-white">
                                        <span data-splitting dangerouslySetInnerHTML={{__html: item.title}} />
                                    </h1>
                                    <div className="text">
                                        <div className="subtitle onovo-text-white subtitle--left">
                                            <div data-splitting dangerouslySetInnerHTML={{__html: item.text}} />
                                        </div>
                                        <div className="onovo-bts">
                                            <Link className="onovo-btn btn--border btn--white btn--color onovo-hover-btn" href={item.button.link}>
                                                <i className="arrow">
                                                    <span />
                                                </i>
                                                <span>{item.button.label}</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </div>

                {/* navs */}
                <div className="onovo-navs js-hero-slider-navs">

                    <div className="onovo-prev js-hero-slider-prev nav--white onovo-hover-2">
                        <i />
                    </div>
                    <div className="onovo-paginations-container pag--white">
                        <div className="onovo-paginations js-hero-pagination" />
                        <div className="swiper-nav-active" />
                    </div>
                    <div className="onovo-next js-hero-slider-next nav--white onovo-hover-2">
                        <i />
                    </div>
                </div>
            </Swiper>

        </section>
    </>
  );
};
export default Hero2Slider;