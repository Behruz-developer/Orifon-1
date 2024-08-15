import logo from "../../assets/images/logo.png";
import { PiPhoneCallLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav_box">
            <div className="nav_card_left">
              <a href="#!">
                <svg
                  id="_Слой_2"
                  data-name="Слой 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 797.84 280.83"
                  className="nav_logo"
                >
                  <defs>
                    
                  </defs>
                  <g id="_Слой_1-2" data-name="Слой 1">
                    <g>
                      <path
                        className="cls-1"
                        d="m359.01,68.84h2.24c3.64-13.16,9.24-17.09,18.77-17.93v-2.52c-9.52-.84-15.12-4.48-18.77-17.93h-2.24c-3.36,13.44-9.52,17.09-18.77,17.93v2.52c9.24.84,15.4,4.76,18.77,17.93Z"
                      />
                      <path
                        className="cls-1"
                        d="m103.01,10.92c-33.82,0-61.47,12.77-79.96,36.92C8.4,66.98,0,92.81,0,118.7c0,12.06,2.12,43.01,21.76,69.9,18.24,24.96,46.33,38.16,81.25,38.16s62.87-13.19,81.15-38.15c19.74-26.95,21.87-57.86,21.87-69.9,0-27.52-8.16-53.14-22.96-72.13-18.18-23.32-45.86-35.64-80.05-35.64Zm54.23,177.08c-12.97,19.93-31.72,30.46-54.23,30.46s-41.33-10.53-54.38-30.47c-11.75-17.96-18.22-42.57-18.22-69.3,0-30.32,6.46-55.44,18.7-72.66,12.65-17.81,30.79-26.83,53.9-26.83s40.79,9.71,53.54,28.07c12.29,17.7,18.78,42.39,18.78,71.42,0,26.77-6.42,51.38-18.09,69.31Z"
                      />
                      <path
                        className="cls-1"
                        d="m395.92,214.54h-22.13V77.79l-3.54,1.72c-12.46,6.06-26.38,9.76-40.26,10.68l-2.3.15v8.28l2.61-.15c.52-.03,11.42-.69,19.52-2.6v118.67h-22.13v8.29h68.23v-8.29Z"
                      />
                      <path
                        className="cls-1"
                        d="m565.99,79.82c-19.96,0-36.8,6.37-48.7,18.41-12.63,12.78-19.3,31.77-19.3,54.91,0,21.41,6.66,39.71,19.27,52.92,12.21,12.8,29.52,19.84,48.73,19.84s36.32-7.12,48.63-20.06c12.68-13.32,19.37-31.55,19.37-52.71,0-24.2-6.54-42.93-19.43-55.67-11.69-11.55-28.49-17.66-48.58-17.66Zm0,137.8c-26.41,0-40.95-22.9-40.95-64.48s14.54-65.04,40.95-65.04c15.29,0,40.95,8.45,40.95,65.04,0,41.58-14.54,64.48-40.95,64.48Z"
                      />
                      <path
                        className="cls-1"
                        d="m473,0c-31.99,0-45.31,37.95-47.2,74.08-10.68,3.79-21.09,6.8-32.62,9.45l-1.85.42v7.52h34.1v123.07h-22.13v8.29h68.23v-8.29h-22.13v-123.07h36.13v-8.29h-36.13v-9.75c40.92-20.88,45.37-42.64,45.37-51.09,0-12.95-9.16-22.35-21.79-22.35Zm-23.56,64.01c.5-37.48,8.22-55.72,23.56-55.72,8.08,0,13.5,5.65,13.5,14.06,0,11.07-9.82,27.6-37.06,41.66Z"
                      />
                      <path
                        className="cls-1"
                        d="m309.38,79.82l.18,3.94c-3.7-2.09-8.56-3.94-14.69-3.94-11.92,0-23.34,7.24-31.71,19.77v-21.71l-3.49,1.6c-10.36,4.76-22.41,9.35-40.33,10.7l-2.28.17v8.29l2.64-.19c.44-.03,9.95-.73,19.49-2.74v118.81h-22.13v8.29h71.03v-8.29h-24.93v-80.16c0-21.89,12.45-46.27,30.31-46.27,10.68,0,16.58,9.8,16.58,16.65l.04,1.64h8.42l-.5-26.58h-8.64Z"
                      />
                      <path
                        className="cls-1"
                        d="m775.72,214.54v-80.44c0-17.62,0-54.28-45.04-54.28-11.95,0-26.15,4.8-39.55,13.28v-15.26l-3.52,1.66c-9.89,4.67-22.41,9.59-40.27,10.69l-2.31.14v8.26l2.58-.12c.45-.02,10.16-.49,19.55-2.66v118.73h-22.13v8.29h72.23v-8.29h-26.13v-111.38c9.44-6.6,22.7-13.37,32.83-13.37,11.93,0,27.79,4.13,27.79,39.83v84.92h-26.13v8.29h72.23v-8.29h-22.13Z"
                      />
                      <path
                        className="cls-1"
                        d="m293.9,257.77c-1.32-.75-2.83-1.12-4.54-1.12-1.45,0-2.77.33-3.97.99-.83.45-1.53,1.08-2.12,1.84v-9.64h-3.16v24.42h3.03v-2.76c.6.82,1.33,1.48,2.19,1.96,1.2.67,2.54,1,4.03,1,1.71,0,3.22-.37,4.54-1.12,1.32-.75,2.36-1.79,3.13-3.13.77-1.34,1.15-2.9,1.15-4.67s-.38-3.33-1.15-4.66c-.77-1.33-1.81-2.36-3.13-3.11Zm.31,11.01c-.52.93-1.22,1.65-2.11,2.16-.89.51-1.89.76-3.01.76s-2.09-.25-2.98-.76c-.89-.5-1.59-1.22-2.11-2.16-.52-.93-.77-2.01-.77-3.24s.26-2.33.77-3.24c.52-.91,1.22-1.62,2.11-2.12.89-.5,1.88-.76,2.98-.76s2.12.25,3.01.76c.89.5,1.59,1.21,2.11,2.12.52.91.77,1.99.77,3.24s-.26,2.31-.77,3.24Z"
                      />
                      <path
                        className="cls-1"
                        d="m308.38,270.75l-6.08-13.94h-3.29l7.7,17.4-.56,1.23c-.44,1.01-.91,1.71-1.41,2.11-.5.4-1.14.59-1.91.59-.59,0-1.15-.11-1.68-.33-.53-.22-1.01-.54-1.45-.95l-1.35,2.37c.57.53,1.25.93,2.04,1.2.79.27,1.6.41,2.43.41.9,0,1.72-.15,2.47-.44.75-.3,1.43-.8,2.06-1.5.63-.7,1.19-1.67,1.69-2.9l8.46-19.18h-3.09l-6.03,13.94Z"
                      />
                      <polygon
                        className="cls-1"
                        points="345.5 251.22 326.45 251.22 326.45 254.08 334.34 254.08 334.34 274.25 337.6 274.25 337.6 254.08 345.5 254.08 345.5 251.22"
                      />
                      <polygon
                        className="cls-1"
                        points="365.77 251.22 362.18 251.22 355.79 260.05 349.35 251.22 345.6 251.22 353.72 262.45 345.07 274.25 348.86 274.25 355.67 264.76 362.58 274.25 366.36 274.25 357.65 262.34 365.77 251.22"
                      />
                      <polygon
                        className="cls-1"
                        points="365.93 254.08 373.83 254.08 373.83 274.25 377.09 274.25 377.09 254.08 384.99 254.08 384.99 251.22 365.93 251.22 365.93 254.08"
                      />
                      <path
                        className="cls-1"
                        d="m401.42,256.38c.82-.79,1.8-1.4,2.93-1.84,1.13-.44,2.35-.66,3.67-.66s2.5.21,3.6.64c1.11.43,2.13,1.1,3.08,2.02l2.04-2.04c-1.05-1.18-2.34-2.07-3.85-2.67-1.51-.59-3.18-.89-5-.89s-3.44.29-4.94.87c-1.49.58-2.79,1.4-3.9,2.47-1.11,1.06-1.97,2.31-2.58,3.74-.61,1.43-.92,2.99-.92,4.71s.31,3.28.92,4.71c.61,1.43,1.47,2.67,2.57,3.74s2.39,1.89,3.88,2.47c1.49.58,3.13.87,4.9.87,1.62,0,3.2-.25,4.72-.74,1.52-.49,2.86-1.22,4-2.19v-8.98h-3.16v7.48c-.59.39-1.21.7-1.86.93-1.13.38-2.31.58-3.54.58-1.32,0-2.53-.22-3.65-.66-1.12-.44-2.09-1.06-2.91-1.86-.82-.8-1.46-1.74-1.91-2.83-.45-1.09-.67-2.25-.67-3.5s.22-2.45.67-3.54c.45-1.09,1.09-2.02,1.91-2.81Z"
                      />
                      <path
                        className="cls-1"
                        d="m436.98,266.29c1.43-.64,2.52-1.55,3.29-2.75.77-1.2,1.15-2.63,1.15-4.29s-.38-3.1-1.15-4.31c-.77-1.21-1.86-2.13-3.29-2.76-1.43-.64-3.15-.95-5.17-.95h-8.98v23.03h3.29v-7.01h5.69c.51,0,.99-.02,1.46-.06l4.95,7.07h3.59l-5.48-7.73c.21-.08.44-.15.64-.24Zm-5.27-1.84h-5.59v-10.37h5.59c2.11,0,3.7.45,4.79,1.35s1.63,2.17,1.63,3.82-.54,2.92-1.63,3.83c-1.09.91-2.68,1.37-4.79,1.37Z"
                      />
                      <path
                        className="cls-1"
                        d="m465.89,254.29c-1.11-1.06-2.4-1.89-3.88-2.47-1.48-.58-3.1-.87-4.85-.87s-3.41.3-4.9.89c-1.49.59-2.79,1.42-3.88,2.48-1.1,1.06-1.95,2.31-2.57,3.74-.61,1.43-.92,2.98-.92,4.67s.31,3.25.92,4.67c.61,1.43,1.47,2.67,2.57,3.74,1.1,1.06,2.4,1.89,3.9,2.48,1.5.59,3.13.89,4.89.89s3.37-.29,4.85-.87c1.48-.58,2.77-1.4,3.88-2.47,1.11-1.06,1.96-2.31,2.57-3.74.6-1.43.9-2.99.9-4.71s-.3-3.28-.9-4.71c-.6-1.43-1.46-2.67-2.57-3.74Zm-.49,11.96c-.45,1.07-1.08,2.01-1.88,2.81-.8.8-1.74,1.42-2.83,1.86-1.09.44-2.27.66-3.54.66s-2.48-.22-3.57-.66c-1.09-.44-2.04-1.06-2.85-1.86-.81-.8-1.44-1.74-1.89-2.81-.45-1.07-.67-2.25-.67-3.52s.22-2.45.67-3.52c.45-1.07,1.08-2.01,1.89-2.81.81-.8,1.76-1.42,2.85-1.86s2.28-.66,3.57-.66,2.45.22,3.54.66,2.03,1.06,2.83,1.86c.8.8,1.43,1.74,1.88,2.81.45,1.08.67,2.25.67,3.52s-.23,2.45-.67,3.52Z"
                      />
                      <path
                        className="cls-1"
                        d="m490.48,264.18c0,2.57-.56,4.44-1.69,5.63-1.13,1.18-2.74,1.78-4.82,1.78s-3.66-.59-4.79-1.78c-1.13-1.18-1.69-3.06-1.69-5.63v-12.96h-3.29v13.1c0,3.34.87,5.87,2.6,7.6,1.73,1.73,4.11,2.6,7.14,2.6s5.43-.87,7.16-2.6c1.72-1.73,2.58-4.27,2.58-7.6v-13.1h-3.19v12.96Z"
                      />
                      <path
                        className="cls-1"
                        d="m514.57,252.17c-1.43-.64-3.15-.95-5.17-.95h-8.98v23.03h3.29v-6.98h5.69c2.02,0,3.74-.32,5.17-.97,1.43-.65,2.52-1.57,3.29-2.76.77-1.2,1.15-2.63,1.15-4.29s-.38-3.1-1.15-4.31c-.77-1.21-1.86-2.13-3.29-2.76Zm-.48,10.89c-1.09.9-2.68,1.35-4.79,1.35h-5.59v-10.33h5.59c2.11,0,3.7.45,4.79,1.35s1.63,2.17,1.63,3.82-.54,2.92-1.63,3.82Z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
              <div className={`nav_list_menu ${active && "active"}`}>
                <div className="container2">
                  <div className="nav_list_card">
                    <BiMenuAltLeft className="nav_menu_logo" />
                    <a href="#!">
                      <img className="nav_logo" src={logo} alt="" />
                    </a>
                    <IoIosCloseCircle
                      className="nav_close"
                      onClick={() => setActive(false)}
                    />
                  </div>
                  <ul className="nav_list">
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#!"
                        className="nav_link"
                        onClick={() => setActive(false)}
                      >
                        Loyiha haqida
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="average"
                        smooth={true}
                        duration={500}
                        href="#!"
                        className="nav_link"
                        onClick={() => setActive(false)}
                      >
                        Bloklar joylashuvi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="houses"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={() => setActive(false)}
                        href="#!"
                        className="nav_link"
                      >
                        Xonadonlarni rejalashtirish
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="company"
                        smooth={true}
                        duration={500}
                        onClick={() => setActive(false)}
                        href="#!"
                        className="nav_link"
                      >
                        Kompaniya haqida
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="footer"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        href="#!"
                        className="nav_link"
                        onClick={() => setActive(false)}
                      >
                        Bog‘lanish{" "}
                      </Link>
                    </li>
                  </ul>
                  <div className="nav_icons">
                    <a
                      href="https://www.facebook.com/txtgroup.uzb"
                      className="nav_icons_card"
                    >
                      <FaFacebookF className="nav_icons_icon" />
                    </a>
                    <a
                      href="https://www.instagram.com/txtgroup.uzb"
                      className="nav_icons_card"
                    >
                      <FaInstagram className="nav_icons_icon" />
                    </a>
                    <a
                      href="https://t.me/txtgroupuzb"
                      className="nav_icons_card"
                    >
                      <FaTelegramPlane className="nav_icons_icon" />
                    </a>
                    <a href="#!" className="nav_icons_card">
                      <FaYoutube className="nav_icons_icon" />
                    </a>
                  </div>
                  <div className="nav_card_right menu">
                    <div className="nav_contact">
                      <PiPhoneCallLight className="nav_phone_icon" />
                      <a href="tel: 1066" className="nav_contact_text">
                        1361
                      </a>
                    </div>
                    <div className="nav_download">
                      <RxDownload className="nav_phone_icon" />
                      <div className="nav_download_card">
                        <p className="nav_download_text1">Taqdimot</p>
                        <p className="nav_download_text2">
                          5.3 mb yuklab olish
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav_card_right">
              <div className="nav_contact">
                <PiPhoneCallLight className="nav_phone_icon" />
                <a href="tel: 1066" className="nav_contact_text">
                  1361
                </a>
                <IoMenu className="nav_menu" onClick={() => setActive(true)} />
              </div>
              <div className="nav_download download">
                <RxDownload className="nav_phone_icon" />
                <div className="nav_download_card">
                  <p className="nav_download_text1">Taqdimot</p>
                  <p className="nav_download_text2">5.3 mb yuklab olish </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className={`nav nav2 ${active && 'active'}`}>
        <div className="container">
        <div className={`nav_box2 ${active && 'active'}`}>
          <BiMenuAltLeft className="nav_menu_logo" />
          <div className="nav_box2_card">
            <div className="nav_card_left nav_box2_left">
              <a href="#!">
                <img className="nav_logo" src={logo} alt="" />
              </a>
              <ul className="nav_list nav_box2_list">
                <li>
                  <a href="#!" className="nav_link">
                    Loyiha haqida
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Joylashgan o‘rni
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Hovli
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Xollar
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Rejalashtirish
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Bog‘lanish{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav_icons">
              <div className="nav_icons_card">
                <FaFacebookF className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaInstagram className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaTelegramPlane className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaYoutube className="nav_icons_icon" />
              </div>
            </div>
            <div className="nav_social">
              <p className="nav_social_text">
                Jonli <br /> efir
              </p>
              <p className="nav_social_text">
                <CiGlobe className="nav_globe" />
                360
              </p>
              <p className="nav_social_text">
                <PiPhoneCallLight className="nav_phone" />
              </p>
            </div>
            <div className="nav_card_right">
              <div className="nav_contact">
                <PiPhoneCallLight className="nav_phone_icon" />
                <a href="tel: 1066" className="nav_contact_text">
                  1066
                </a>
              </div>
              <div className="nav_download nav_box2_download">
                <RxDownload className="nav_phone_icon" />
                <div className="nav_download_card">
                  <p className="nav_download_text1">Taqdimot</p>
                  <p className="nav_download_text2">5.3 mb yuklab olish </p>
                </div>
              </div>
            </div>
          </div>
          <IoIosCloseCircle className="nav_close" onClick={() => setActive(false)}/>
        </div>
        </div>
    </nav> */}
    </>
  );
};

export default Nav;
