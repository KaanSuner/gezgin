
import "./myTravelReservations.css";
import React from "react";
import Navbar from "../../../../components/navbar/navbar.jsx";
import TravelActiveRsvItem from "../../../../components/reservations/travel/active/travelActiveRsv.jsx";
import TravelPassiveRsvItem from "../../../../components/reservations/travel/passive/travelPassiveRsv.jsx";
import useFetch from "../../../../hooks/useFetch.js";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";

const MyTravelReservations = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error, reFetch } = useFetch(
    `/travel/get/travelReservations/?userId=${user._id}`
  );

  return (
    <div>
      <Navbar />
      <div className="rsvTravelContainer">
        <div className="rsvTravelWrapper">
        <span className="rsvTitle">Aktif olan rezervasyonlarını iptal edebilir veya geçmiş rezervasyonlarını görüntüleyebilirsin.</span>
          <div className="rsvTravelResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map(
                  (item) =>
                    item.isActive === true && (
                      <TravelActiveRsvItem item={item} user={user} key={item._id} />
                    )
                )}

                {data.map(
                  (item) =>
                    item.isActive === false && (
                      <TravelPassiveRsvItem item={item} user={user} key={item._id} />
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

export default MyTravelReservations;
