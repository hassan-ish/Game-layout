import React, { Component } from "react";
import Game from "../Components/Game";
import PlayedGame from "../Components/PlayedGame";
import Trophy from "../Components/Trophy";

import pfp from "../assets/pfp.png";
import gow from "../assets/GOD OF WAR-2.png";
import spiderMan from "../assets/SPIDERMAN.png";
import superMan from "../assets/SUPERMAN-2.png";
import hw from "../assets/HogWarts.png";
import gow2 from "../assets/GOW.png";
import crash from "../assets/crash.png";
import dl from "../assets/DL2.png";
import frinds from "../assets/FRIENDS.png";
export default class Home extends Component {
  render() {
    return (
      <main className="home">
        {/* the side bar */}
        <section>
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_10_29)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30 6.66665C30 4.8257 31.4924 3.33331 33.3333 3.33331H46.6667C48.5076 3.33331 50 4.8257 50 6.66665V25C50 25.884 49.6488 26.7319 49.0237 27.357L42.357 34.0237C41.0553 35.3254 38.9447 35.3254 37.643 34.0237L30.9763 27.357C30.3512 26.7319 30 25.884 30 25V6.66665ZM36.6667 9.99998V23.6193L40 26.9526L43.3333 23.6193V9.99998H36.6667Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.643 45.9763C38.9447 44.6746 41.0553 44.6746 42.357 45.9763L49.0237 52.643C49.6488 53.2681 50 54.1159 50 55V73.3333C50 75.1743 48.5076 76.6667 46.6667 76.6667H33.3333C31.4924 76.6667 30 75.1743 30 73.3333V55C30 54.1159 30.3512 53.2681 30.9763 52.643L37.643 45.9763ZM36.6667 56.3807V70H43.3333V56.3807L40 53.0474L36.6667 56.3807Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M52.643 30.9763C53.2681 30.3512 54.1159 30 55 30H73.3333C75.1743 30 76.6667 31.4924 76.6667 33.3333V46.6667C76.6667 48.5076 75.1743 50 73.3333 50H55C54.1159 50 53.2681 49.6488 52.643 49.0237L45.9763 42.357C44.6746 41.0553 44.6746 38.9447 45.9763 37.643L52.643 30.9763ZM56.3807 36.6667L53.0474 40L56.3807 43.3333H70V36.6667H56.3807Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33331 33.3333C3.33331 31.4924 4.8257 30 6.66665 30H25C25.884 30 26.7319 30.3512 27.357 30.9763L34.0237 37.643C35.3254 38.9447 35.3254 41.0553 34.0237 42.357L27.357 49.0237C26.7319 49.6488 25.884 50 25 50H6.66665C4.8257 50 3.33331 48.5076 3.33331 46.6667V33.3333ZM9.99998 36.6667V43.3333H23.6193L26.9526 40L23.6193 36.6667H9.99998Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_10_29"
                  x="0"
                  y="0"
                  width="82"
                  height="82"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="2" dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_10_29"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <nav>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_3_14)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.29169 21.7708C2.29169 13.5441 8.96078 6.875 17.1875 6.875C21.1911 6.875 24.8254 8.45583 27.5 11.0222C30.1747 8.45583 33.8089 6.875 37.8125 6.875C46.0392 6.875 52.7084 13.5441 52.7084 21.7708C52.7084 28.9532 48.5009 35.5194 43.5946 40.4743C38.6659 45.4517 32.6382 49.2062 28.2227 50.6735C27.7535 50.8294 27.2465 50.8294 26.7773 50.6735C22.3618 49.2062 16.3341 45.4517 11.4055 40.4743C6.4991 35.5194 2.29169 28.9532 2.29169 21.7708ZM17.1875 11.4583C11.4921 11.4583 6.87502 16.0754 6.87502 21.7708C6.87502 27.1927 10.1155 32.6577 14.6623 37.2494C18.8937 41.5226 23.9178 44.6923 27.5 46.065C31.0823 44.6923 36.1063 41.5226 40.3378 37.2494C44.8845 32.6577 48.125 27.1927 48.125 21.7708C48.125 16.0754 43.5079 11.4583 37.8125 11.4583C34.3266 11.4583 31.2439 13.1858 29.3737 15.8415C28.9445 16.4511 28.2455 16.8137 27.5 16.8137C26.7545 16.8137 26.0556 16.4511 25.6263 15.8415C23.7561 13.1858 20.6734 11.4583 17.1875 11.4583Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_3_14"
                    x="0"
                    y="0"
                    width="55"
                    height="59"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_3_14"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_3_9)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.7608 3.20332C21.8101 2.91288 22.9188 3.40072 23.4136 4.3705C24.1745 5.86193 25.7209 6.87515 27.5 6.87515C29.2791 6.87515 30.8256 5.86193 31.5865 4.3705C32.0812 3.40072 33.19 2.91288 34.2392 3.20332C38.19 4.29696 41.7483 6.32662 44.6615 9.03541C45.4029 9.72479 45.6041 10.819 45.1565 11.727C44.8569 12.3346 44.6875 13.0193 44.6875 13.7501C44.6875 16.2814 46.7396 18.3334 49.2709 18.3334L49.3346 18.333C50.3477 18.3185 51.2501 18.9711 51.5537 19.9377C52.3044 22.3279 52.7084 24.869 52.7084 27.5001C52.7084 29.2367 52.5324 30.9345 52.1967 32.576C51.9615 33.7259 50.8955 34.5123 49.7274 34.3975C49.5773 34.3827 49.4251 34.3751 49.2709 34.3751C46.7396 34.3751 44.6875 36.4272 44.6875 38.9584C44.6875 40.0858 45.0916 41.1128 45.7654 41.9115C46.5223 42.8086 46.479 44.1326 45.6651 44.9783C42.6905 48.0693 38.9313 50.4049 34.7038 51.6635C33.5079 52.0195 32.2469 51.3534 31.867 50.1649C31.2755 48.3146 29.5407 46.9793 27.5 46.9793C25.4594 46.9793 23.7246 48.3146 23.1331 50.1649C22.7531 51.3534 21.4922 52.0195 20.2963 51.6635C16.0688 50.4049 12.3095 48.0693 9.33489 44.9784C8.52096 44.1326 8.47767 42.8086 9.23462 41.9114C9.90847 41.1128 10.3125 40.0858 10.3125 38.9584C10.3125 36.4271 8.26049 34.3751 5.72919 34.3751C5.57503 34.3751 5.42276 34.3827 5.27265 34.3975C4.10456 34.5123 3.03856 33.7259 2.80337 32.576C2.46761 30.9345 2.29169 29.2367 2.29169 27.5001C2.29169 24.869 2.69556 22.3279 3.44635 19.9377C3.74998 18.971 4.65232 18.3185 5.66541 18.333L5.72919 18.3334C8.26049 18.3334 10.3125 16.2814 10.3125 13.7501C10.3125 13.0193 10.1432 12.3346 9.84359 11.727C9.39593 10.819 9.59713 9.72479 10.3385 9.03541C13.2517 6.32662 16.8101 4.29696 20.7608 3.20332ZM14.5941 11.411C14.7911 12.1589 14.8959 12.9433 14.8959 13.7501C14.8959 18.2345 11.6757 21.9668 7.42159 22.7609C7.06436 24.2808 6.87502 25.8671 6.87502 27.5001C6.87502 28.306 6.92112 29.1002 7.0107 29.8806C11.4666 30.504 14.8959 34.3308 14.8959 38.9584C14.8959 40.4234 14.5509 41.8104 13.9386 43.0401C15.6574 44.5415 17.6262 45.7615 19.7733 46.6296C21.401 44.0849 24.2513 42.3959 27.5 42.3959C30.7487 42.3959 33.5991 44.0849 35.2268 46.6296C37.3738 45.7615 39.3427 44.5415 41.0614 43.0401C40.4491 41.8104 40.1042 40.4234 40.1042 38.9584C40.1042 34.3308 43.5334 30.504 47.9893 29.8806C48.0789 29.1002 48.125 28.306 48.125 27.5001C48.125 25.8671 47.9357 24.2808 47.5784 22.7609C43.3243 21.9668 40.1042 18.2345 40.1042 13.7501C40.1042 12.9433 40.209 12.1589 40.4059 11.411C38.6695 10.016 36.7037 8.8973 34.5752 8.12001C32.8957 10.1565 30.3511 11.4585 27.5 11.4585C24.6489 11.4585 22.1044 10.1565 20.4249 8.12001C18.2964 8.8973 16.3306 10.016 14.5941 11.411Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.1875 27.5C17.1875 21.8046 21.8046 17.1875 27.5 17.1875C33.1954 17.1875 37.8125 21.8046 37.8125 27.5C37.8125 33.1954 33.1954 37.8125 27.5 37.8125C21.8046 37.8125 17.1875 33.1954 17.1875 27.5ZM27.5 21.7708C24.3359 21.7708 21.7708 24.3359 21.7708 27.5C21.7708 30.6641 24.3359 33.2292 27.5 33.2292C30.6641 33.2292 33.2292 30.6641 33.2292 27.5C33.2292 24.3359 30.6641 21.7708 27.5 21.7708Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_3_9"
                    x="0"
                    y="0"
                    width="55"
                    height="59"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_3_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_3_4)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.7709 6.875C19.2396 6.875 17.1875 8.92703 17.1875 11.4583V13.75C17.1875 15.0157 16.1615 16.0417 14.8959 16.0417H6.87502V25.2083H9.16669C14.2293 25.2083 18.3334 29.3124 18.3334 34.375C18.3334 39.4376 14.2293 43.5417 9.16669 43.5417H6.87502V48.125H36.6667V41.25C36.6667 39.9843 37.6927 38.9583 38.9584 38.9583H43.5417C46.073 38.9583 48.125 36.9063 48.125 34.375C48.125 31.8437 46.073 29.7917 43.5417 29.7917H38.9584C37.6927 29.7917 36.6667 28.7657 36.6667 27.5V16.0417H28.6459C27.3802 16.0417 26.3542 15.0157 26.3542 13.75V11.4583C26.3542 8.92703 24.3022 6.875 21.7709 6.875ZM12.6042 11.4583C12.6042 6.39572 16.7083 2.29166 21.7709 2.29166C26.8335 2.29166 30.9375 6.39572 30.9375 11.4583H38.9584C40.224 11.4583 41.25 12.4843 41.25 13.75V25.2083H43.5417C48.6043 25.2083 52.7084 29.3124 52.7084 34.375C52.7084 39.4376 48.6043 43.5417 43.5417 43.5417H41.25V50.4167C41.25 51.6823 40.224 52.7083 38.9584 52.7083H4.58335C3.3177 52.7083 2.29169 51.6823 2.29169 50.4167V41.25C2.29169 39.9843 3.3177 38.9583 4.58335 38.9583H9.16669C11.698 38.9583 13.75 36.9063 13.75 34.375C13.75 31.8437 11.698 29.7917 9.16669 29.7917H4.58335C3.3177 29.7917 2.29169 28.7657 2.29169 27.5V13.75C2.29169 12.4843 3.3177 11.4583 4.58335 11.4583H12.6042Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_3_4"
                    x="0"
                    y="0"
                    width="55"
                    height="59"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_3_4"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </nav>
          <div className="theme">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.4239 5.22036C10.3671 6.44176 5.00002 12.5941 5.00002 20C5.00002 28.2843 11.7157 35 20 35C27.4059 35 33.5582 29.6329 34.7796 22.5761C32.5561 24.8211 29.4715 26.2121 26.0606 26.2121C19.2825 26.2121 13.7879 20.7175 13.7879 13.9394C13.7879 10.5285 15.1789 7.44393 17.4239 5.22036ZM1.66669 20C1.66669 9.87476 9.87479 1.66666 20 1.66666C21.2706 1.66666 22.5127 1.79616 23.7133 2.04325C24.4721 2.19943 25.0232 2.85788 25.0434 3.63233C25.0635 4.40678 24.5474 5.093 23.7977 5.28845C19.9554 6.29023 17.1213 9.78592 17.1213 13.9394C17.1213 18.8765 21.1235 22.8787 26.0606 22.8787C30.2141 22.8787 33.7098 20.0446 34.7115 16.2023C34.9069 15.4526 35.5932 14.9365 36.3676 14.9566C37.142 14.9768 37.8005 15.5279 37.9567 16.2867C38.2038 17.4872 38.3334 18.7294 38.3334 20C38.3334 30.1252 30.1252 38.3333 20 38.3333C9.87479 38.3333 1.66669 30.1252 1.66669 20Z"
                  fill="#5B5A5A"
                />
              </svg>
            </div>
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 20C7.5 13.0964 13.0964 7.5 20 7.5C26.9036 7.5 32.5 13.0964 32.5 20C32.5 26.9036 26.9036 32.5 20 32.5C13.0964 32.5 7.5 26.9036 7.5 20ZM20 10.8333C14.9374 10.8333 10.8333 14.9374 10.8333 20C10.8333 25.0626 14.9374 29.1667 20 29.1667C25.0626 29.1667 29.1667 25.0626 29.1667 20C29.1667 14.9374 25.0626 10.8333 20 10.8333Z"
                  fill="white"
                />
                <path
                  d="M20 5.00001C21.1506 5.00001 22.0834 4.06727 22.0834 2.91668C22.0834 1.76609 21.1506 0.833344 20 0.833344C18.8494 0.833344 17.9167 1.76609 17.9167 2.91668C17.9167 4.06727 18.8494 5.00001 20 5.00001Z"
                  fill="white"
                />
                <path
                  d="M32.0833 10C33.2339 10 34.1667 9.06726 34.1667 7.91668C34.1667 6.76609 33.2339 5.83334 32.0833 5.83334C30.9327 5.83334 30 6.76609 30 7.91668C30 9.06726 30.9327 10 32.0833 10Z"
                  fill="white"
                />
                <path
                  d="M37.0833 22.0833C38.2339 22.0833 39.1667 21.1506 39.1667 20C39.1667 18.8494 38.2339 17.9167 37.0833 17.9167C35.9327 17.9167 35 18.8494 35 20C35 21.1506 35.9327 22.0833 37.0833 22.0833Z"
                  fill="white"
                />
                <path
                  d="M32.0833 34.1667C33.2339 34.1667 34.1667 33.2339 34.1667 32.0833C34.1667 30.9327 33.2339 30 32.0833 30C30.9327 30 30 30.9327 30 32.0833C30 33.2339 30.9327 34.1667 32.0833 34.1667Z"
                  fill="white"
                />
                <path
                  d="M20 39.1667C21.1506 39.1667 22.0834 38.2339 22.0834 37.0833C22.0834 35.9327 21.1506 35 20 35C18.8494 35 17.9167 35.9327 17.9167 37.0833C17.9167 38.2339 18.8494 39.1667 20 39.1667Z"
                  fill="white"
                />
                <path
                  d="M7.91665 34.1667C9.06723 34.1667 9.99998 33.2339 9.99998 32.0833C9.99998 30.9327 9.06723 30 7.91665 30C6.76605 30 5.83331 30.9327 5.83331 32.0833C5.83331 33.2339 6.76605 34.1667 7.91665 34.1667Z"
                  fill="white"
                />
                <path
                  d="M2.91665 22.0833C4.06724 22.0833 4.99998 21.1506 4.99998 20C4.99998 18.8494 4.06724 17.9167 2.91665 17.9167C1.76605 17.9167 0.833313 18.8494 0.833313 20C0.833313 21.1506 1.76605 22.0833 2.91665 22.0833Z"
                  fill="white"
                />
                <path
                  d="M7.91665 10C9.06723 10 9.99998 9.06726 9.99998 7.91668C9.99998 6.76609 9.06723 5.83334 7.91665 5.83334C6.76605 5.83334 5.83331 6.76609 5.83331 7.91668C5.83331 9.06726 6.76605 10 7.91665 10Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </section>
        {/* the vertecal line */}
        <hr />
        {/* main section */}
        <section>
          {/* the profile picture */}
          <div>
            <p>
              Welcome back,
              <br />
              Jenny!
            </p>
            <div className="pfp">
              <img src={pfp} alt="pfp" />
            </div>
          </div>
          <div className="content">
            <div className="games-section">
              <p className="title">NEW GAMES </p>
              <div>
                <Game
                  src={gow}
                  TextSide="right"
                  text="Join in the new DLC with Kratos to learn more about him and his future."
                />
                <Game
                  src={superMan}
                  TextSide="right"
                  text="Be part of the Suicide Squad and kill the Justice League! -Amanda Waller"
                />
                <Game
                  src={spiderMan}
                  TextSide="left"
                  text="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
                />
              </div>
            </div>
            <div className="bottomSection">
              <div className="lastPlayed">
                <p className="title">last played</p>
                <div>
                  <PlayedGame src={hw} text="Hogwarts Legacy 50%" />
                  <PlayedGame src={gow2} text="God Of War: Ragnarök 72.5%" />
                  <PlayedGame
                    src={crash}
                    text="Crash Bandicoot N. Sane Trilogy 34%"
                  />
                  <PlayedGame src={dl} text="Dying Light 2 Stay Human 100% " />
                </div>
              </div>
              <div className="recentTrophy">
                <p className="title">most recent trophy</p>
                <Trophy />
              </div>
              <div className="friends">
                <p className="title">friends</p>
                <div>
                  <img src={frinds} alt="frinds" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
