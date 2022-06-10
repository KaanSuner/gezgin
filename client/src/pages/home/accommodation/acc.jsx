import "./acc.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchAcc from "../../../components/SearchBox/Accomodation/SearchAcc.jsx";

const List = () => {
  return (
    <div>
      <Navbar type="accomodation"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult"></div>
          <SearchAcc/>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default List;
