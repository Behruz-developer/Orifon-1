/* eslint-disable react/no-unescaped-entities */

import universal from "../../assets/images/universall3.jpg";

const Blocks_location = () => {
  return (
    <div className="blocks_location">
      <div className="container">
        <div className="blocks_location_box">
          <div className="blocks_location_card_left">
            <img
              className="blocks_location_card_left_img"
              src={universal}
              alt=""
            />
            <div className="blocks_location_map_text">
              <div className="blocks_location_map_text_box">

                <svg className="blocks_location_map_text_img" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6665 19.3506V25.3332C16.6665 25.7012 16.9518 25.9999 17.3052 25.9999H24.0292C24.3812 25.9999 24.6665 25.7012 24.6665 25.3332V19.3146" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M15.334 20.2227L20.7767 16.6667L26.0007 20.2227" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.941 15.1559C13.7695 15.1559 15.2517 13.6737 15.2517 11.8453C15.2517 10.0168 13.7695 8.53461 11.941 8.53461C10.1126 8.53461 8.63037 10.0168 8.63037 11.8453C8.63037 13.6737 10.1126 15.1559 11.941 15.1559Z" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.852 12.5653C22.0253 9.8173 21.0707 7.01197 18.9707 4.91197C15.088 1.0293 8.79467 1.0293 4.912 4.91197C1.02933 8.79464 1.02933 15.088 4.912 18.9706L11.9413 26" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className="blocks_location_map_text_text">
                NRG Qorasuv - bu Yevropa va Sharq uslublarini birgalikda qollash orqali ishlab chigilgan eksklyuziv mualliflik dizayni.
              </p>
              {/* <p className="blocks_location_map_text_text2">Xaritada ko‘rish</p> */}
            </div>
          </div>

          <div className="blocks_location_card_text">
            <h2 className="blocks_location_title">Majmua arxitekturasi</h2>
            <p className="blocks_location_text">
              Majmua mutlaq xavfsiz va erkin hudud sifatida chuqur o'ylangan.
              Hech ganday begona kishilar va chagirilmagan mehmonlar.
            </p>
            <p className="blocks_location_text">
              Hovlilarda avtomashina bo'lmaydi. Ishga mahorat ila yondashuv,
              barcha tafsilotlarga e tiborli bo'lish va qurilish
              materiallarining maxsus tanlovi mualliflar g'oyalarining amalga
              oshishi uchun ishonchli kafolatdir.
            </p>
          </div>

          <div className="blocks_location_card_icons">
            <div className="blocks_location_card_icon">
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_42_3374)">
                      <path className="blocks_location_svg_icon1" d="M72.4 20.8H52C52 19.276 52.156 18.148 51.136 16.948L45.232 10.06C44.8884 9.67578 44.4664 9.36981 43.9944 9.16278C43.5223 8.95576 43.0114 8.8525 42.496 8.86H38.8C37.8452 8.86 36.9296 9.23928 36.2544 9.91442C35.5793 10.5895 35.2 11.5052 35.2 12.46V20.86H28V16C28 9.3724 22.6276 4 16 4C9.3724 4 4 9.3724 4 16V64C4 70.6276 9.3724 76 16 76H72.4C73.3548 76 74.2705 75.6207 74.9456 74.9456C75.6207 74.2705 76 73.3548 76 72.4V24.4C76 23.4452 75.6207 22.5295 74.9456 21.8544C74.2705 21.1793 73.3548 20.8 72.4 20.8ZM64 62.8H61.6V58C61.6 57.0452 61.2207 56.1296 60.5456 55.4544C59.8705 54.7793 58.9548 54.4 58 54.4C57.0452 54.4 56.1296 54.7793 55.4544 55.4544C54.7793 56.1296 54.4 57.0452 54.4 58V62.8H52V40C52 39.6817 52.1264 39.3765 52.3515 39.1515C52.5765 38.9264 52.8817 38.8 53.2 38.8H62.8C63.1183 38.8 63.4235 38.9264 63.6485 39.1515C63.8736 39.3765 64 39.6817 64 40V62.8ZM59.2 62.8H56.8V58C56.8 57.6817 56.9264 57.3765 57.1515 57.1515C57.3765 56.9264 57.6817 56.8 58 56.8C58.3183 56.8 58.6235 56.9264 58.8485 57.1515C59.0736 57.3765 59.2 57.6817 59.2 58V62.8ZM38.8 11.2H42.496C42.6693 11.2 42.8406 11.2375 42.998 11.31C43.1555 11.3825 43.2953 11.4883 43.408 11.62C49.768 19.048 49.6 18.676 49.6 19.288V62.8H47.2V58C47.2 57.0452 46.8207 56.1296 46.1456 55.4544C45.4705 54.7793 44.5548 54.4 43.6 54.4C42.6452 54.4 41.7295 54.7793 41.0544 55.4544C40.3793 56.1296 40 57.0452 40 58V62.8H37.6V53.2H42.4C42.7183 53.2 43.0235 53.0736 43.2485 52.8485C43.4736 52.6235 43.6 52.3183 43.6 52C43.6 51.6817 43.4736 51.3765 43.2485 51.1515C43.0235 50.9264 42.7183 50.8 42.4 50.8H37.6V48.4H42.4C42.7183 48.4 43.0235 48.2736 43.2485 48.0485C43.4736 47.8235 43.6 47.5183 43.6 47.2C43.6 46.8817 43.4736 46.5765 43.2485 46.3515C43.0235 46.1264 42.7183 46 42.4 46H37.6V43.6H42.4C42.7183 43.6 43.0235 43.4736 43.2485 43.2485C43.4736 43.0235 43.6 42.7183 43.6 42.4C43.6 42.0817 43.4736 41.7765 43.2485 41.5515C43.0235 41.3264 42.7183 41.2 42.4 41.2H37.6V38.8H42.4C42.7183 38.8 43.0235 38.6736 43.2485 38.4485C43.4736 38.2235 43.6 37.9183 43.6 37.6C43.6 37.2817 43.4736 36.9765 43.2485 36.7515C43.0235 36.5264 42.7183 36.4 42.4 36.4H37.6V34H42.4C42.7183 34 43.0235 33.8736 43.2485 33.6485C43.4736 33.4235 43.6 33.1183 43.6 32.8C43.6 32.4817 43.4736 32.1765 43.2485 31.9515C43.0235 31.7264 42.7183 31.6 42.4 31.6H37.6V29.2H42.4C42.7183 29.2 43.0235 29.0736 43.2485 28.8485C43.4736 28.6235 43.6 28.3183 43.6 28C43.6 27.6817 43.4736 27.3765 43.2485 27.1515C43.0235 26.9264 42.7183 26.8 42.4 26.8H37.6V24.4H42.4C42.7183 24.4 43.0235 24.2736 43.2485 24.0485C43.4736 23.8235 43.6 23.5183 43.6 23.2C43.6 22.8817 43.4736 22.5765 43.2485 22.3515C43.0235 22.1264 42.7183 22 42.4 22H37.6V19.6H42.4C42.7183 19.6 43.0235 19.4736 43.2485 19.2485C43.4736 19.0235 43.6 18.7183 43.6 18.4C43.6 18.0817 43.4736 17.7765 43.2485 17.5515C43.0235 17.3264 42.7183 17.2 42.4 17.2H37.6V12.4C37.6 12.0817 37.7264 11.7765 37.9515 11.5515C38.1765 11.3264 38.4817 11.2 38.8 11.2ZM44.8 62.8H42.4V58C42.4 57.6817 42.5264 57.3765 42.7515 57.1515C42.9765 56.9264 43.2817 56.8 43.6 56.8C43.9183 56.8 44.2235 56.9264 44.4485 57.1515C44.6736 57.3765 44.8 57.6817 44.8 58V62.8ZM6.4 16C6.4 13.4539 7.41143 11.0121 9.21178 9.21178C11.0121 7.41143 13.4539 6.4 16 6.4C18.5461 6.4 20.9879 7.41143 22.7882 9.21178C24.5886 11.0121 25.6 13.4539 25.6 16V56.8C24.4757 55.3145 23.021 54.1112 21.3511 53.2853C19.6812 52.4595 17.8419 52.0338 15.979 52.0419C14.1161 52.0501 12.2806 52.4919 10.618 53.3323C8.95534 54.1727 7.51123 55.3887 6.4 56.884V16ZM73.6 72.4C73.6 72.7183 73.4736 73.0235 73.2485 73.2485C73.0235 73.4736 72.7183 73.6 72.4 73.6H16C14.1013 73.6 12.2452 73.037 10.6665 71.9821C9.08781 70.9272 7.85736 69.4279 7.13076 67.6738C6.40416 65.9196 6.21404 63.9894 6.58446 62.1271C6.95488 60.2649 7.86919 58.5544 9.21178 57.2118C10.5544 55.8692 12.2649 54.9549 14.1271 54.5845C15.9894 54.214 17.9196 54.4042 19.6738 55.1308C21.4279 55.8574 22.9272 57.0878 23.9821 58.6665C25.037 60.2452 25.6 62.1013 25.6 64C25.6 64.3183 25.7264 64.6235 25.9515 64.8485C26.1765 65.0736 26.4817 65.2 26.8 65.2C27.1183 65.2 27.4235 65.0736 27.6485 64.8485C27.8736 64.6235 28 64.3183 28 64V23.2H35.2V62.8H32.8C32.4817 62.8 32.1765 62.9264 31.9515 63.1515C31.7264 63.3765 31.6 63.6817 31.6 64C31.6 64.3183 31.7264 64.6235 31.9515 64.8485C32.1765 65.0736 32.4817 65.2 32.8 65.2H68.8C69.1183 65.2 69.4235 65.0736 69.6485 64.8485C69.8736 64.6235 70 64.3183 70 64C70 63.6817 69.8736 63.3765 69.6485 63.1515C69.4235 62.9264 69.1183 62.8 68.8 62.8H66.4V40C66.4 39.0452 66.0207 38.1296 65.3456 37.4544C64.6705 36.7793 63.7548 36.4 62.8 36.4C52.456 36.4 52.864 36.316 52 36.616V23.2H72.4C72.7183 23.2 73.0235 23.3264 73.2485 23.5515C73.4736 23.7765 73.6 24.0817 73.6 24.4V72.4Z" />
                      <path className="blocks_location_svg_icon2" d="M55.6003 41.1998H54.4003C54.082 41.1998 53.7768 41.3263 53.5518 41.5513C53.3267 41.7764 53.2003 42.0816 53.2003 42.3998C53.2003 42.7181 53.3267 43.0233 53.5518 43.2484C53.7768 43.4734 54.082 43.5998 54.4003 43.5998H55.6003C55.9186 43.5998 56.2238 43.4734 56.4488 43.2484C56.6739 43.0233 56.8003 42.7181 56.8003 42.3998C56.8003 42.0816 56.6739 41.7764 56.4488 41.5513C56.2238 41.3263 55.9186 41.1998 55.6003 41.1998ZM61.6003 41.1998H60.4003C60.082 41.1998 59.7768 41.3263 59.5518 41.5513C59.3267 41.7764 59.2003 42.0816 59.2003 42.3998C59.2003 42.7181 59.3267 43.0233 59.5518 43.2484C59.7768 43.4734 60.082 43.5998 60.4003 43.5998H61.6003C61.9186 43.5998 62.2238 43.4734 62.4488 43.2484C62.6739 43.0233 62.8003 42.7181 62.8003 42.3998C62.8003 42.0816 62.6739 41.7764 62.4488 41.5513C62.2238 41.3263 61.9186 41.1998 61.6003 41.1998ZM55.6003 45.9998H54.4003C54.082 45.9998 53.7768 46.1263 53.5518 46.3513C53.3267 46.5764 53.2003 46.8816 53.2003 47.1998C53.2003 47.5181 53.3267 47.8233 53.5518 48.0484C53.7768 48.2734 54.082 48.3998 54.4003 48.3998H55.6003C55.9186 48.3998 56.2238 48.2734 56.4488 48.0484C56.6739 47.8233 56.8003 47.5181 56.8003 47.1998C56.8003 46.8816 56.6739 46.5764 56.4488 46.3513C56.2238 46.1263 55.9186 45.9998 55.6003 45.9998ZM61.6003 45.9998H60.4003C60.082 45.9998 59.7768 46.1263 59.5518 46.3513C59.3267 46.5764 59.2003 46.8816 59.2003 47.1998C59.2003 47.5181 59.3267 47.8233 59.5518 48.0484C59.7768 48.2734 60.082 48.3998 60.4003 48.3998H61.6003C61.9186 48.3998 62.2238 48.2734 62.4488 48.0484C62.6739 47.8233 62.8003 47.5181 62.8003 47.1998C62.8003 46.8816 62.6739 46.5764 62.4488 46.3513C62.2238 46.1263 61.9186 45.9998 61.6003 45.9998ZM55.6003 50.7998H54.4003C54.082 50.7998 53.7768 50.9263 53.5518 51.1513C53.3267 51.3764 53.2003 51.6816 53.2003 51.9998C53.2003 52.3181 53.3267 52.6233 53.5518 52.8484C53.7768 53.0734 54.082 53.1998 54.4003 53.1998H55.6003C55.9186 53.1998 56.2238 53.0734 56.4488 52.8484C56.6739 52.6233 56.8003 52.3181 56.8003 51.9998C56.8003 51.6816 56.6739 51.3764 56.4488 51.1513C56.2238 50.9263 55.9186 50.7998 55.6003 50.7998ZM61.6003 50.7998H60.4003C60.082 50.7998 59.7768 50.9263 59.5518 51.1513C59.3267 51.3764 59.2003 51.6816 59.2003 51.9998C59.2003 52.3181 59.3267 52.6233 59.5518 52.8484C59.7768 53.0734 60.082 53.1998 60.4003 53.1998H61.6003C61.9186 53.1998 62.2238 53.0734 62.4488 52.8484C62.6739 52.6233 62.8003 52.3181 62.8003 51.9998C62.8003 51.6816 62.6739 51.3764 62.4488 51.1513C62.2238 50.9263 61.9186 50.7998 61.6003 50.7998ZM41.2003 67.5998H31.6003C31.282 67.5998 30.9768 67.7263 30.7518 67.9513C30.5267 68.1764 30.4003 68.4816 30.4003 68.7998C30.4003 69.1181 30.5267 69.4233 30.7518 69.6484C30.9768 69.8734 31.282 69.9998 31.6003 69.9998H41.2003C41.5186 69.9998 41.8238 69.8734 42.0488 69.6484C42.2739 69.4233 42.4003 69.1181 42.4003 68.7998C42.4003 68.4816 42.2739 68.1764 42.0488 67.9513C41.8238 67.7263 41.5186 67.5998 41.2003 67.5998ZM70.0003 67.5998H46.0003C45.682 67.5998 45.3768 67.7263 45.1518 67.9513C44.9267 68.1764 44.8003 68.4816 44.8003 68.7998C44.8003 69.1181 44.9267 69.4233 45.1518 69.6484C45.3768 69.8734 45.682 69.9998 46.0003 69.9998H70.0003C70.3186 69.9998 70.6238 69.8734 70.8488 69.6484C71.0739 69.4233 71.2003 69.1181 71.2003 68.7998C71.2003 68.4816 71.0739 68.1764 70.8488 67.9513C70.6238 67.7263 70.3186 67.5998 70.0003 67.5998ZM10.0003 17.1998C10.3186 17.1998 10.6238 17.0734 10.8488 16.8484C11.0739 16.6233 11.2003 16.3181 11.2003 15.9998V13.5998C11.2003 13.2816 11.0739 12.9764 10.8488 12.7513C10.6238 12.5263 10.3186 12.3998 10.0003 12.3998C9.68203 12.3998 9.37681 12.5263 9.15177 12.7513C8.92672 12.9764 8.80029 13.2816 8.80029 13.5998V15.9998C8.80029 16.3181 8.92672 16.6233 9.15177 16.8484C9.37681 17.0734 9.68203 17.1998 10.0003 17.1998ZM10.0003 49.5998C10.3186 49.5998 10.6238 49.4734 10.8488 49.2484C11.0739 49.0233 11.2003 48.7181 11.2003 48.3998V20.7998C11.2003 20.4816 11.0739 20.1764 10.8488 19.9513C10.6238 19.7263 10.3186 19.5998 10.0003 19.5998C9.68203 19.5998 9.37681 19.7263 9.15177 19.9513C8.92672 20.1764 8.80029 20.4816 8.80029 20.7998V48.3998C8.80029 48.7181 8.92672 49.0233 9.15177 49.2484C9.37681 49.4734 9.68203 49.5998 10.0003 49.5998Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3374">
                        <rect width="72" height="72" fill="white" transform="translate(4 4)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Ventilyatsiya qurilmasiga ega fasad
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_42_3374)">
                      <path className="blocks_location_svg_icon1" d="M72.4 20.8H52C52 19.276 52.156 18.148 51.136 16.948L45.232 10.06C44.8884 9.67578 44.4664 9.36981 43.9944 9.16278C43.5223 8.95576 43.0114 8.8525 42.496 8.86H38.8C37.8452 8.86 36.9296 9.23928 36.2544 9.91442C35.5793 10.5895 35.2 11.5052 35.2 12.46V20.86H28V16C28 9.3724 22.6276 4 16 4C9.3724 4 4 9.3724 4 16V64C4 70.6276 9.3724 76 16 76H72.4C73.3548 76 74.2705 75.6207 74.9456 74.9456C75.6207 74.2705 76 73.3548 76 72.4V24.4C76 23.4452 75.6207 22.5295 74.9456 21.8544C74.2705 21.1793 73.3548 20.8 72.4 20.8ZM64 62.8H61.6V58C61.6 57.0452 61.2207 56.1296 60.5456 55.4544C59.8705 54.7793 58.9548 54.4 58 54.4C57.0452 54.4 56.1296 54.7793 55.4544 55.4544C54.7793 56.1296 54.4 57.0452 54.4 58V62.8H52V40C52 39.6817 52.1264 39.3765 52.3515 39.1515C52.5765 38.9264 52.8817 38.8 53.2 38.8H62.8C63.1183 38.8 63.4235 38.9264 63.6485 39.1515C63.8736 39.3765 64 39.6817 64 40V62.8ZM59.2 62.8H56.8V58C56.8 57.6817 56.9264 57.3765 57.1515 57.1515C57.3765 56.9264 57.6817 56.8 58 56.8C58.3183 56.8 58.6235 56.9264 58.8485 57.1515C59.0736 57.3765 59.2 57.6817 59.2 58V62.8ZM38.8 11.2H42.496C42.6693 11.2 42.8406 11.2375 42.998 11.31C43.1555 11.3825 43.2953 11.4883 43.408 11.62C49.768 19.048 49.6 18.676 49.6 19.288V62.8H47.2V58C47.2 57.0452 46.8207 56.1296 46.1456 55.4544C45.4705 54.7793 44.5548 54.4 43.6 54.4C42.6452 54.4 41.7295 54.7793 41.0544 55.4544C40.3793 56.1296 40 57.0452 40 58V62.8H37.6V53.2H42.4C42.7183 53.2 43.0235 53.0736 43.2485 52.8485C43.4736 52.6235 43.6 52.3183 43.6 52C43.6 51.6817 43.4736 51.3765 43.2485 51.1515C43.0235 50.9264 42.7183 50.8 42.4 50.8H37.6V48.4H42.4C42.7183 48.4 43.0235 48.2736 43.2485 48.0485C43.4736 47.8235 43.6 47.5183 43.6 47.2C43.6 46.8817 43.4736 46.5765 43.2485 46.3515C43.0235 46.1264 42.7183 46 42.4 46H37.6V43.6H42.4C42.7183 43.6 43.0235 43.4736 43.2485 43.2485C43.4736 43.0235 43.6 42.7183 43.6 42.4C43.6 42.0817 43.4736 41.7765 43.2485 41.5515C43.0235 41.3264 42.7183 41.2 42.4 41.2H37.6V38.8H42.4C42.7183 38.8 43.0235 38.6736 43.2485 38.4485C43.4736 38.2235 43.6 37.9183 43.6 37.6C43.6 37.2817 43.4736 36.9765 43.2485 36.7515C43.0235 36.5264 42.7183 36.4 42.4 36.4H37.6V34H42.4C42.7183 34 43.0235 33.8736 43.2485 33.6485C43.4736 33.4235 43.6 33.1183 43.6 32.8C43.6 32.4817 43.4736 32.1765 43.2485 31.9515C43.0235 31.7264 42.7183 31.6 42.4 31.6H37.6V29.2H42.4C42.7183 29.2 43.0235 29.0736 43.2485 28.8485C43.4736 28.6235 43.6 28.3183 43.6 28C43.6 27.6817 43.4736 27.3765 43.2485 27.1515C43.0235 26.9264 42.7183 26.8 42.4 26.8H37.6V24.4H42.4C42.7183 24.4 43.0235 24.2736 43.2485 24.0485C43.4736 23.8235 43.6 23.5183 43.6 23.2C43.6 22.8817 43.4736 22.5765 43.2485 22.3515C43.0235 22.1264 42.7183 22 42.4 22H37.6V19.6H42.4C42.7183 19.6 43.0235 19.4736 43.2485 19.2485C43.4736 19.0235 43.6 18.7183 43.6 18.4C43.6 18.0817 43.4736 17.7765 43.2485 17.5515C43.0235 17.3264 42.7183 17.2 42.4 17.2H37.6V12.4C37.6 12.0817 37.7264 11.7765 37.9515 11.5515C38.1765 11.3264 38.4817 11.2 38.8 11.2ZM44.8 62.8H42.4V58C42.4 57.6817 42.5264 57.3765 42.7515 57.1515C42.9765 56.9264 43.2817 56.8 43.6 56.8C43.9183 56.8 44.2235 56.9264 44.4485 57.1515C44.6736 57.3765 44.8 57.6817 44.8 58V62.8ZM6.4 16C6.4 13.4539 7.41143 11.0121 9.21178 9.21178C11.0121 7.41143 13.4539 6.4 16 6.4C18.5461 6.4 20.9879 7.41143 22.7882 9.21178C24.5886 11.0121 25.6 13.4539 25.6 16V56.8C24.4757 55.3145 23.021 54.1112 21.3511 53.2853C19.6812 52.4595 17.8419 52.0338 15.979 52.0419C14.1161 52.0501 12.2806 52.4919 10.618 53.3323C8.95534 54.1727 7.51123 55.3887 6.4 56.884V16ZM73.6 72.4C73.6 72.7183 73.4736 73.0235 73.2485 73.2485C73.0235 73.4736 72.7183 73.6 72.4 73.6H16C14.1013 73.6 12.2452 73.037 10.6665 71.9821C9.08781 70.9272 7.85736 69.4279 7.13076 67.6738C6.40416 65.9196 6.21404 63.9894 6.58446 62.1271C6.95488 60.2649 7.86919 58.5544 9.21178 57.2118C10.5544 55.8692 12.2649 54.9549 14.1271 54.5845C15.9894 54.214 17.9196 54.4042 19.6738 55.1308C21.4279 55.8574 22.9272 57.0878 23.9821 58.6665C25.037 60.2452 25.6 62.1013 25.6 64C25.6 64.3183 25.7264 64.6235 25.9515 64.8485C26.1765 65.0736 26.4817 65.2 26.8 65.2C27.1183 65.2 27.4235 65.0736 27.6485 64.8485C27.8736 64.6235 28 64.3183 28 64V23.2H35.2V62.8H32.8C32.4817 62.8 32.1765 62.9264 31.9515 63.1515C31.7264 63.3765 31.6 63.6817 31.6 64C31.6 64.3183 31.7264 64.6235 31.9515 64.8485C32.1765 65.0736 32.4817 65.2 32.8 65.2H68.8C69.1183 65.2 69.4235 65.0736 69.6485 64.8485C69.8736 64.6235 70 64.3183 70 64C70 63.6817 69.8736 63.3765 69.6485 63.1515C69.4235 62.9264 69.1183 62.8 68.8 62.8H66.4V40C66.4 39.0452 66.0207 38.1296 65.3456 37.4544C64.6705 36.7793 63.7548 36.4 62.8 36.4C52.456 36.4 52.864 36.316 52 36.616V23.2H72.4C72.7183 23.2 73.0235 23.3264 73.2485 23.5515C73.4736 23.7765 73.6 24.0817 73.6 24.4V72.4Z" />
                      <path className="blocks_location_svg_icon2" d="M55.6003 41.1998H54.4003C54.082 41.1998 53.7768 41.3263 53.5518 41.5513C53.3267 41.7764 53.2003 42.0816 53.2003 42.3998C53.2003 42.7181 53.3267 43.0233 53.5518 43.2484C53.7768 43.4734 54.082 43.5998 54.4003 43.5998H55.6003C55.9186 43.5998 56.2238 43.4734 56.4488 43.2484C56.6739 43.0233 56.8003 42.7181 56.8003 42.3998C56.8003 42.0816 56.6739 41.7764 56.4488 41.5513C56.2238 41.3263 55.9186 41.1998 55.6003 41.1998ZM61.6003 41.1998H60.4003C60.082 41.1998 59.7768 41.3263 59.5518 41.5513C59.3267 41.7764 59.2003 42.0816 59.2003 42.3998C59.2003 42.7181 59.3267 43.0233 59.5518 43.2484C59.7768 43.4734 60.082 43.5998 60.4003 43.5998H61.6003C61.9186 43.5998 62.2238 43.4734 62.4488 43.2484C62.6739 43.0233 62.8003 42.7181 62.8003 42.3998C62.8003 42.0816 62.6739 41.7764 62.4488 41.5513C62.2238 41.3263 61.9186 41.1998 61.6003 41.1998ZM55.6003 45.9998H54.4003C54.082 45.9998 53.7768 46.1263 53.5518 46.3513C53.3267 46.5764 53.2003 46.8816 53.2003 47.1998C53.2003 47.5181 53.3267 47.8233 53.5518 48.0484C53.7768 48.2734 54.082 48.3998 54.4003 48.3998H55.6003C55.9186 48.3998 56.2238 48.2734 56.4488 48.0484C56.6739 47.8233 56.8003 47.5181 56.8003 47.1998C56.8003 46.8816 56.6739 46.5764 56.4488 46.3513C56.2238 46.1263 55.9186 45.9998 55.6003 45.9998ZM61.6003 45.9998H60.4003C60.082 45.9998 59.7768 46.1263 59.5518 46.3513C59.3267 46.5764 59.2003 46.8816 59.2003 47.1998C59.2003 47.5181 59.3267 47.8233 59.5518 48.0484C59.7768 48.2734 60.082 48.3998 60.4003 48.3998H61.6003C61.9186 48.3998 62.2238 48.2734 62.4488 48.0484C62.6739 47.8233 62.8003 47.5181 62.8003 47.1998C62.8003 46.8816 62.6739 46.5764 62.4488 46.3513C62.2238 46.1263 61.9186 45.9998 61.6003 45.9998ZM55.6003 50.7998H54.4003C54.082 50.7998 53.7768 50.9263 53.5518 51.1513C53.3267 51.3764 53.2003 51.6816 53.2003 51.9998C53.2003 52.3181 53.3267 52.6233 53.5518 52.8484C53.7768 53.0734 54.082 53.1998 54.4003 53.1998H55.6003C55.9186 53.1998 56.2238 53.0734 56.4488 52.8484C56.6739 52.6233 56.8003 52.3181 56.8003 51.9998C56.8003 51.6816 56.6739 51.3764 56.4488 51.1513C56.2238 50.9263 55.9186 50.7998 55.6003 50.7998ZM61.6003 50.7998H60.4003C60.082 50.7998 59.7768 50.9263 59.5518 51.1513C59.3267 51.3764 59.2003 51.6816 59.2003 51.9998C59.2003 52.3181 59.3267 52.6233 59.5518 52.8484C59.7768 53.0734 60.082 53.1998 60.4003 53.1998H61.6003C61.9186 53.1998 62.2238 53.0734 62.4488 52.8484C62.6739 52.6233 62.8003 52.3181 62.8003 51.9998C62.8003 51.6816 62.6739 51.3764 62.4488 51.1513C62.2238 50.9263 61.9186 50.7998 61.6003 50.7998ZM41.2003 67.5998H31.6003C31.282 67.5998 30.9768 67.7263 30.7518 67.9513C30.5267 68.1764 30.4003 68.4816 30.4003 68.7998C30.4003 69.1181 30.5267 69.4233 30.7518 69.6484C30.9768 69.8734 31.282 69.9998 31.6003 69.9998H41.2003C41.5186 69.9998 41.8238 69.8734 42.0488 69.6484C42.2739 69.4233 42.4003 69.1181 42.4003 68.7998C42.4003 68.4816 42.2739 68.1764 42.0488 67.9513C41.8238 67.7263 41.5186 67.5998 41.2003 67.5998ZM70.0003 67.5998H46.0003C45.682 67.5998 45.3768 67.7263 45.1518 67.9513C44.9267 68.1764 44.8003 68.4816 44.8003 68.7998C44.8003 69.1181 44.9267 69.4233 45.1518 69.6484C45.3768 69.8734 45.682 69.9998 46.0003 69.9998H70.0003C70.3186 69.9998 70.6238 69.8734 70.8488 69.6484C71.0739 69.4233 71.2003 69.1181 71.2003 68.7998C71.2003 68.4816 71.0739 68.1764 70.8488 67.9513C70.6238 67.7263 70.3186 67.5998 70.0003 67.5998ZM10.0003 17.1998C10.3186 17.1998 10.6238 17.0734 10.8488 16.8484C11.0739 16.6233 11.2003 16.3181 11.2003 15.9998V13.5998C11.2003 13.2816 11.0739 12.9764 10.8488 12.7513C10.6238 12.5263 10.3186 12.3998 10.0003 12.3998C9.68203 12.3998 9.37681 12.5263 9.15177 12.7513C8.92672 12.9764 8.80029 13.2816 8.80029 13.5998V15.9998C8.80029 16.3181 8.92672 16.6233 9.15177 16.8484C9.37681 17.0734 9.68203 17.1998 10.0003 17.1998ZM10.0003 49.5998C10.3186 49.5998 10.6238 49.4734 10.8488 49.2484C11.0739 49.0233 11.2003 48.7181 11.2003 48.3998V20.7998C11.2003 20.4816 11.0739 20.1764 10.8488 19.9513C10.6238 19.7263 10.3186 19.5998 10.0003 19.5998C9.68203 19.5998 9.37681 19.7263 9.15177 19.9513C8.92672 20.1764 8.80029 20.4816 8.80029 20.7998V48.3998C8.80029 48.7181 8.92672 49.0233 9.15177 49.2484C9.37681 49.4734 9.68203 49.5998 10.0003 49.5998Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3374">
                        <rect width="72" height="72" fill="white" transform="translate(4 4)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Manolit karkas va xonalararo g‘isht devorlar
              </div>
              <div className="blocks_location_icon_text">
                <div className="blocks_location_svg_box">
                  <svg className="blocks_location_svg_card" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_42_3374)">
                      <path className="blocks_location_svg_icon1" d="M72.4 20.8H52C52 19.276 52.156 18.148 51.136 16.948L45.232 10.06C44.8884 9.67578 44.4664 9.36981 43.9944 9.16278C43.5223 8.95576 43.0114 8.8525 42.496 8.86H38.8C37.8452 8.86 36.9296 9.23928 36.2544 9.91442C35.5793 10.5895 35.2 11.5052 35.2 12.46V20.86H28V16C28 9.3724 22.6276 4 16 4C9.3724 4 4 9.3724 4 16V64C4 70.6276 9.3724 76 16 76H72.4C73.3548 76 74.2705 75.6207 74.9456 74.9456C75.6207 74.2705 76 73.3548 76 72.4V24.4C76 23.4452 75.6207 22.5295 74.9456 21.8544C74.2705 21.1793 73.3548 20.8 72.4 20.8ZM64 62.8H61.6V58C61.6 57.0452 61.2207 56.1296 60.5456 55.4544C59.8705 54.7793 58.9548 54.4 58 54.4C57.0452 54.4 56.1296 54.7793 55.4544 55.4544C54.7793 56.1296 54.4 57.0452 54.4 58V62.8H52V40C52 39.6817 52.1264 39.3765 52.3515 39.1515C52.5765 38.9264 52.8817 38.8 53.2 38.8H62.8C63.1183 38.8 63.4235 38.9264 63.6485 39.1515C63.8736 39.3765 64 39.6817 64 40V62.8ZM59.2 62.8H56.8V58C56.8 57.6817 56.9264 57.3765 57.1515 57.1515C57.3765 56.9264 57.6817 56.8 58 56.8C58.3183 56.8 58.6235 56.9264 58.8485 57.1515C59.0736 57.3765 59.2 57.6817 59.2 58V62.8ZM38.8 11.2H42.496C42.6693 11.2 42.8406 11.2375 42.998 11.31C43.1555 11.3825 43.2953 11.4883 43.408 11.62C49.768 19.048 49.6 18.676 49.6 19.288V62.8H47.2V58C47.2 57.0452 46.8207 56.1296 46.1456 55.4544C45.4705 54.7793 44.5548 54.4 43.6 54.4C42.6452 54.4 41.7295 54.7793 41.0544 55.4544C40.3793 56.1296 40 57.0452 40 58V62.8H37.6V53.2H42.4C42.7183 53.2 43.0235 53.0736 43.2485 52.8485C43.4736 52.6235 43.6 52.3183 43.6 52C43.6 51.6817 43.4736 51.3765 43.2485 51.1515C43.0235 50.9264 42.7183 50.8 42.4 50.8H37.6V48.4H42.4C42.7183 48.4 43.0235 48.2736 43.2485 48.0485C43.4736 47.8235 43.6 47.5183 43.6 47.2C43.6 46.8817 43.4736 46.5765 43.2485 46.3515C43.0235 46.1264 42.7183 46 42.4 46H37.6V43.6H42.4C42.7183 43.6 43.0235 43.4736 43.2485 43.2485C43.4736 43.0235 43.6 42.7183 43.6 42.4C43.6 42.0817 43.4736 41.7765 43.2485 41.5515C43.0235 41.3264 42.7183 41.2 42.4 41.2H37.6V38.8H42.4C42.7183 38.8 43.0235 38.6736 43.2485 38.4485C43.4736 38.2235 43.6 37.9183 43.6 37.6C43.6 37.2817 43.4736 36.9765 43.2485 36.7515C43.0235 36.5264 42.7183 36.4 42.4 36.4H37.6V34H42.4C42.7183 34 43.0235 33.8736 43.2485 33.6485C43.4736 33.4235 43.6 33.1183 43.6 32.8C43.6 32.4817 43.4736 32.1765 43.2485 31.9515C43.0235 31.7264 42.7183 31.6 42.4 31.6H37.6V29.2H42.4C42.7183 29.2 43.0235 29.0736 43.2485 28.8485C43.4736 28.6235 43.6 28.3183 43.6 28C43.6 27.6817 43.4736 27.3765 43.2485 27.1515C43.0235 26.9264 42.7183 26.8 42.4 26.8H37.6V24.4H42.4C42.7183 24.4 43.0235 24.2736 43.2485 24.0485C43.4736 23.8235 43.6 23.5183 43.6 23.2C43.6 22.8817 43.4736 22.5765 43.2485 22.3515C43.0235 22.1264 42.7183 22 42.4 22H37.6V19.6H42.4C42.7183 19.6 43.0235 19.4736 43.2485 19.2485C43.4736 19.0235 43.6 18.7183 43.6 18.4C43.6 18.0817 43.4736 17.7765 43.2485 17.5515C43.0235 17.3264 42.7183 17.2 42.4 17.2H37.6V12.4C37.6 12.0817 37.7264 11.7765 37.9515 11.5515C38.1765 11.3264 38.4817 11.2 38.8 11.2ZM44.8 62.8H42.4V58C42.4 57.6817 42.5264 57.3765 42.7515 57.1515C42.9765 56.9264 43.2817 56.8 43.6 56.8C43.9183 56.8 44.2235 56.9264 44.4485 57.1515C44.6736 57.3765 44.8 57.6817 44.8 58V62.8ZM6.4 16C6.4 13.4539 7.41143 11.0121 9.21178 9.21178C11.0121 7.41143 13.4539 6.4 16 6.4C18.5461 6.4 20.9879 7.41143 22.7882 9.21178C24.5886 11.0121 25.6 13.4539 25.6 16V56.8C24.4757 55.3145 23.021 54.1112 21.3511 53.2853C19.6812 52.4595 17.8419 52.0338 15.979 52.0419C14.1161 52.0501 12.2806 52.4919 10.618 53.3323C8.95534 54.1727 7.51123 55.3887 6.4 56.884V16ZM73.6 72.4C73.6 72.7183 73.4736 73.0235 73.2485 73.2485C73.0235 73.4736 72.7183 73.6 72.4 73.6H16C14.1013 73.6 12.2452 73.037 10.6665 71.9821C9.08781 70.9272 7.85736 69.4279 7.13076 67.6738C6.40416 65.9196 6.21404 63.9894 6.58446 62.1271C6.95488 60.2649 7.86919 58.5544 9.21178 57.2118C10.5544 55.8692 12.2649 54.9549 14.1271 54.5845C15.9894 54.214 17.9196 54.4042 19.6738 55.1308C21.4279 55.8574 22.9272 57.0878 23.9821 58.6665C25.037 60.2452 25.6 62.1013 25.6 64C25.6 64.3183 25.7264 64.6235 25.9515 64.8485C26.1765 65.0736 26.4817 65.2 26.8 65.2C27.1183 65.2 27.4235 65.0736 27.6485 64.8485C27.8736 64.6235 28 64.3183 28 64V23.2H35.2V62.8H32.8C32.4817 62.8 32.1765 62.9264 31.9515 63.1515C31.7264 63.3765 31.6 63.6817 31.6 64C31.6 64.3183 31.7264 64.6235 31.9515 64.8485C32.1765 65.0736 32.4817 65.2 32.8 65.2H68.8C69.1183 65.2 69.4235 65.0736 69.6485 64.8485C69.8736 64.6235 70 64.3183 70 64C70 63.6817 69.8736 63.3765 69.6485 63.1515C69.4235 62.9264 69.1183 62.8 68.8 62.8H66.4V40C66.4 39.0452 66.0207 38.1296 65.3456 37.4544C64.6705 36.7793 63.7548 36.4 62.8 36.4C52.456 36.4 52.864 36.316 52 36.616V23.2H72.4C72.7183 23.2 73.0235 23.3264 73.2485 23.5515C73.4736 23.7765 73.6 24.0817 73.6 24.4V72.4Z" />
                      <path className="blocks_location_svg_icon2" d="M55.6003 41.1998H54.4003C54.082 41.1998 53.7768 41.3263 53.5518 41.5513C53.3267 41.7764 53.2003 42.0816 53.2003 42.3998C53.2003 42.7181 53.3267 43.0233 53.5518 43.2484C53.7768 43.4734 54.082 43.5998 54.4003 43.5998H55.6003C55.9186 43.5998 56.2238 43.4734 56.4488 43.2484C56.6739 43.0233 56.8003 42.7181 56.8003 42.3998C56.8003 42.0816 56.6739 41.7764 56.4488 41.5513C56.2238 41.3263 55.9186 41.1998 55.6003 41.1998ZM61.6003 41.1998H60.4003C60.082 41.1998 59.7768 41.3263 59.5518 41.5513C59.3267 41.7764 59.2003 42.0816 59.2003 42.3998C59.2003 42.7181 59.3267 43.0233 59.5518 43.2484C59.7768 43.4734 60.082 43.5998 60.4003 43.5998H61.6003C61.9186 43.5998 62.2238 43.4734 62.4488 43.2484C62.6739 43.0233 62.8003 42.7181 62.8003 42.3998C62.8003 42.0816 62.6739 41.7764 62.4488 41.5513C62.2238 41.3263 61.9186 41.1998 61.6003 41.1998ZM55.6003 45.9998H54.4003C54.082 45.9998 53.7768 46.1263 53.5518 46.3513C53.3267 46.5764 53.2003 46.8816 53.2003 47.1998C53.2003 47.5181 53.3267 47.8233 53.5518 48.0484C53.7768 48.2734 54.082 48.3998 54.4003 48.3998H55.6003C55.9186 48.3998 56.2238 48.2734 56.4488 48.0484C56.6739 47.8233 56.8003 47.5181 56.8003 47.1998C56.8003 46.8816 56.6739 46.5764 56.4488 46.3513C56.2238 46.1263 55.9186 45.9998 55.6003 45.9998ZM61.6003 45.9998H60.4003C60.082 45.9998 59.7768 46.1263 59.5518 46.3513C59.3267 46.5764 59.2003 46.8816 59.2003 47.1998C59.2003 47.5181 59.3267 47.8233 59.5518 48.0484C59.7768 48.2734 60.082 48.3998 60.4003 48.3998H61.6003C61.9186 48.3998 62.2238 48.2734 62.4488 48.0484C62.6739 47.8233 62.8003 47.5181 62.8003 47.1998C62.8003 46.8816 62.6739 46.5764 62.4488 46.3513C62.2238 46.1263 61.9186 45.9998 61.6003 45.9998ZM55.6003 50.7998H54.4003C54.082 50.7998 53.7768 50.9263 53.5518 51.1513C53.3267 51.3764 53.2003 51.6816 53.2003 51.9998C53.2003 52.3181 53.3267 52.6233 53.5518 52.8484C53.7768 53.0734 54.082 53.1998 54.4003 53.1998H55.6003C55.9186 53.1998 56.2238 53.0734 56.4488 52.8484C56.6739 52.6233 56.8003 52.3181 56.8003 51.9998C56.8003 51.6816 56.6739 51.3764 56.4488 51.1513C56.2238 50.9263 55.9186 50.7998 55.6003 50.7998ZM61.6003 50.7998H60.4003C60.082 50.7998 59.7768 50.9263 59.5518 51.1513C59.3267 51.3764 59.2003 51.6816 59.2003 51.9998C59.2003 52.3181 59.3267 52.6233 59.5518 52.8484C59.7768 53.0734 60.082 53.1998 60.4003 53.1998H61.6003C61.9186 53.1998 62.2238 53.0734 62.4488 52.8484C62.6739 52.6233 62.8003 52.3181 62.8003 51.9998C62.8003 51.6816 62.6739 51.3764 62.4488 51.1513C62.2238 50.9263 61.9186 50.7998 61.6003 50.7998ZM41.2003 67.5998H31.6003C31.282 67.5998 30.9768 67.7263 30.7518 67.9513C30.5267 68.1764 30.4003 68.4816 30.4003 68.7998C30.4003 69.1181 30.5267 69.4233 30.7518 69.6484C30.9768 69.8734 31.282 69.9998 31.6003 69.9998H41.2003C41.5186 69.9998 41.8238 69.8734 42.0488 69.6484C42.2739 69.4233 42.4003 69.1181 42.4003 68.7998C42.4003 68.4816 42.2739 68.1764 42.0488 67.9513C41.8238 67.7263 41.5186 67.5998 41.2003 67.5998ZM70.0003 67.5998H46.0003C45.682 67.5998 45.3768 67.7263 45.1518 67.9513C44.9267 68.1764 44.8003 68.4816 44.8003 68.7998C44.8003 69.1181 44.9267 69.4233 45.1518 69.6484C45.3768 69.8734 45.682 69.9998 46.0003 69.9998H70.0003C70.3186 69.9998 70.6238 69.8734 70.8488 69.6484C71.0739 69.4233 71.2003 69.1181 71.2003 68.7998C71.2003 68.4816 71.0739 68.1764 70.8488 67.9513C70.6238 67.7263 70.3186 67.5998 70.0003 67.5998ZM10.0003 17.1998C10.3186 17.1998 10.6238 17.0734 10.8488 16.8484C11.0739 16.6233 11.2003 16.3181 11.2003 15.9998V13.5998C11.2003 13.2816 11.0739 12.9764 10.8488 12.7513C10.6238 12.5263 10.3186 12.3998 10.0003 12.3998C9.68203 12.3998 9.37681 12.5263 9.15177 12.7513C8.92672 12.9764 8.80029 13.2816 8.80029 13.5998V15.9998C8.80029 16.3181 8.92672 16.6233 9.15177 16.8484C9.37681 17.0734 9.68203 17.1998 10.0003 17.1998ZM10.0003 49.5998C10.3186 49.5998 10.6238 49.4734 10.8488 49.2484C11.0739 49.0233 11.2003 48.7181 11.2003 48.3998V20.7998C11.2003 20.4816 11.0739 20.1764 10.8488 19.9513C10.6238 19.7263 10.3186 19.5998 10.0003 19.5998C9.68203 19.5998 9.37681 19.7263 9.15177 19.9513C8.92672 20.1764 8.80029 20.4816 8.80029 20.7998V48.3998C8.80029 48.7181 8.92672 49.0233 9.15177 49.2484C9.37681 49.4734 9.68203 49.5998 10.0003 49.5998Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3374">
                        <rect width="72" height="72" fill="white" transform="translate(4 4)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Sovuq o‘tkazmaydigan metalloplastik profil
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks_location;
