import "./ShareAcc.css";
import Navbar from "../../../components/navbar/navbar.jsx";

import  { useState, useEffect } from "react";
export default function ShareAcc() {

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
    
    return(
        <>
        <Navbar/>
        <div className="container shareAcc ">
            <h5>Konaklamanı hangi tarihler arasında paylaşacaksın?</h5>
            <div className="row tarih"> 
                <div className="col">
                    <input type="date" onChange={e=>setDate(e.target.value )}/>
                </div>
                <div className="col">
                    <input type="date" onChange={e=>setDate(e.target.value )}/>
                </div>
            </div>
            <span><h5>Paylaşıma açacagım kişi sayısı</h5><button className="plus count" onClick={arttır}><strong>+</strong></button>{count}<button className="minus count" onClick={azalt}><strong>-</strong></button></span>
            <div className="row">
                <div className="col">
                    <h5>Kişi başına talep ettiğin ücret nedir?</h5>
                    <input className="inputShare" placeholder="Fiyat giriniz"></input><br /><br />
                    <h5>Sen neredesin?</h5>
                    <input className="inputShare" placeholder="Konum giriniz"></input>
                </div>
                <div className="col">
                    <textarea className="inputShare" rows = "10" cols = "60" name = "description">
                        Teklifinle ilgili detayları burada belirt lütfen
                    </textarea><br/>
                </div>
            </div>
            <br /><br />
            <button className="btn btn-primary butonShare">Teklifi Yayınla</button>
        </div>
        </>
    )
}