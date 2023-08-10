import React, { useEffect, useState } from "react";
import { HelmetProvider,Helmet } from "react-helmet-async";
import axios from "axios";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
function Services() {
  const [listings, setListings] = useState([]);    //for lisitng items
  const [count, setCount] = useState(1);   //for pagination
  const [previous, setPrevious] = useState("");  //for pagination
  const [next, setNext] = useState("");  //for  pagination
  const [active, setActive] = useState(1);  //for pagination

  // component did mount effect
  useEffect(() => {
    // when user scroll and then click on a link then the user will be on the top and the scroll will be 0 0 for that page
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        // "http://localhost:8000/api/listings/?page=1"  => check for the data on this page
        const res = await axios.get(
          "http://localhost:8000/api/listings/?page=1"
        );
        setListings(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);
      } catch (err) {
        console.log(
          "An error occured when get data in the lising line 27 in Service"
        );
      }
    };
    fetchData();
  }, []);
// an array of three card in a row 
  const displayListing = () => {
    let result = [];

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div key={`row-${i}`} className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            {listings[i] ? (
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

  //  when visiting page
  const visitPage = (page) => {
    axios
      .get(`http://localhost:8000/api/lisitings/?page=${page}`)
      // get the then data
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(res.data.active);
      })
      .catch((err) => {
        console.log(
          "Error when geting data of previos and next at line 89 in Service "
        );
      });
  };

//  previous page 
  const previous_number = () => {
    axios
      .get(previous)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (previous) {
          // Go to active -1 page
          setActive(active - 1);
        }
      })
      .catch((err) => {
        console.log("Error when going to previous page");
      });
  };
//  next page
  const next_number = () => {
    axios
      .get(next)
      .then((res) => {
        setListings(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (next) {
          // Go to active +1 page
          setActive(active + 1);
        }
      })
      .catch((err) => {
        console.log("Error when going to next page");
      });
  };

  return (
   <HelmetProvider>
     <div>
      <Helmet>
        <title>Real e state -Service</title>
        <meta name="description" content="Listing Page"></meta>
      </Helmet>
      <section className="listings__listings">{displayListing()}</section>
      <section className="listings__pagination">
        <div className="row">
          <Pagination
            itemsPerPage={3}
            // count={count}
            visitPage={visitPage}
            previous={previous_number}
            next={next_number}
            active={active}
            setActive={setActive}
          />
        </div>
      </section>
    </div>
   </HelmetProvider>
  );
}

export default Services;
