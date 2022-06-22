import "./myOffersTravel.css";
import React from "react";
import Navbar from "../../../../components/navbar/navbar";
import useFetch from "../../../../hooks/useFetch.js";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";
import MyTravelActiveOffers from "../../../../components/offers/travel/active/travelActiveOffers.jsx";
import MyTravelPassiveOffers from "../../../../components/offers/travel/passive/travelPassiveOffers.jsx";

const MyOffersTravel = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error, reFetch } = useFetch(
    `/travel/getAllTravelOffers/?userId=${user._id}`
  );

  return (
    <div>
      <Navbar />
      <div className="myTravelOfferContainer">
        <div className="myTravelOfferWrapper">
          <span className="myTravelOfferTitle">
            Paylaştığın tüm teklifler burada.
          </span>
          <div className="myTravelOfferResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map(
                  (item) =>
                    item.isActive === true && (
                      <MyTravelActiveOffers
                        item={item}
                        user={user}
                        key={item._id}
                      />
                    )
                )}

                {data.map(
                  (item) =>
                    item.isActive === false && (
                      <MyTravelPassiveOffers
                        item={item}
                        user={user}
                        key={item._id}
                      />
                    )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOffersTravel;
