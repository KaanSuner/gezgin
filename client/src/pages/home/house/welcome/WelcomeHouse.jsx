import TopbarHouse from "../../../../components/topbar/house/TopbarHouse";
import "./welcomeHouse.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const List = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <TopbarHouse type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult"></div>
          <div className="listSearch">
            <h1 className="lsTitle"> Konaklama Ara</h1>
            <div className="lsItem">
              <label>Konaklama Zamanı</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
