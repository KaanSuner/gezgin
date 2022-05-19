import TopbarCar from "../../../../components/topbar/car/TopbarCar";
import "./welcomeCar.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import avatar from "./avatar.jpg";

const List = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <TopbarCar type="list" />
      <div className="container">
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listResult">
              {/* ilan verenlerin listesi çekilecek  her bir sorgu card olacak*/}

              <a href="">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                        <span><strong>Tarih: </strong> 19/05/2022</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-2">
                    <p className="fs-4 fw-bolder fiyat">39,00 TL</p>
                  </div>
                </div>
              </div>
              </a>
              
            </div>
            <div className="listSearch">
              <h1 className="lsTitle"> Yolculuk Ara</h1>
              <div className="lsItem">
                <label>Yolculuk Zamanı</label>
                {/* <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} `}</span> */}
                <input type="date" onChange={e=>setDate(e.target.value )}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;