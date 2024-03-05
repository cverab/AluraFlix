import React from "react"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VideoCard from "../VideoCard";

const settings = {
    dots: false, // Ocultar indicadores de paginación
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true, // Habilitar el desplazamiento al deslizar con el ratón o el dedo
    variableWidth: true,
};

const Carrusel = () => {
    return (
        <Slider {...settings}>
            <div>
                <VideoCard />
            </div>
            <div>
                <VideoCard />
            </div>
            <div>
                <VideoCard />
            </div>
            {/* Agregar más elementos según sea necesario */}
        </Slider>
    );
};

export default Carrusel