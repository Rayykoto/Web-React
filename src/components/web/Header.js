import React, { useState, useEffect } from "react";

import { ReactComponent as Logo } from '../../assets/images/koto-01.svg';

import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
} from 'react-bootstrap';

//import link router dom
import { Link } from "react-router-dom";

//import base url API
import Api from "../../api";

function WebHeader() {

    //state categories
    const [categories, setCategories] = useState([]);

    //function fetching data categories
    const fetchDataCategories = async () => {

        //fetching rest API "categories"
        await Api.get('/api/web/categories')
        .then((response) => {

            //set data to state
            setCategories(response.data.data);
        });
    }

    //hook
    useEffect(() => {

        //call function "fetchDataCategories"
        fetchDataCategories();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" className="navbar-custom shadow-sm" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-white"><Logo width={"60px"}/>KOTO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavDropdown title={<span><i className="fa fa-list-ul"></i> CATEGORIES</span> } id="collasible-nav-dropdown" className="fw-bold text-white">
                            {
                            categories.map((category) => (
                                <NavDropdown.Item as={Link} to={`/category/${category.slug}`} key={category.id}><img src={category.image} style={{ width: "35px" }} alt=""/> {category.name.toUpperCase()}</NavDropdown.Item>
                            ))
                            }
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/post/direction">LIHAT LAINNYA <i className="fa fa-long-arrow-alt-right"></i></NavDropdown.Item>
                        </NavDropdown>
                            <Nav.Link as={Link} to="/places" className="fw-bold text-white"><i className="fa fa-globe-asia"></i> PLACES</Nav.Link>
                            <Nav.Link as={Link} to="/webs" className="fw-bold text-white"><i className="fa fa-map"></i> WEBS</Nav.Link>    
                    </Nav>
                    <Nav>
                        <Nav.Link className="fw-bold text-white me-4"><i className="fa fa-search"></i> SEARCH</Nav.Link>
                        <Link to="/admin/login" className="btn btn-md btn-light"><i className="fa fa-lock"></i> LOGIN</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default WebHeader;