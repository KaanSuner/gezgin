import Navbar from "../../../../components/navbar/Navbar";
import Footer from "../../../../components/footer/footer";
import "./welcomeHouse.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import avatar from "./avatar.jpg";

const List = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
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
    <div>
      <Navbar />
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
                          <span>
                            <strong>Konum: </strong>
                          </span>
                          <br />
                          <span>
                            <strong>Tarih: </strong> 20/05/2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="fs-4 fw-bolder fiyat">50,00 ₺</p>
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
                    <div className="col-8">
                      <div className="card-body">
                        <p className="card-text">
                          <span>
                            <strong>Konum: </strong>
                          </span>
                          <br />
                          <span>
                            <strong>Tarih: </strong> 22/05/2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="fs-4 fw-bolder fiyat">60,00 ₺</p>
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
                    <div className="col-8">
                      <div className="card-body">
                        <p className="card-text">
                          <span>
                            <strong>Konum: </strong>
                          </span>
                          <br />
                          <span>
                            <strong>Tarih: </strong> 19/05/2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="fs-4 fw-bolder fiyat">39,00 ₺</p>
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
                    <div className="col-8">
                      <div className="card-body">
                        <p className="card-text">
                          <span>
                            <strong>Konum: </strong>
                          </span>
                          <br />
                          <span>
                            <strong>Tarih: </strong> 23/05/2022
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <p className="fs-4 fw-bolder fiyat">79,00 ₺</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="listSearch">
              <h1 className="lsTitle"> Konaklama Ara</h1>
              <div className="lsItem">
                <label>
                  {" "}
                  <strong>Konaklama Zamanı</strong>
                </label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                )}
                <strong>Konaklama Yeri</strong>
                <select name="state" className="form-control" id="">
                  <option> -- Sehir Seç -- </option>
                  <option> Antalya </option>
                </select>
                <strong>Kişi Sayısı </strong>
                <span>
                  <button className="plus count" onClick={arttır}>
                    <strong>+</strong>
                  </button>
                  <h5 className="kisiSayısı">{count}</h5>
                  <button
                    className="minus count"
                    onClick={azalt}
                  >
                    <strong>-</strong>
                  </button>
                </span>
                <br></br> <br></br>
                <button className="searchCar">
                  <strong>Konaklama Bul</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default List;
