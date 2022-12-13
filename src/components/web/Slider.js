//import hook useState and useEffect from react
import React, { useState, useEffect } from "react";

//import component carousel
import { Carousel } from "react-bootstrap";

//import BASE URL API
import Api from "../../api";

function Slider() {

    //state sliders
    const [sliders, setSliders] = useState([]);

    //function "fetchDataSliders"
    const fetchDataSliders = async () => {

        //fetching Rest API "sliders"
        await Api.get('/api/web/sliders')
            .then((response) => {

                //set data to state
                setSliders(response.data.data);
            });
    }

    //hook
    useEffect(() => {

        //call function "fetchDataSliders"
        fetchDataSliders();

    }, []);

    return (
        <Carousel prevIcon={<i className="fa fa-chevron-left fa-lg carousel-custom text-dark shadow"></i>} nextIcon={<i className="fa fa-chevron-right fa-lg carousel-custom text-dark shadow"></i>}>
            {sliders.map((slider) => (
                <Carousel.Item key={slider.id}>
                    <img className="d-block w-100" src={slider.image} style={{ height: "575px", objectFit: "cover" }}  alt="First slide"/>
                </Carousel.Item>
            ))}
        </Carousel>
    )

}

export default Slider;