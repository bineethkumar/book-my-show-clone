import React from "react";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCarousel = () =>{
    const settingsLG={
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,

    };
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const images=[
        "https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ];
    return(<>
    <div className="lg:hidden">
    <HeroSlider{...settings}>
    {
        images.map((image)=>(
            <div className="w-full h-56 md:h-80 py-3">
                <img src={image} alt="samples" className="w-full h-full rounded-md" />
            </div>
        ))
    }
    </HeroSlider>
    </div>
    <div className="hidden lg:block">
        <HeroSlider{...settingsLG}>
    {
        images.map((image)=>(
            <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="samples" className="w-full h-full rounded-md" />
            </div>
        ))
    }
    </HeroSlider>
    </div>
    </>
    );
};

export default HeroCarousel;