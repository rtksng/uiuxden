import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import knowledgerblack from "../../assets/Knowledgerblack.svg";
import kd from "../../assets/kd.png";
import stackBg from "../../assets/stackbg.png";
import Footer from "../../components/Footer";
import cbg from "../../assets/cbg.png";
import kl from "../../assets/kl.png";
import rightBar from "../../assets/rightbar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import klogin from "../../assets/klogin.png";
import { useRef, useState } from "react";
import laptop from "../../assets/laptop.png";




const Elyments = () => {
    const [centerIndex, setCenterIndex] = useState(0);


    return (
        <main>
            <Navbar />

            <h1>
                Elyments
            </h1>
        </main>
    );
};

export default Elyments;


