import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Logout } from "../../context/AuthActions";

const Navbar = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch} = useContext(AuthContext);

  const handleClick1 = () => navigate("/");
  const handleClick2 = () => navigate("/travel");
  const handleClick3 = () => navigate("/accomodation");
  const handleClick4 = () => navigate("/Profile");

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="gezginlogo" onClick={handleClick1}>
          Gezgin
        </span>

        <div className="navItems">
          {type !== "travel" && type !== "travelOrAcc" && (
            <>
              <button className="navButton" onClick={handleClick2}>
                Seyahat Ara
              </button>

            </>
          )}

          {type !== "accomodation" && type !== "travelOrAcc" && (
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
          <button className="LogOut" onClick={()=>dispatch(Logout())}>
                Çıkış yap
              </button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
