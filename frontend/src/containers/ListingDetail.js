import React, { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";

const ListingDetail = (props) => {
  const [listing, setListing] = useState({});
  const [realtor, setRealtor] = useState({});
  const [price, setPrice] = useState(0);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const { slug } = useParams();
  useEffect(() => {
    // Retrieve token from localStorage
    const { access_token, refresh_token } = getToken();
    console.log("Slug:", slug);
    // Check if token is available
    if (access_token) {
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      };
      if (!slug) {
        console.log("Slug is undefined, skipping API request.");
        return;
      }

      // Make API request to fetch listing details
      axios.get(`${process.env.REACT_APP_API_URL}/api/listings/${slug}`, config)
        .then((res) => {
          setListing(res.data);
          console.log(res.data);
          setPrice(numberWithCommas(res.data.price));
        })
        .catch((err) => {
          console.error("Error fetching listing:", err);
        });
    }
  }, [slug]);

  useEffect(() => {
    // using asuync
    const fetchRealtorData = async () => {
      try {
        if (listing.realtor) {
          const { access_token } = getToken();
          const config = {
            headers: {
              // access token authentication but it won't work
              Authorization: `Bearer ${access_token}`,
            },
          };
  
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/realtors/${listing.realtor}`,
            config
          );
  
          if (response.data.results && response.data.results.length > 0) {
            // Find the realtor whose id matches the listing.realtor value
            const realtorForListing = response.data.results.find(
              (realtor) => realtor.id === listing.realtor
            );
  
            if (realtorForListing) {
              setRealtor(realtorForListing);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching realtor:", error);
      }
    };
  
    fetchRealtorData();
  }, [listing.realtor]);
  
  

  const displayInteriorImages = () => {
    let images = [];

    images.push(
      <div key={1} className="row">
        <div className="col-1-of-3">
          {listing.photo_1 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_1}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_2 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_2}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_3 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_3}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={2} className="row">
        <div className="col-1-of-3">
          {listing.photo_4 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_4}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_5 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_5}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_6 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_6}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={3} className="row">
        <div className="col-1-of-3">
          {listing.photo_7 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_7}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_8 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_8}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_9 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_9}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={4} className="row">
        <div className="col-1-of-3">
          {listing.photo_10 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_10}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_12 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_11}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_12 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_12}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={5} className="row">
        <div className="col-1-of-3">
          {listing.photo_13 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_13}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_14 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_14}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_15 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_15}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={6} className="row">
        <div className="col-1-of-3">
          {listing.photo_16 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_16}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_17 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_17}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_18 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_18}
                alt=""
              />
            </div>
          ) : null}
        </div>
      </div>
    );

    images.push(
      <div key={7} className="row">
        <div className="col-1-of-3">
          {listing.photo_19 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_19}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3">
          {listing.photo_20 ? (
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_20}
                alt=""
              />
            </div>
          ) : null}
        </div>
        <div className="col-1-of-3"></div>
      </div>
    );

    return images;
  };

  return (
    <HelmetProvider>
      <div className="listingdetail">
        <Helmet>
          <title>Realest Estate - Listing | {`${listing.title}`}</title>
          <meta name="description" content="Listing detail" />
        </Helmet>
        <div className="listingdetail__header">
          <h1 className="listingdetail__title">{listing.title}</h1>
          <p className="listingdetail__location">
            {listing.city}, {listing.state}, {listing.zipcode}
          </p>
        </div>
        <div className="row">
          <div className="listingdetail__breadcrumb">
            <Link className="listingdetail__breadcrumb__link" to="/">
              Home
            </Link>{" "}
            / {listing.title}
          </div>
        </div>
        <div className="row">
          <div className="col-3-of-4">
            <div className="listingdetail__display">
              <img
                className="listingdetail__display__image"
                src={listing.photo_main}
                alt=""
              />
            </div>
          </div>
          <div className="col-1-of-4">
  {realtor ? (
    <>
      <div className="listingdetail__display">
        <img
          className="listingdetail__display__image"
          src={realtor.photo}
          alt=""
        />
      </div>
      <h3 className="listingdetail__realtor">{realtor.name}</h3>
      <p className="listingdetail__contact">{realtor.phone}</p>
      <p className="listingdetail__contact">{realtor.email}</p>
      <p className="listingdetail__about">{realtor.description}</p>
    </>
  ) : (
    <p>Loading realtor data...</p>
  )}
</div>

        </div>
        <div className="row">
          <div className="col-1-of-2">
            <ul className="listingdetail__list">
              <li className="listingdetail__list__item">
                Home Type: {listing.home_type}
              </li>
              <li className="listingdetail__list__item">Price: ${price}</li>
              <li className="listingdetail__list__item">
                Bedrooms: {listing.bedrooms}
              </li>
              <li className="listingdetail__list__item">
                Bathrooms: {listing.bathrooms}
              </li>
              <li className="listingdetail__list__item">
                Square Feet: {listing.sqft}
              </li>
            </ul>
          </div>
          <div className="col-1-of-2">
            <ul className="listingdetail__list">
              <li className="listingdetail__list__item">
                Sale Type: {listing.sale_type}
              </li>
              <li className="listingdetail__list__item">
                Address: {listing.address}
              </li>
              <li className="listingdetail__list__item">
                City: {listing.city}
              </li>
              <li className="listingdetail__list__item">
                State: {listing.state}
              </li>
              <li className="listingdetail__list__item">
                Zipcode: {listing.zipcode}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="listingdetail__description">{listing.description}</p>
        </div>
        {displayInteriorImages()}
      </div>
    </HelmetProvider>
  );
};

export default ListingDetail;
