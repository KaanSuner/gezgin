import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick1 = () => navigate("/");
  const handleClick2 = () => navigate("/travel");
  const handleClick3 = () => navigate("/accomodation");
  const handleClick4 = () => navigate("/Profile");

  return (
    <div className="navbar">
      <div className="navContainer">

        <span className="gezginlogo" onClick={handleClick1}>Gezgin</span>

        <div className="navItems">
          {type !== "travel" && (
            <>
              <button className="navButton" onClick={handleClick2}>
                Seyahat Ara
              </button>
            </>
          )}

          {type !== "accomodation" && (
            <>
              <button className="navButton" onClick={handleClick3}>
                Konaklama Ara
              </button>
            </>
          )}

          {type !== "profile" && (
            <>
              <button className="navButton" onClick={handleClick4}>
                Hesabım
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
