import TopbarCar from "../../../../components/topbar/car/TopbarCar";
import "./welcomeCar.css";
import { DateRange } from "react-date-range";
import React, { useState,useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import avatar from "./avatar.jpg";
import { Container } from "react-bootstrap";

const List = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  const [country, setCountry] = useState([]);

  useEffect( () =>{
    const getcountry =async ()=>{
      const res = await fetch("http://localhost/devopsdeveloper/country");
      const getcon = await res.json();
console.log(getcon)
      setCountry(await getcon);
    }
    getcountry();
  })

  const [count ,setCount] = useState(0)
  const arttır = () => {
    setCount(count + 1 );
  };

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
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 19/05/2022</span> <br />
                        <span><strong>Kalan Kişi Sayısı: </strong> 2</span> <br />                        
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
                    <p className="fs-4 fw-bolder fiyat">39,00 TL</p>
                  </div>
                </div>
              </div>
              </a>
              <a href="">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 19/05/2022</span> <br />
                        <span><strong>Kalan Kişi Sayısı: </strong> 2</span> <br />                        
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
                    <p className="fs-4 fw-bolder fiyat">39,00 TL</p>
                  </div>
                </div>
              </div>
              </a>
              <a href="">
              <div className="card">
                <div className="row">
                  <div className="col-2">
                    {/* ilan veren kişinin görseli gelecek */}
                    <img className="imageWelcomeH" src={avatar} alt="" />
                  </div>
                  <div className="col-4">
                    <div className="card-body">
                      <p className="card-text">
                        <span><strong>Tarih: </strong> 19/05/2022</span> <br />
                        <span><strong>Kalan Kişi Sayısı: </strong> 2</span> <br />                        
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
                    <p className="fs-4 fw-bolder fiyat">39,00 TL</p>
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
                  <option > urfa </option>
                </select>
                <strong>Nereye </strong>
                <select name="state" className="form-control" id="">
                  <option > -- Sehir Seç -- </option>
                  <option > urfa </option>
                </select>
                <strong>Kişi Sayısı </strong>
                <span><button className="plus count" onClick={arttır}><strong>+</strong></button>
                <h5 className="kisiSayısı">{count}</h5>
                <button className="minus count" onClick={() => setCount(count - 1)}><strong>-</strong></button></span> 
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
