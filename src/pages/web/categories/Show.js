import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Api from "../../../api";

import CardWeb from "../../../components/utilities/CardWeb";

import LayoutWeb from "../../../layouts/Web";

function WebCategoryShow() {

    const [category, setCategory] = useState({});

    const [webs, setWebs] = useState([]);

    //get params from URL
    const { slug } = useParams();

    //function "fetchDataCategories"
    const fetchDataCategory = async () => {

        //fetching rest API
        await Api.get(`/api/web/categories/${slug}`)
        .then((response) => {

            //set data to state category
            setCategory(response.data.data);

            //set data to state place
            setWebs(response.data.data.webs);

            //set title for page
            document.title = `Category : ${response.data.data.name} - Website Healing`;
        })
    }

    //hook
    useEffect(() => {
        //call function "fetchDataCategories"
        fetchDataCategory();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    return(
        <React.Fragment>
            <LayoutWeb>
                <div className="container mt-80">
                <div className="row">
                        <div className="col-md-12">
                            <h4>CATEGORY : <strong className="text-uppercase">{category.name}</strong></h4>
                            <hr />
                        </div>
                        {
                            webs.length > 0
                                ? webs.map((web) => (
                                    <CardWeb
                                        key={web.id}
                                        id={web.id}
                                        slug={web.slug}
                                        title={web.title}
                                        images={web.images}
                                        address={web.address}
                                        description={web.description}
                                    />
                                ))
                                : <div className="alert alert-danger border-0 rounded shadow-sm" role="alert">
                                    <strong>Opps...!</strong> Data Belum Tersedia!.
                                  </div>
                        }
                    </div>
                </div>
            </LayoutWeb>
        </React.Fragment>
    )
}

export default WebCategoryShow;