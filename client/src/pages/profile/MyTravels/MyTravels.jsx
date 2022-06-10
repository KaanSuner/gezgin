import "./MyTravels.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import avatar from "./avatar.jpg";
import { useState, useEffect } from "react";
export default function MyTravels() {

  return (
    <>
      <Navbar />
      <br />
      <div className="container ">
        <h5>Burada suanda aldığın hizmetler başta olmak üzere geçmişte de aldığın tüm hizmetleri görebilirsin.</h5><br />
        <div className="card Mytra">
        <div className="row">
            <div className="col-1">
            {/* ilan veren kişinin görseli gelecek */}
            <img className="imageWelcomeH" src={avatar} alt="" />
            </div>
            <div className="col-3">
            <div className="card-body">
                <p className="card-text">
                <span><strong>Tarih: </strong> 24/05/2022</span> <br />
                <span><strong>Boş koltuk: </strong> 4</span> <br />                        
                </p>
            </div>       
            </div>
            <div className="col-3">
            <div className="card-body">
                <p className="card-text">
                    <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                </p>
                </div>
            </div>
            <div className="col-1">
            <p className="fs- fw-bolder fiyat">55,00 TL</p>
            </div>
            <div className="col-1">
                <p className="fs-5 fiyat">Aktif</p>
                <p className="fiyat">Onay bekliyor..</p>
            </div>
            <div className="col-2">
                <button className="btn btn-primary">İptal et</button>
            </div>
        </div>
        </div>
<br /><br />
        <div className="card Mytra">
        <div className="row">
            <div className="col-1">
            {/* ilan veren kişinin görseli gelecek */}
            <img className="imageWelcomeH" src={avatar} alt="" />
            </div>
            <div className="col-3">
            <div className="card-body">
                <p className="card-text">
                <span><strong>Tarih: </strong> 24/05/2022</span> <br />
                <span><strong>Boş koltuk: </strong> 4</span> <br />                        
                </p>
            </div>       
            </div>
            <div className="col-3">
            <div className="card-body">
                <p className="card-text">
                    <span><strong>Antalya </strong> <i class="fa fa-solid fa-arrow-right"></i><strong> İstanbul </strong></span><br/>
                </p>
                </div>
            </div>
            <div className="col-1">
            <p className="fs- fw-bolder fiyat">55,00 TL</p>
            </div>
            <div className="col-1">
                <p className="fs-5 fiyat">Aktif değil</p>
                <p className="fiyat">Kapalı</p>
            </div>
            <div className="col-2">
                <button className="btn btn-primary">Sil</button>
            </div>
        </div>
        </div>

      </div>
    </>
  );
}
