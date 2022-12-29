import React, { Component } from "react";
import toyPic from "../assets/toy.png";
import Logo from "../Components/Logo";
import Or from "../Components/Or";
import Paragraph from "../Components/Paragraph";

import LoginForm from "../Components/LoginForm";
import { Link } from "react-router-dom";
export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };
  onChange = (e) => {
    let { value, id } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    return (
      <div className="logIn">
        <section>
          <Logo />
          <Paragraph />
          <div>
            <div>Hideo Kojima</div>
            <img src={toyPic} alt="toy pic" />
          </div>
        </section>
        <section>
          <h1>Join the game!</h1>
          <p>Go inside the best gamers social network!</p>
          <div className="icons">
            <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.94141 9.18188L8.04828 12.1938C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18188Z"
                  fill="#FF3D00"
                />
                <path
                  d="M15.0002 27.5C18.2289 27.5 21.1627 26.2644 23.3808 24.255L19.5121 20.9813C18.2149 21.9678 16.6299 22.5013 15.0002 22.5C11.7489 22.5 8.98832 20.4269 7.94832 17.5338L3.87207 20.6744C5.94082 24.7225 10.1421 27.5 15.0002 27.5Z"
                  fill="#4CAF50"
                />
                <path
                  d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <div>
              <svg
                width="35"
                height="29"
                viewBox="0 0 35 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 3.48158C33.7121 4.053 32.3282 4.43919 30.8757 4.61293C32.3585 3.72372 33.4969 2.31562 34.033 0.637882C32.6235 1.47481 31.0814 2.06449 29.4733 2.38142C28.1634 0.985085 26.2973 0.112427 24.2319 0.112427C20.2662 0.112427 17.051 3.32946 17.051 7.29725C17.051 7.86046 17.1146 8.40876 17.237 8.93477C11.2692 8.63503 5.97816 5.77465 2.43646 1.42764C1.8185 2.48881 1.46439 3.72317 1.46439 5.03975C1.46439 7.53255 2.73219 9.73164 4.65883 11.0202C3.51852 10.9844 2.40331 10.6763 1.40629 10.1214C1.40588 10.1515 1.40588 10.1816 1.40588 10.2118C1.40588 13.693 3.88104 16.597 7.16584 17.2571C6.10844 17.5448 4.9993 17.587 3.92314 17.3802C4.83684 20.2347 7.48877 22.3119 10.6308 22.3701C8.17332 24.297 5.07705 25.4458 1.71295 25.4458C1.13326 25.4458 0.561777 25.4117 0 25.3454C3.17775 27.384 6.95215 28.5735 11.0072 28.5735C24.2152 28.5735 31.4377 17.6251 31.4377 8.13051C31.4377 7.81888 31.4308 7.50902 31.4169 7.20094C32.8227 6.18407 34.036 4.92458 35 3.48158Z"
                  fill="#55ACEE"
                />
              </svg>
            </div>
            <div>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.04312 30.625H0.693906V10.1784H7.04312V30.625ZM3.86469 7.38938C1.83469 7.38938 0.1875 5.70719 0.1875 3.67719C0.1875 2.70194 0.574917 1.76663 1.26452 1.07702C1.95413 0.387417 2.88944 0 3.86469 0C4.83994 0 5.77524 0.387417 6.46485 1.07702C7.15446 1.76663 7.54187 2.70194 7.54187 3.67719C7.54187 5.70719 5.89469 7.38938 3.86469 7.38938ZM30.8059 30.625H24.4709V20.6719C24.4709 18.2995 24.4228 15.2578 21.17 15.2578C17.8691 15.2578 17.3627 17.8347 17.3627 20.5012V30.625H11.02V10.1784H17.1089V12.9675H17.1975C18.0452 11.3608 20.1156 9.66547 23.2044 9.66547C29.6302 9.66547 30.8114 13.8972 30.8114 19.3933V30.625H30.8059Z"
                  fill="#0E76A8"
                />
              </svg>
            </div>
            <div>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4863 0.607911C7.03369 0.604493 0.1875 7.44727 0.1875 15.8931C0.1875 22.5718 4.47021 28.249 10.4346 30.334C11.2378 30.5357 11.1147 29.9648 11.1147 29.5752V26.9263C6.47656 27.4697 6.28857 24.4004 5.97754 23.8877C5.34863 22.8145 3.86182 22.541 4.30615 22.0283C5.3623 21.4849 6.43896 22.165 7.68652 24.0073C8.58887 25.3438 10.3491 25.1182 11.2412 24.896C11.436 24.0928 11.853 23.375 12.4272 22.8179C7.62158 21.9565 5.61865 19.0239 5.61865 15.5376C5.61865 13.8457 6.17578 12.2905 7.26953 11.0361C6.57227 8.96826 7.33447 7.19776 7.43701 6.93457C9.42285 6.75684 11.4873 8.35645 11.6479 8.48291C12.7759 8.17871 14.0645 8.01807 15.5068 8.01807C16.9561 8.01807 18.248 8.18555 19.3862 8.49317C19.7725 8.19922 21.6865 6.8252 23.5322 6.99268C23.6313 7.25586 24.3765 8.98536 23.7202 11.0259C24.8276 12.2837 25.3916 13.8525 25.3916 15.5479C25.3916 19.041 23.375 21.9771 18.5557 22.8247C18.9685 23.2307 19.2962 23.7148 19.5198 24.2488C19.7434 24.7829 19.8583 25.3561 19.8579 25.9351V29.7803C19.8853 30.0879 19.8579 30.3921 20.3706 30.3921C26.4238 28.3516 30.7817 22.6333 30.7817 15.8965C30.7817 7.44727 23.9321 0.607911 15.4863 0.607911Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <Or />
          <LoginForm handelChange={this.onChange} {...this.state} />
          <div className="link">
            Don’t have an account?
            <span><Link to={'/signup'}> Register</Link></span>
          </div>
        </section>
      </div>
    );
  }
}
