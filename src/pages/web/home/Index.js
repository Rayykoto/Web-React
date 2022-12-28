import React, { useState, useEffect} from "react";

import LayoutWeb from "../../../layouts/Web";

import Slider from '../../../components/web/Slider';

import Api from "../../../api";

import CardCategory from "../../../components/utilities/CardCategory";

function Home() {

    //title
    document.title = "HIDDEN GEMS - WEBSITE KOTO";
    
    //state categories
    const [categories, setCategories] = useState([]);

    //function fetchData categories
    const fetchDataCategories = async () => {
        //fetching rest api
        await Api.get('/api/web/categories')
        .then((response) => {
            
            //set data to state
            setCategories(response.data.data)
        })
    }

    //hook
    useEffect(() => {

        //call fetchdata categories
        fetchDataCategories();

    }, []);

    return (
        <React.Fragment>
            <LayoutWeb>

                <Slider />

                <testimonials />

                <div className="container mb-5">
                    <div className="row mt-minus-87">
                        <div className="col-md-12">
                            <div className="card border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h5>
                                        <i className="fa fa-search"></i> Find Your Healing Place!
                                    </h5>
                                    <p>
                                        Find a Staycation Place With Your Friends!
                                    </p>
                                    <hr />
                                    <input type="text" className="form-control" placeholder="Find Your Destination Here!"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        {
                            categories.map((category) => (
                                <CardCategory
                                key={category.id}
                                name={category.name}
                                slug={category.slug}
                                image={category.image}
                                />
                            ))
                        }
                    </div>
                </div>
            </LayoutWeb>
        </React.Fragment>
    );
}

export default Home;