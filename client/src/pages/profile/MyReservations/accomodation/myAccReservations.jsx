import "./myAccReservations.css";
import React from "react";
import Navbar from "../../../../components/navbar/navbar.jsx";
import AccActiveRsvItem from "../../../../components/reservations/accomodation/active/accActiveRsv.jsx";
import AccPassiveRsvItem from "../../../../components/reservations/accomodation/passive/accPassiveRsv.jsx";
import useFetch from "../../../../hooks/useFetch.js";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";

const MyAccReservations = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error, reFetch } = useFetch(
    `/acc/get/accReservations/?userId=${user._id}`
  );

  return (
    <div>
      <Navbar />
      <div className="rsvAccContainer">
        <div className="rsvAccWrapper">
        <span className="rsvTitle">Aktif olan rezervasyonlarını iptal edebilir veya geçmiş rezervasyonlarını görüntüleyebilirsin.</span>
          <div className="rsvAccResult">
            {loading ? (
              ""
            ) : (
              <>
                {data.map(
                  (item) =>
                    item.isActive === true && (
                      <AccActiveRsvItem item={item} user={user} key={item._id} />
                    )
                )}

                {data.map(
                  (item) =>
                    item.isActive === false && (
                      <AccPassiveRsvItem item={item} user={user} key={item._id} />
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

export default MyAccReservations;
