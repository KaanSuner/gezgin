import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const { loggedIn } = true;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <a className="logo" href="/">
            Gezgin
          </a>
        </span>
      </div>
      <div className="topbarRight">
        {!user && (
          <>
            <Link to={"../register"}>
              <button className="Seyahat">
                Kayıt ol
                <ion-icon size="medium" name="person-add-outline"></ion-icon>
              </button>
            </Link>
            <Link to={"../"}>
              <button className="Seyahat">
                Giriş Yap
                <ion-icon size="medium" name="log-in-outline"></ion-icon>
              </button>
            </Link>
          </>
        )}
        {user && (
          <>
            <Link to={"../Profile"}>
              <button className="Seyahat">
                Profilim
                <ion-icon name="person-outline"></ion-icon>
              </button>
            </Link>
            <Link to={"../travel"}>
              <button className="Seyahat">
                Yolculuk Ara
                <ion-icon name="car-outline"></ion-icon>
              </button>
            </Link>
            <Link to={"../accomodation"}>
              <button className="Seyahat">
                Konaklama Ara
                <ion-icon name="business-outline"></ion-icon>
              </button>
            </Link>
            <Link to={"../"}>
              <button className="Seyahat">
                <ion-icon name="log-out-outline"></ion-icon>
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
