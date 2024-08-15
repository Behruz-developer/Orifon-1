/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/universal2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Orifon turar-joy majmuasi Boʻstonliq tumani markazida togʻlar
              bagʻrida joylashgan. Bu yerda shahar shovqinidan uzoqda, tabiat
              bilan uygʻunlikda yashash mumkin.
            </p>
            <p className="location_text">
              Majmua dalahovli tipida boʻlib, unda basseynlar, akvapark va
              boshqa koʻngilochar zonalar mavjud. Bolalar uchun hayvonot bogʻi
              ham tashkil etiladi.
            </p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
              Orifon — oilaviy hordiq chiqarish va ijaradan daromad olish uchun
              munosib turar-joy majmuasi. Ushbu loyiha sizning sevimli
              manzilingizga aylanadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
