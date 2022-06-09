import "./ShareTravel.css";
import Navbar from "../../../components/navbar/Navbar";

import { useState, useEffect } from "react";
export default function ShareAcc() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: "selection",
    },
  ]);

  const [count, setCount] = useState(0);
  const arttır = () => {
    setCount(count + 1);
  };
  
  const azalt = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <>
      <Navbar />
      <div className="container shareAcc ">
        <div className="row">
          <h5>Nereden yola çıkacaksın?</h5>
          <div className="col">
            <input className="inputShare" placeholder="Antalya"></input>
          </div>
          <div className="col">
            <span>
              <ion-icon
                size="large"
                className="iconShare"
                name="time-outline"
              ></ion-icon>
              <input className="inputShare" placeholder="08.30"></input>
            </span>
          </div>
        </div>
        <br />
        <div className="row">
          <h5>Nereye gideceksin?</h5>
          <div className="col">
            <input className="inputShare" placeholder="İstanbul"></input>
          </div>
          <div className="col">
            <ion-icon
              size="large"
              className="iconShare"
              name="time-outline"
            ></ion-icon>
            <input className="inputShare" placeholder="12.30"></input>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h5>Ne zaman yola çıkacaksın?</h5>
            <div className="tarih">
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
            <span>
              <h5>Paylaşıma açacagım kişi sayısı</h5>
              <button className="plus count" onClick={arttır}>
                <strong>+</strong>
              </button>
              {count}
              <button className="minus count" onClick={azalt}>
                <strong>-</strong>
              </button>
            </span>
            <h5>Kişi başına talep ettiğin ücret nedir?</h5>
            <input className="inputShare" placeholder="Fiyat giriniz"></input>
            <br />
            <br />
          </div>
          <div className="col">
            <textarea
              className="inputShare"
              rows="10"
              cols="60"
              name="description"
            >
              Teklifinle ilgili detayları burada belirt lütfen
            </textarea>
            <br />
          </div>
        </div>
        <br />
        <br />
        <button className="btn btn-primary butonShare">Teklifi Yayınla</button>
      </div>
    </>
  );
}
