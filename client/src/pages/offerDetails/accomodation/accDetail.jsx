import React from "react";
import "./accDetail.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import useFetch from "../../../hooks/useFetch.js";
import { useLocation } from "react-router";
import moment from "moment";

const AccDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/acc/get/${id}`);

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
                    <h4 className="accDetailNameSurname">{data.name} {data.surname}</h4>
                  </div>
                </div>
                <h1 className="accDetailPrice">{data.price}</h1>
              </div>
              <div className="accDetailDownContainer">
                <div className="accDetailDownLeft">
                  <div className="accDetailDownLeftString">
                    <div className="accDetailDownLeftStringBox1">
                      <span className="accDetailDepartureDate">
                        Konaklama Aralığı: {moment(data.bookingdate).format("DD.MM.YYYY")} - {moment(data.leavingdate).format("DD.MM.YYYY")}
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

                  <textarea className="accDetailDescription ">{data.description}</textarea>
                </div>
                <div className="accDetailDownRight">
                  <button className="accReserve">Reserve et</button>
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
