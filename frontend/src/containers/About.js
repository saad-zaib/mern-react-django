import React, { useState, Fragment, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";
import Image from "../assets/image.jpg";
function About() {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors,setRealtor] = useState([])

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getTopSeller = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/realtors/topseller`,
          config
        );
        setTopSeller(res.data);
      } catch (err) {
        console.log("Error when fetching top seller data at line 24 in about")
      }
    };

    getTopSeller();
  }, []);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getRealtors = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/realtors/`,
          config
        );
        setRealtor(res.data.realtors);
      } catch (err) {
        console.log("Error when fetching zamendar data at line 46 in about")
      }
    };

    getRealtors();
  }, []);

  const getAllRealtors = () => {
    let allRealtors = [];
    let results = [];

    // Check if realtors is defined and not empty
    if (realtors && realtors.length > 0) {
        Array.from(realtors).map((realtor) => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });
    }
  
    for (let i = 0; i < allRealtors.length; i += 3) {
        results.push(
            <div key={i} className='row'>
                <div className='col-1-of-3'>
                    {allRealtors[i]}
                </div>
                <div className='col-1-of-3'>
                    {allRealtors[i+1] ? allRealtors[i+1] : null}
                </div>
                <div className='col-1-of-3'>
                    {allRealtors[i+2] ? allRealtors[i+2] : null}
                </div>
            </div>
        );
    }

    return results;
};
  
  const getTopSeller = () => {
    let result = [];

    topSeller.map((seller) => {
      return result.push(
        <Fragment key={seller.id}>
          <div className="about__display">
            <img className="about__display__image" src={seller.photo} alt="" />
          </div>
          <h3 className="about__topseller">Top Seller:</h3>
          <p className="about__realtor">{seller.name}</p>
          <p className="about__contact">{seller.phone}</p>
          <p className="about__contact">{seller.email}</p>
          <p className="about__about">{seller.description}</p>
        </Fragment>
      );
    });

    return result;
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Real e State | About</title>
          <meta name="description" content="About us" />
        </Helmet>
      </HelmetProvider>
      <header>
        <h1>About Real e state</h1>
      </header>
      <section>
        {" "}
        <div>
          <div>
            <h2>We Find the home for you</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              molestie non sem quis ullamcorper. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Cras non quam lacus. Morbi cursus odio eget mauris dictum
              scelerisque. Duis consectetur pretium augue, in iaculis ante
              imperdiet ac. In imperdiet ante quam, gravida luctus lectus
              interdum ut. Curabitur dignissim augue purus, vitae laoreet augue
              rhoncus in. Aenean odio lorem, volutpat at dictum rutrum,
              consectetur pharetra orci. Sed ut fermentum ipsum. Duis a urna nec
              sapien tempus auctor.
            </p>
          </div>

          <div>
            <img src={Image} alt="image"></img>
          </div>
          <p>
            Mauris et erat arcu. Cras id lectus nisi. Maecenas facilisis risus
            ut purus ultrices pretium. Morbi semper nisl quis eros imperdiet
            bibendum. Vivamus pharetra eros quis tellus dictum aliquam. Donec
            volutpat semper lorem, quis congue elit luctus eget. Nam maximus
            pellentesque faucibus.{" "}
          </p>
          <div>{getTopSeller()}</div>
        </div>
      </section>
      <section>
        <div>
          <h2>Meet our Team</h2>
          {getAllRealtors()}
        </div>
      </section>
    </div>
  );
}

export default About;
