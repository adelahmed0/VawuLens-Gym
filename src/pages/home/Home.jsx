import React from 'react'
import './Home.css'
import MainHeader from "../../components/mainHeader/MainHeader";
import Programs from "../../components/programs/Programs";
import Values from "../../components/Values/Values";
import Faqs from "../../components/Faqs/Faqs";
import Testimonials from "../../components/Testimonials/Testmonials";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <MainHeader/>
            <Programs/>
            <Values/>
            <Faqs/>
            <Testimonials/>
        </>
    )
}
export default Home;
