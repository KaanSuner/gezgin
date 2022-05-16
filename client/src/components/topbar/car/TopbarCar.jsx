import "./topbarCar.css";
import PersonIcon from "@mui/icons-material/Person";
import HouseIcon from "@mui/icons-material/House";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function TopbarCar() {
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
        <button className="Konaklama">
          Konaklama ara
          <HouseIcon className="houseIcon" />
        </button>
        <button className="Hesabim">
          Hesabım
          <PersonIcon className="personIcon" />
        </button>
      </div>
    </div>
  );
}
