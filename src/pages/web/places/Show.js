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
            document.title = `${response.data.data.title} - Website Healing`
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
                    <div className="row">
                        <div className="col-md-7 mb-4">
                            <div className="card border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h4>{place.title}</h4>
                                    <span className="card-text">
                                        <i className="fa fa-map-marker"> <i> {place.address}</i></i>
                                    </span>
                                    <hr />
                                    <div dangerouslySetInnerHTML={{ __html: place.description }} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-4">
                            <div className="card border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h5>
                                        <i className="fa fa-map-marked-alt"></i> MAPS
                                    </h5>
                                    <hr />
                                </div>
                                <hr />
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-2 col-2">
                                            <div className="icon-info-green">
                                                <i className="fa fa-map-marker-alt"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="capt-info fw-bold">ADDRESS</div>
                                            <div className="sub-title-info"><i>{place.address}</i></div>
                                        </div>
                                        <div className="col-md-2 col-2">
                                            <div className="icon-info-green">
                                                <i className="fa fa-clock"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="capt-info fw-bold">OFFICE HOURS</div>
                                            <div className="sub-title-info">{place.office_hours}</div>
                                        </div>
                                        <div className="col-md-2 col-2">
                                            <div className="icon-info-green">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="capt-info fw-bold">PHONE</div>
                                            <div className="sub-title-info">{place.phone}</div>
                                        </div>
                                        <div className="col-md-2 col-2">
                                            <div className="icon-info-green">
                                                <i className="fa fa-globe-asia"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-10">
                                            <div className="capt-info fw-bold">WEBSITE</div>
                                            <div className="sub-title-info">
                                                <a href={place.website} className="text-decoration-none">{place.website}</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </LayoutWeb>
        </React.Fragment>
    )
}

export default WebPlacesShow;