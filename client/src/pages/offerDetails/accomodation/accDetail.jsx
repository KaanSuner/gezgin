import React, { useContext } from "react";
import "./accDetail.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import useFetch from "../../../hooks/useFetch.js";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import { SearchContext } from "../../../context/SearchContext.js";

const AccDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/acc/get/${id}`);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { personNumber } = useContext(SearchContext);

  const handleClick = async (e) => {
    e.preventDefault();

    if (data.userId !== user._id) {
      if (!data.bookers.includes(user._id)) {
        if (personNumber.adult <= data.unReserveSeats) {
          try {
            for (let i = 0; i < personNumber.adult; i++) {
              await axios.put(`/acc/reserve/${id}/${user._id}`);
            }
            await axios.put(`/acc/updateMyAccreservation/${user._id}/${id}/${personNumber.adult}`);
            navigate("/Profile");
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log("no available seat");
        }
      } else {
        console.log("You have already a reservation");
      }
    } else {
      console.log("You cannot book your own travel offer.");
    }
  };

  return (
    <div>
      <Navbar />
      {loading ? (
        ""
      ) : (
        <div className="accDetailContainer">
          <div className="accDetailWrapper">
            <h2 className="accDetailTitle">Seçtiğin Teklif</h2>
            <div className="accDetailBox">
              <div className="accDetailUpperContainer">
                <div className="accDetailUserInfo">
                  <img
                    src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                    alt=""
                    className="accDetailAvatar"
                  />
                  <div className="accDetailUserInfoStringBox">
                    <h3 className="accDetailUsername">{data.username}</h3>
                    <h4 className="accDetailNameSurname">
                      {data.name} {data.surname}
                    </h4>
                  </div>
                </div>
                <h1 className="accDetailPrice">{data.price}</h1>
              </div>
              <div className="accDetailDownContainer">
                <div className="accDetailDownLeft">
                  <div className="accDetailDownLeftString">
                    <div className="accDetailDownLeftStringBox1">
                      <span className="accDetailDepartureDate">
                        Konaklama Aralığı: {data.bookingdate} - {data.leavingdate}
                      </span>
                      <span className="accDetailUserPhone">
                        İletişim: {data.phone}
                      </span>
                    </div>
                    <div className="accDetailDownLeftStringBox2">
                      <span className="accDetailAvailability">
                        Müsaitlik: {data.reserveSeats} / {data.maxperson}
                      </span>
                    </div>
                  </div>

                  <span className="accDetailDescription ">
                    {data.description}
                  </span>
                </div>
                <div className="accDetailDownRight">
                  <button className="accReserve" onClick={handleClick}>
                    Reserve et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccDetail;
