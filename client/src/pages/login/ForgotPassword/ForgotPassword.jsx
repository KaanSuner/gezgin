import "./ForgotPassword.css";
import { Link } from "react-router-dom";

export default function ForgotPassword(){
    return(
        <div className="genel">
            <div className="card forgotCard mx-auto ">
                <h3>E-mail adresini giriniz</h3>
                <input type="email" className="forgotInput" placeholder="E-mail"/><br/>
                <button className="btn btn-success forgot-btn">Şifreyi sıfırla</button>
                <Link to={"../"}>Geri Dön</Link>
            </div>
        </div>
    )
}