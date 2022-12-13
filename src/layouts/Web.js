import React from "react";

import Header from "../components/web/Header";

import Footer from "../components/web/Footer";

const LayoutWeb = ({ children }) => {
    return (
        <React.Fragment>
            <Header />

            {children}

            <Footer />
        </React.Fragment>
    );
};

export default LayoutWeb