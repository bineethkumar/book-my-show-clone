import React from "react";

//Components
import Navbar from "../components/NavBar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
const DefaultLayout=(props) =>{
return(
    <>
        <Navbar />
        <HeroCarousel />
        {props.children}
    </>
);
};

export default DefaultLayout;