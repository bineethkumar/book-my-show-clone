import React from "react";

//Components
import Navbar from "../components/NavBar/navbar.component";
const DefaultLayout=(props) =>{
return(
    <>
        <Navbar />
        {props.children}
    </>
);
};

export default DefaultLayout;