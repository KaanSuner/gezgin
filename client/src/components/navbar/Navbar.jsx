import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Logout } from "../../context/AuthActions";

const Navbar = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="gezginlogo" onClick={() => navigate("/")}>
          Gezgin
        </span>

        <div className="navItems">
          {type !== "travel" && type !== "travelOrAcc" && (
            <>
              <button className="navButton" onClick={() => navigate("/travel")}>
                Seyahat Ara
              </button>
            </>
          )}

          {type !== "accomodation" && type !== "travelOrAcc" && (
            <>
              <button
                className="navButton"
                onClick={() => navigate("/accomodation")}
              >
                Konaklama Ara
              </button>
            </>
          )}

          <div className="profileDropDown">
            {user.name} 
            <div className="profileDropDownItems">
              {type !== "profile" && (
                <>
                  <span
                    className="myProfile"
                    onClick={() => navigate("/Profile")}
                  >
                    Hesabım
                  </span>
                </>
              )}
              <span className="navbarLogout" onClick={() => dispatch(Logout())}>
                Çıkış yap
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
