import "./travel.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import Footer from "../../../components/footer/footer.jsx";
import SearchTravel from "../../../components/SearchBox/Travel/SearchTravel.jsx";

const List = () => {
  return (
    <div>
      <Navbar type="travel" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult"></div>
          <SearchTravel />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default List;
