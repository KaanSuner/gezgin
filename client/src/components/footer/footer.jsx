import "./footer.css"
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
        <div class="containerFooter">
        <div class="rowFooter">
          <div class="footer-col">
            <h4>Şirket</h4>
            <ul className="footerUl">
              <li><a href="../register">Hakkımızda</a></li>
              <li><a href="#">Nasıl Çalışır? </a></li>
              <li><a href="#">Servislerimiz</a></li>
              <li><a href="#">Gizlilik</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Yardım</h4>
            <ul className="footerUl">
              <li><a href="#">Sık Sorulan Sorular</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>lorem</h4>
            <ul className="footerUl">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">ipsum</a></li>
              <li><a href="#">dolor</a></li>
              <li><a href="#">sit</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Bizi Takip Edin</h4>
            <div class="social-links">
            <Link to={"../"}>
                <button className="Seyahat">
                  <ion-icon name="logo-facebook"></ion-icon>
                </button>
            </Link>
            <Link to={"../"}>
                <button className="Seyahat">
                  <ion-icon name="logo-twitter"></ion-icon>
                </button>
            </Link>
            <Link to={"../"}>
                <button className="Seyahat">
                  <ion-icon name="logo-instagram"></ion-icon> 
                </button>
            </Link>
            </div>
          </div>
        </div>
        <div className="fText">Gezgin © 2022 </div>
      </div>
      </footer>
  )
}

export default footer


