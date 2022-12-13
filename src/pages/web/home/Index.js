import React from "react";

import LayoutWeb from "../../../layouts/Web";

import Slider from '../../../components/web/Slider';

function Home() {
    return (
        <React.Fragment>
            <LayoutWeb>

                <Slider />

                <div className="container mt-5">
                    <h1> Home </h1>
                </div>
            </LayoutWeb>
        </React.Fragment>
    );
}

export default Home;