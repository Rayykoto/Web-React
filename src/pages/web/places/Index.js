import React, { useState, useEffect } from "react";

import LayoutWeb from "../../../layouts/Web";

import Api from "../../../api";

import CardWeb from "../../../components/utilities/CardWeb";

import PaginationComponent from "../../../components/utilities/Pagination";

function WebPlacesIndex() {

    //title page
    document.title = "Places - Website Healing";

    //state webs
    const [places, setPlaces] = useState([]);

    //state cuurentPage
    const [currentPage, setCurrentPage] = useState(1);

    //state perPage
    const [perPage, setPerPage] = useState(0);

    //state total
    const [total, setTotal] = useState(0);

    //function "fetchDataPlaces"
    const fetchDataPlaces = async (pageNumber) => {

        //define variable "page"
        const page = pageNumber ? pageNumber : currentPage

        //fetching rest api
        await Api.get(`/api/web/webs?page=${page}`)
            .then((response) => {

                //set data to state
                setPlaces(response.data.data.data);

                //set currentPage
                setCurrentPage(response.data.data.current_page);

                //set perPage
                setPerPage(response.data.data.per_page);

                //total
                setTotal(response.data.data.total);

            })
    }

    //hook
    useEffect(() => {

        //call function "fetchDataPlaces"
        fetchDataPlaces();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <React.Fragment>
            <LayoutWeb>
                <div className="container mt-80">
                   <div className="row">
                    {
                        places.length > 0 
                            ? places.map((place) => (
                                <CardWeb
                                    key={place.id}
                                    id={place.id}
                                    slug={place.slug}
                                    title={place.title}
                                    images={place.images}
                                    address={place.address}                                
                                />
                            ))
                            : <div className="alert alert-danger border-0 rounded shadow-sm" role="alert">
                                <strong>Opps..!</strong> Data Belum Tersedia!.
                              </div>
                    }
                   </div>
                   <PaginationComponent
                        currentPage={currentPage}
                        perPage={perPage}
                        total={total}
                        onChange={(pageNumber) => fetchDataPlaces(pageNumber)}
                        position="center"
                    />
                </div>
            </LayoutWeb>
        </React.Fragment>
    )
}

export default WebPlacesIndex;