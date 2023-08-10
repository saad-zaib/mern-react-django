import React from "react";
import Card from "./Card";

// taking listings prop
const Listings = ({ listings }) => {
  const getListings = () => {
    let result = [];
    // iterates over the listings array and creates groups of three listings per row
    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div key={`row-${i}`} className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            {listings[i] ? (
              // the below items are passed as props to card
              <Card
                title={listings[i].title}
                address={listings[i].address}
                city={listings[i].city}
                state={listings[i].state}
                price={listings[i].price}
                sale_type={listings[i].sale_type}
                home_type={listings[i].home_type}
                bedrooms={listings[i].bedrooms}
                bathrooms={listings[i].bathrooms}
                sqrft={listings[i].sqrft}
                photo_main={listings[i].photo_main}
                slug={listings[i].slug}
              />
            ) : null}
          </div>
          <div className="col-span-1">
            {listings[i + 1] ? (
              <Card
                title={listings[i + 1].title}
                address={listings[i + 1].address}
                city={listings[i + 1].city}
                state={listings[i + 1].state}
                price={listings[i + 1].price}
                sale_type={listings[i + 1].sale_type}
                home_type={listings[i + 1].home_type}
                bedrooms={listings[i + 1].bedrooms}
                bathrooms={listings[i + 1].bathrooms}
                sqrft={listings[i + 1].sqrft}
                photo_main={listings[i + 1].photo_main}
                slug={listings[i + 1].slug}
              />
            ) : null}
          </div>
          <div className="col-span-1">
            {listings[i + 2] ? (
              <Card
                title={listings[i + 2].title}
                address={listings[i + 2].address}
                city={listings[i + 2].city}
                state={listings[i + 2].state}
                price={listings[i + 2].price}
                sale_type={listings[i + 2].sale_type}
                home_type={listings[i + 2].home_type}
                bedrooms={listings[i + 2].bedrooms}
                bathrooms={listings[i + 2].bathrooms}
                sqrft={listings[i + 2].sqrft}
                photo_main={listings[i + 2].photo_main}
                slug={listings[i + 2].slug}
              />
            ) : null}
          </div>
        </div>
      );
    }

    return result;
  };
// compoent take an array of property listing as input and displays where each row contain upto three lisitings using the card component present 
  return <div>{getListings()}</div>;
};

export default Listings;
