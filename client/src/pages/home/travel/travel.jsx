import Navbar from "../../../components/navbar/Navbar";
import "./travel.css";
import React from "react";
import { DateRange } from "react-date-range";
import  { useState, useEffect } from "react";
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

  const [count ,setCount] = useState(0)
  const arttır = () => {
    setCount(count + 1 );
  };

  const azalt = () => {
    if(count === 0) {
        return;
    }
    setCount(count-1);
};

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listResult">
              {/* ilan verenlerin listesi çekilecek  her bir sorgu card olacak*/}

              <a href="../../../SelectTravel">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 20/05/2022</span> <br />
                        <span><strong>Boş koltuk: </strong> 1</span> <br />                        
                      </p>
                    </div>       
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                        <p className="card-text">
                          <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                        </p>
                      </div>
                  </div>
                  <div className="col-2">
                    <p className="fs-4 fw-bolder fiyat">40,00 ₺</p>
                  </div>
                </div>
              </div>
              </a>
              <a href="../../../SelectTravel">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 25/05/2022</span> <br />
                        <span><strong>Boş koltuk: </strong> 3</span> <br />                        
                      </p>
                    </div>       
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                        <p className="card-text">
                          <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                        </p>
                      </div>
                  </div>
                  <div className="col-2">
                    <p className="fs-4 fw-bolder fiyat">60,00 TL</p>
                  </div>
                </div>
              </div>
              </a>
              <a href="../../../SelectTravel">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 24/05/2022</span> <br />
                        <span><strong>Boş koltuk: </strong> 4</span> <br />                        
                      </p>
                    </div>       
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                        <p className="card-text">
                          <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                        </p>
                      </div>
                  </div>
                  <div className="col-2">
                    <p className="fs-4 fw-bolder fiyat">55,00 TL</p>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div className="listSearch">
              <h1 className="lsTitle"> Yolculuk Ara</h1>
              <div className="lsItem">
                <label> <strong> Yolculuk Zamanı </strong> </label>
                {/* <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} `}</span> */}
                <input type="date" onChange={e=>setDate(e.target.value )}/>
                <strong>Nereden </strong>
                <select name="state" className="form-control" id="">
                  <option > -- Sehir Seç -- </option>
                  <option > Antalya </option>
                </select>
                <strong>Nereye </strong>
                <select name="state" className="form-control" id="">
                  <option > -- Sehir Seç -- </option>
                  <option > İstanbul </option>
                </select>
                <strong>Kişi Sayısı </strong>
                <span><button className="plus count" onClick={arttır}><strong>+</strong></button>
                <h5 className="kisiSayısı">{count}</h5>
                <button className="minus count" onClick={azalt}><strong>-</strong></button></span> 
                <br></br> <br></br>
                <button className="searchCar"><strong>Yolculuk Bul</strong></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
