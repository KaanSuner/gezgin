import "./footer.css"

const footer = () => {
  return (
    // <div className="footer">
    //   <div className="fLists">
    //     <ul className="fList">
    //       <li className="fListItem">Gezgin nasıl çalışır ? </li>
    //       <li className="fListItem">Hakkımızda</li>
    //     </ul>
    //     <ul className="fList">
    //       <li className="fListItem">Yardım Merkezi </li>
    //       <li className="fListItem">Şartlar ve Koşullar</li>
    //     </ul>
    //     <ul className="fList">
    //       <li className="fListItem">Kariyer</li>
    //     </ul>
    //     <ul className="fList">
    //         <li className="fListItem">
    //         {/* facebook twitter linkleri gelecek */}
    //         </li>
    //     </ul>
    //   </div>
    //   <div className="fText">Gezgin © 2022 </div>
    // </div>
    


<footer className="footer">
    <div class="containerFooter">
    <div class="rowFooter">
      <div class="footer-col">
        <h4>Şirket</h4>
        <ul className="footerUl">
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Servislerimiz</a></li>
          <li><a href="#">Gizlilik</a></li>
          <li><a href="#">affiliate program</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Yardım</h4>
        <ul>
          <li><a href="#">Sık Sorulan Sorular</a></li>
          <li><a href="#">shipping</a></li>
          <li><a href="#">returns</a></li>
          <li><a href="#">order status</a></li>
          <li><a href="#">payment options</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>online shop</h4>
        <ul>
          <li><a href="#">watch</a></li>
          <li><a href="#">bag</a></li>
          <li><a href="#">shoes</a></li>
          <li><a href="#">dress</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Bizi Takip Edin</h4>
        <div class="social-links">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <div className="fText">Gezgin © 2022 </div>
  </div>
  </footer>

  )
}

export default footer


