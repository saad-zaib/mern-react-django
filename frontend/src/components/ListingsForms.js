import React, { useState } from "react";
import axios from "axios";
import Oval from "react-loader-spinner";
import PropTypes from "prop-types";

function ListingsForms(props) {
  // the formdata
  const [formData, setFormData] = useState({
    sale_type: "For Sale",
    price: "$0+",
    bedrooms: "0+",
    home_type: "House",
    bathrooms: "0+",
    sqrft: "1000+",
    days_listed: "1 or less",
    has_photos: "1+",
    open_house: "true",
    keywords: "",
  });

  const {
    sale_type,
    price,
    bedrooms,
    home_type,
    bathrooms,
    sqrft,
    days_listed,
    has_photos,
    open_house,
    keywords,
  } = formData;

  const [loading, setLoading] = useState(false);

  // onChange is typically used to handle input changes

  const onChange = (e) => { //e is used as event object when value of input changes
    const { name, value } = e.target;
    // will update setFormData
    setFormData((prevData) => ({
      ...prevData, //create copy of existing formdata
      [name]: value,   //change the name to a new value
    }));
  };

  const onSubmit = (e) => {
    // ensuring that the form submission does't trigger the default behavious of reloading page 
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    // sending post data to server with the following url
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/listings/search`,
        {
          sale_type,
          price,
          bedrooms,
          home_type,
          bathrooms,
          sqrft,
          days_listed,
          has_photos,
          open_house,
          keywords,
        },
        config
      )
      // when post request is successfull
      .then((res) => {
        setLoading(false);
        // setLisiting is taken as props from service
        props.setListings(res.data);
        // scroll to top
        window.scrollTo(0, 0);
      })
      // if post request fails
      .catch((err) => {
        setLoading(false);
        // console.log(err);
        window.scrollTo(0, 0);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label
            htmlFor="sale_type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sale or Rent
          </label>
          <select
            onChange={(e) => onChange(e)}
            // value before onChange function 
            value={sale_type}
            name="sale_type"
            id="sale_type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="For Sale">Sale</option>
            <option value="For Rent">Rent</option> {/* Add values to options */}
          </select>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////// */}
        <div>
          <label
            htmlFor="sqrft"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sqrft
          </label>
          <select
            onChange={(e) => onChange(e)}
            value={sqrft}
            name="sqrft"
            id="sqrft"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>1000+</option>
            <option>1200+</option>
            <option>1500+</option>
            <option>2000+</option>
            <option>Any</option>
          </select>
        </div>
        {/* ////////////////////////////////////////////////////////// */}
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Minimum Price
          </label>
          <select
            name="price"
            onChange={(e) => onChange(e)}
            value={price}
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>$0+</option>
            <option>$200,000+</option>
            <option>$400,000+</option>
            <option>$600,000+</option>
            <option>$800,000+</option>
            <option>$1,000,000+</option>
            <option>$1,200,000+</option>
            <option>$1,500,000+</option>
            <option>Any</option>
          </select>
        </div>
        {/* //////////////////////////////////////////////////////////////////// */}

        <div>
          <label
            htmlFor="days_listed"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Days Listed
          </label>
          <select
            name="days_listed"
            onChange={(e) => onChange(e)}
            value={days_listed}
            id="days_listed"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>1 of less</option>
            <option>2 of less</option>
            <option>5 of less</option>
            <option>10 of less</option>
            <option>20 of less</option>
            <option>Any</option>
          </select>
        </div>
        {/* //////////////////////////////////// */}
        <div>
          <label
            htmlFor="bedrooms"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bedrooms
          </label>
          <select
            name="bedrooms"
            onChange={(e) => onChange(e)}
            value={bedrooms}
            id="bedrooms"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>0+</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
            <option>5+</option>
          </select>
        </div>
        {/* //////////////////////////////////////////////////////////////// */}

        <div>
          <label
            htmlFor="has_photos"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Photos
          </label>
          <select
            name="has_photos"
            onChange={(e) => onChange(e)}
            value={has_photos}
            id="has_photos"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>1+</option>
            <option>3+</option>
            <option>5+</option>
            <option>10+</option>
            <option>15+</option>
          </select>
        </div>
        {/* ///////////////////////////////////////////////////// */}
        <div>
          <label
            htmlFor="home_type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Home Type
          </label>
          <select
            name="home_type"
            onChange={(e) => onChange(e)}
            value={home_type}
            id="home_type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>House</option>
            <option>Condo</option>
            <option>Townhouse</option>
          </select>
        </div>
        {/* ////////////////////////////////////////////////// */}
        <div>
          <label
            htmlFor="bathrooms"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Baths
          </label>
          <select
            name="bathrooms"
            onChange={(e) => onChange(e)}
            value={bathrooms}
            id="bathrooms"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>0+</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="keywords"
          >
            Keywords for Location
          </label>
          <input
            type="text"
            name="keywords"
            id="keywords"
            onChange={(e) => onChange(e)}
            value={keywords}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Islamabad"
          />
        </div>
        <div className="flex flex-col items-center mt-10">
          <input
            id="default-checkbox"
            type="checkbox"
            name="open_house"
            onClick={e=>onChange(e)} value={open_house}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Open House
          </label>
        </div>
        <div className="flex flex-col items-center mt-5">
          {loading ? (
            <div className="loader-container">
              <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-gray-300"></div>
            </div>
          ) : (
            <button
              type="submit"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-300"
            >
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
ListingsForms.propTypes = {
  setListings: PropTypes.func.isRequired,
};
export default ListingsForms;
