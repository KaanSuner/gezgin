import "./topbar.css";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";

export default function TopbarHouse() {

const { loggedIn } = true;

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Gezgin</span>
      </div>
      <div className="topbarRight">
        { !loggedIn && (
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
        ) }
        { loggedIn && (
            <>
            <Link to={"../register"}>
                <button className="Seyahat">
                    Profilim 
                    <ion-icon name="person-outline"></ion-icon>
                </button>
            </Link>
            <Link to={"../register"}>
                <button className="Seyahat">
                    Yolculuk Ara 
                    <ion-icon name="car-outline"></ion-icon>
                </button>
            </Link>
            <Link to={"../register"}>
                <button className="Seyahat">
                    Konaklama Ara 
                    <ion-icon name="business-outline"></ion-icon>
                </button>
            </Link>
            </>
        )}
      </div>
    </div>
  );
}


 {/* <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div> */}
