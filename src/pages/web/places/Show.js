import React, { useEffect, useState, } from "react";

import { Link, useParams } from "react-router-dom";

import LayoutWeb from "../../../layouts/Web";

import Api from "../../../api";

function WebPlacesShow() {

    //state places
    const [place, setPlace] = useState({});

    //slug params
    const { slug }  = useParams();

    //function fetchdataplace
    const fetchDataPlace = async () => {
        //fetching Rest Api
        await Api.get(`/api/web/webs/${slug}`)
        .then((response) => {

            //set data to state "places"
            setPlace(response.data.data);

            //document tittle
            document.title = `${response.data.data.data.title} - Website Healing`
        });
    };

    //hook
    useEffect(() => {
        //call function
        fetchDataPlace();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <React.Fragment>
            <LayoutWeb>
                <div className="container mt-80">
                    Halaman Places Show
                </div>
            </LayoutWeb>
        </React.Fragment>
    )
}

export default WebPlacesShow;