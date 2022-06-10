import "./SelectTravel.css";
import Navbar from "../../../../components/navbar/navbar.jsx";
import avatar from "./avatar.jpg";

import  { useState, useEffect } from "react";
export default function SelectTravel() {

    return(
        <>
        <Navbar/>
        <br /><br />
        <div className="container">
            <h4>Seçtiğin Teklif</h4>
            <br />
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
            </div><br />
            <div className="row">
                <div className="col">
                    <span>
                        <h4>İletişim: </h4>
                        <input className="inputShare extra" placeholder="0 *** *** ** **"></input>
                    </span><br /><br />
                    <textarea className="inputShare" rows = "5" cols = "60" name = "description">
                        Teklifinle ilgili detayları burada belirt lütfen
                    </textarea><br/>
                </div>
            </div>
            <button className="btn btn-primary butonShare">Rezervasyon</button>
                
        </div>
       
        </>
    )
}