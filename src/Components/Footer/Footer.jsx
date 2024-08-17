/* eslint-disable react/no-unescaped-entities */
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiClock } from "react-icons/fi";


const Footer = () => {
  const position = [41.307163, 69.281239];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_card1">
            <h2 className="footer_title">Bog‘lanish</h2>
            <div className="footer_location">
              <div className="footer_location_title">
                <FiClock className="footer_location_icon" />

                Ish vaqti
              </div>
              <p className="footer_location_text">
                Har kun soat 09:00 dan 18:00 gacha
              </p>
            </div>
            <div className="footer_location">
              <div className="footer_location_title">
                <MdOutlineLocationOn className="footer_location_icon" />

                Sotuv bo‘limi
              </div>
              <p className="footer_location_text">
                Toshkent viloyati, Bo'stonliq tumani, <br /> Bo'stonliq ko‘chasi
              </p>
            </div>
            <div className="footer_social">
              <div className="footer_phone">
                <p className="footer_phone_text">Telefon</p>
                <div className="footer_phone_number">
                  <BiSolidPhoneCall />
                  1361
                </div>
              </div>
              <div className="footer_icons">
                <a href="https://www.instagram.com/txtgroup.uzb" className="footer_icon">
                  <FaInstagram />
                </a>
                <a href="https://t.me/txtgroupuzb" className="footer_icon">
                  <FaTelegramPlane />
                </a>
                <a href="https://www.facebook.com/txtgroup.uzb" className="footer_icon">
                  <FaFacebookF />
                </a>
                <a href="#!" className="footer_icon">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_card2">
            <div >
              <iframe className="map_container" src="https://yandex.com/map-widget/v1/?um=constructor%3Aa93fc024e3ffc747a8c59278e045fd730d00ce2df64783f0f256d62bb00cf7fc&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div>
          </div>
          <div className="footer_card3">
            <p className="footer_card3_text">
              Ushbu saytdagi rasm va renderlar majmua loyihasi, xonadonlar joylashuvi va hovli maydoni bilan yaqindan tanishish maqsadida yuklangan.
            </p>
            <p className="footer_card3_text">
            Tayyor binolar dizayni va koʻrinishi saytdagi tasvirlardan farq qilishi mumkin. Shu sababli bu maʼlumotlar ommaviy oferta hisoblanmaydi.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
