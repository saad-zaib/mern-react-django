import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card(props) {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div >
      {/* when clicked on that card go to the link of that card that is made of slug of that item */}
      <Link className="card__link" to={`/listings/${props.slug}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            <div style={{width:"200vh"}} className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <img
                  className="bg-cover bg-center h-56 p-4"
                  // getting  photo as props
                  src={props.photo_main}
                />
                  <div className="flex justify-end">
                    <svg
                      className="h-6 w-6 text-white fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
                    </svg>
                  </div>
                
                <div className="p-4">
                  <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                    {props.home_type} • {props.sqrft} sqrft
                  </p>
                  <p className="text-3xl text-gray-900">${props.price}</p>
                  <p className="text-gray-700">{props.address}</p>
                </div>
                <div className="flex p-4 border-t border-gray-300 text-gray-700">
                  <div className="flex-1 inline-flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-600 fill-current mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {/* ... */}
                    </svg>
                    <p>
                      <span className="text-gray-900 font-bold">
                        {props.bedrooms}
                      </span>{" "}
                      Bedrooms
                    </p>
                  </div>
                  <div className="flex-1 inline-flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-600 fill-current mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"

                    >
                      {/* ... */}
                    </svg>
                    <p>
                      <span className="text-gray-900 font-bold">

                        {props.bathrooms}
                      </span>{" "}
                      Bathrooms
                    </p>
                  </div>
                </div>
                <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                  <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                    Home For
                  </div>
                  <div className="flex items-center pt-2">
                    <div
                      className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                      style={{
                        backgroundImage:
                          "url(https://via.placeholder.com/50x50)",
                      }}
                    ></div>
                    <div>
                      <p className="font-bold text-gray-900">
                        {props.sale_type}
                      </p>
                      <p className="text-sm text-gray-700">(111) 111-1111</p>
                    </div>
                  </div>
                  {/* Add the remaining div here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

Card.propTypes = {
// design to recieve specific props
  title: PropTypes.string.isRequired,
  photo_main: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  sale_type: PropTypes.string.isRequired,
  home_type: PropTypes.string.isRequired,
  sqrft: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
