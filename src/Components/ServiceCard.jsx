import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, id, image, price, short_description } = service;
    return (
        <div className="mt-4">
            <div className="card lg:card-side glass shadow-xl ">
                <figure>
                    <img src={image} alt="Album" className="w-96 h-[200px]" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{short_description}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${id}`}>
                            <button className="btn py-1 px-2 font-semibold hover:text-[#BC246F] bg-[#BC246F] text-white border-[#BC246F]">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
};

export default ServiceCard;
