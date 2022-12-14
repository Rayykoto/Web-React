import { Link } from "react-router-dom";

function CardCategory(props){

    return (
        <div className="col-6 col-md-3 mb-4" key={props.id}>
            <Link to={`/category/${props.slug}`} className="text-decoration-none text-dark">
                <div className="card h-100 border-0 rounded shadow-sm">
                    <div className="card-body text-center">
                        <img src={props.image} style={{ width: "80px" }} alt=""/>
                        <hr />
                        <h6>{props.name.toUpperCase()}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardCategory;