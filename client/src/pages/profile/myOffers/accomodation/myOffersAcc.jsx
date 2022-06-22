import "./myOffersAcc.css";
import React from "react";
import Navbar from "../../../../components/navbar/navbar";
import useFetch from "../../../../hooks/useFetch.js";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";
import MyAccActiveOffers from "../../../../components/offers/accomodation/active/myActiveAccOffers.jsx";
import MyAccPassiveOffers from "../../../../components/offers/accomodation/passive/myAccPassiveOffers.jsx";
const MyOffersAcc = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error, reFetch } = useFetch(
    `/acc/getAllAccOffers/?userId=${user._id}`
  );

  return (
    <div>
      <Navbar />
      <div className="myAccOfferContainer">
        <div className="myAccOfferWrapper">
        <span className="myAccOfferTitle">Paylaştığın tüm teklifler burada.</span>
          <div className="myAccOfferResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map(
                  (item) =>
                    item.isActive === true && (
                      <MyAccActiveOffers item={item} user={user} key={item._id} />
                    )
                )}

                {data.map(
                  (item) =>
                    item.isActive === false && (
                      <MyAccPassiveOffers item={item} user={user} key={item._id} />
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

export default MyOffersAcc;
