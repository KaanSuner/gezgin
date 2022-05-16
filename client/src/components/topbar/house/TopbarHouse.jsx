import "./topbarHouse.css";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopbarHouse() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Gezgin</span>
      </div>
      <div className="topbarRight">
      <div className="topbarIcon">
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <button className="Seyahat">
          Seyahat ara
          <DirectionsCarIcon className="carIcon" />
        </button>
        <button className="Hesabim">
          Hesabım
          <PersonIcon className="personIcon" />
        </button>
        
      </div>
    </div>
  );
}
