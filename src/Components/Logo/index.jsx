import React, { Component } from 'react'
import './style.css'
export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
            <svg
              width="95"
              height="103"
              viewBox="0 0 95 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.72 35.2194C61.3051 44.4024 51.9151 50.7412 41.0447 50.7412C25.9324 50.7412 13.6815 38.4902 13.6815 23.3779C13.6815 13.4769 18.9401 4.80404 26.8167 0C11.5515 2.86226 0 16.2604 0 32.3565C0 50.5384 14.7394 65.2778 32.9214 65.2778C50.1388 65.2778 64.2691 52.0608 65.72 35.2194Z"
                fill="#1565D8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M79.0933 75.915C71.1335 82.275 59.9242 83.9152 50.1291 79.2021C36.5112 72.6496 30.7836 56.2983 37.3361 42.6804C41.6291 33.7585 50.1281 28.2234 59.3087 27.3096C44.3119 23.2698 28.0933 30.3344 21.1142 44.8389C13.2307 61.2229 20.1217 80.8955 36.5057 88.779C52.0201 96.2441 70.4835 90.4613 79.0933 75.915Z"
                fill="#1565D8"
              />
            </svg>
            <svg
              width="250"
              height="53"
              viewBox="0 0 250 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.7891 45.9023C41.4453 47.8945 38.832 49.4297 35.9492 50.5078C33.0664 51.5625 30.0664 52.0898 26.9492 52.0898C24.5586 52.0898 22.25 51.7734 20.0234 51.1406C17.8203 50.5312 15.7578 49.6641 13.8359 48.5391C11.9141 47.3906 10.1562 46.0312 8.5625 44.4609C6.96875 42.8672 5.60938 41.1094 4.48438 39.1875C3.35938 37.2422 2.48047 35.1562 1.84766 32.9297C1.23828 30.7031 0.933594 28.3945 0.933594 26.0039C0.933594 23.6133 1.23828 21.3164 1.84766 19.1133C2.48047 16.9102 3.35938 14.8477 4.48438 12.9258C5.60938 10.9805 6.96875 9.22266 8.5625 7.65234C10.1562 6.05859 11.9141 4.69922 13.8359 3.57422C15.7578 2.44922 17.8203 1.58203 20.0234 0.972656C22.25 0.339844 24.5586 0.0234375 26.9492 0.0234375C30.0664 0.0234375 33.0664 0.5625 35.9492 1.64062C38.832 2.69531 41.4453 4.21875 43.7891 6.21094L38.5156 15C36.9922 13.4531 35.2344 12.2461 33.2422 11.3789C31.25 10.4883 29.1523 10.043 26.9492 10.043C24.7461 10.043 22.6719 10.4648 20.7266 11.3086C18.8047 12.1523 17.1172 13.3008 15.6641 14.7539C14.2109 16.1836 13.0625 17.8711 12.2188 19.8164C11.375 21.7383 10.9531 23.8008 10.9531 26.0039C10.9531 28.2305 11.375 30.3164 12.2188 32.2617C13.0625 34.207 14.2109 35.9062 15.6641 37.3594C17.1172 38.8125 18.8047 39.9609 20.7266 40.8047C22.6719 41.6484 24.7461 42.0703 26.9492 42.0703C28.2148 42.0703 29.4453 41.918 30.6406 41.6133C31.8359 41.3086 32.9727 40.8867 34.0508 40.3477V26.0039H43.7891V45.9023ZM86.9961 51H84.6758L80.9492 45.832C80.0352 46.6523 79.0625 47.4258 78.0312 48.1523C77.0234 48.8555 75.957 49.4766 74.832 50.0156C73.707 50.5312 72.5469 50.9414 71.3516 51.2461C70.1797 51.5508 68.9844 51.7031 67.7656 51.7031C65.1172 51.7031 62.6211 51.2578 60.2773 50.3672C57.957 49.4766 55.918 48.1875 54.1602 46.5C52.4258 44.7891 51.0547 42.7031 50.0469 40.2422C49.0391 37.7812 48.5352 34.9805 48.5352 31.8398C48.5352 28.9102 49.0391 26.2266 50.0469 23.7891C51.0547 21.3281 52.4258 19.2188 54.1602 17.4609C55.918 15.7031 57.957 14.3437 60.2773 13.3828C62.6211 12.3984 65.1172 11.9062 67.7656 11.9062C68.9844 11.9062 70.1914 12.0586 71.3867 12.3633C72.582 12.668 73.7422 13.0898 74.8672 13.6289C75.9922 14.168 77.0586 14.8008 78.0664 15.5273C79.0977 16.2539 80.0586 17.0391 80.9492 17.8828L84.6758 13.418H86.9961V51ZM77.3281 31.8398C77.3281 30.5273 77.0703 29.2617 76.5547 28.043C76.0625 26.8008 75.3828 25.7109 74.5156 24.7734C73.6484 23.8125 72.6289 23.0508 71.457 22.4883C70.3086 21.9023 69.0781 21.6094 67.7656 21.6094C66.4531 21.6094 65.2109 21.832 64.0391 22.2773C62.8906 22.7227 61.8828 23.3789 61.0156 24.2461C60.1719 25.1133 59.5039 26.1914 59.0117 27.4805C58.5195 28.7461 58.2734 30.1992 58.2734 31.8398C58.2734 33.4805 58.5195 34.9453 59.0117 36.2344C59.5039 37.5 60.1719 38.5664 61.0156 39.4336C61.8828 40.3008 62.8906 40.957 64.0391 41.4023C65.2109 41.8477 66.4531 42.0703 67.7656 42.0703C69.0781 42.0703 70.3086 41.7891 71.457 41.2266C72.6289 40.6406 73.6484 39.8789 74.5156 38.9414C75.3828 37.9805 76.0625 36.8906 76.5547 35.6719C77.0703 34.4297 77.3281 33.1523 77.3281 31.8398ZM142.227 51H132.664V27.0938C132.664 26.4375 132.535 25.8164 132.277 25.2305C132.043 24.6445 131.703 24.1289 131.258 23.6836C130.812 23.2383 130.297 22.8984 129.711 22.6641C129.125 22.4062 128.504 22.2773 127.848 22.2773C127.191 22.2773 126.57 22.4062 125.984 22.6641C125.422 22.8984 124.918 23.2383 124.473 23.6836C124.051 24.1289 123.711 24.6445 123.453 25.2305C123.219 25.8164 123.102 26.4375 123.102 27.0938V51H113.504V27.0938C113.504 26.4375 113.375 25.8164 113.117 25.2305C112.883 24.6445 112.543 24.1289 112.098 23.6836C111.652 23.2383 111.137 22.8984 110.551 22.6641C109.965 22.4062 109.344 22.2773 108.688 22.2773C108.031 22.2773 107.41 22.4062 106.824 22.6641C106.262 22.8984 105.758 23.2383 105.312 23.6836C104.891 24.1289 104.551 24.6445 104.293 25.2305C104.059 25.8164 103.941 26.4375 103.941 27.0938V51H94.3438V13.3477H96.6641L99.2656 16.2305C100.602 15.1055 102.066 14.2383 103.66 13.6289C105.277 12.9961 106.953 12.6797 108.688 12.6797C110.445 12.6797 112.156 13.0078 113.82 13.6641C115.508 14.3203 116.984 15.457 118.25 17.0742C118.836 16.2773 119.504 15.5977 120.254 15.0352C121.004 14.4727 121.789 14.0156 122.609 13.6641C123.453 13.3125 124.32 13.0664 125.211 12.9258C126.102 12.7617 126.98 12.6797 127.848 12.6797C129.84 12.6797 131.703 13.0547 133.438 13.8047C135.195 14.5547 136.719 15.5859 138.008 16.8984C139.32 18.1875 140.352 19.7109 141.102 21.4688C141.852 23.2266 142.227 25.1016 142.227 27.0938V51ZM164.234 41.7891C164.609 41.9062 164.984 41.9883 165.359 42.0352C165.734 42.0586 166.109 42.0703 166.484 42.0703C167.422 42.0703 168.324 41.9414 169.191 41.6836C170.059 41.4258 170.867 41.0625 171.617 40.5938C172.391 40.1016 173.07 39.5156 173.656 38.8359C174.266 38.1328 174.758 37.3594 175.133 36.5156L182.164 43.582C181.273 44.8477 180.242 45.9844 179.07 46.9922C177.922 48 176.668 48.8555 175.309 49.5586C173.973 50.2617 172.555 50.7891 171.055 51.1406C169.578 51.5156 168.055 51.7031 166.484 51.7031C163.836 51.7031 161.34 51.2109 158.996 50.2266C156.676 49.2422 154.637 47.8711 152.879 46.1133C151.145 44.3555 149.773 42.2695 148.766 39.8555C147.758 37.418 147.254 34.7461 147.254 31.8398C147.254 28.8633 147.758 26.1445 148.766 23.6836C149.773 21.2227 151.145 19.125 152.879 17.3906C154.637 15.6562 156.676 14.3086 158.996 13.3477C161.34 12.3867 163.836 11.9062 166.484 11.9062C168.055 11.9062 169.59 12.0937 171.09 12.4688C172.59 12.8438 174.008 13.3828 175.344 14.0859C176.703 14.7891 177.969 15.6562 179.141 16.6875C180.312 17.6953 181.344 18.832 182.234 20.0977L164.234 41.7891ZM169.156 21.9961C168.711 21.832 168.266 21.7266 167.82 21.6797C167.398 21.6328 166.953 21.6094 166.484 21.6094C165.172 21.6094 163.93 21.8555 162.758 22.3477C161.609 22.8164 160.602 23.4961 159.734 24.3867C158.891 25.2773 158.223 26.3555 157.73 27.6211C157.238 28.8633 156.992 30.2695 156.992 31.8398C156.992 32.1914 157.004 32.5898 157.027 33.0352C157.074 33.4805 157.133 33.9375 157.203 34.4062C157.297 34.8516 157.402 35.2852 157.52 35.707C157.637 36.1289 157.789 36.5039 157.977 36.832L169.156 21.9961ZM196.684 51H187.086V13.3477H189.406L192.57 17.8125C194.117 16.4062 195.875 15.3281 197.844 14.5781C199.812 13.8047 201.852 13.418 203.961 13.418H212.434V22.9805H203.961C202.953 22.9805 202.004 23.168 201.113 23.543C200.223 23.918 199.449 24.4336 198.793 25.0898C198.137 25.7461 197.621 26.5195 197.246 27.4102C196.871 28.3008 196.684 29.25 196.684 30.2578V51ZM237.148 51H215.211V41.4375H237.148C237.805 41.4375 238.367 41.2031 238.836 40.7344C239.305 40.2656 239.539 39.7031 239.539 39.0469C239.539 38.3672 239.305 37.9219 238.836 37.7109C238.367 37.5 237.805 37.3945 237.148 37.3945H227.164C225.5 37.3945 223.941 37.0781 222.488 36.4453C221.035 35.8125 219.77 34.957 218.691 33.8789C217.613 32.7773 216.758 31.5 216.125 30.0469C215.516 28.5938 215.211 27.0352 215.211 25.3711C215.211 23.707 215.516 22.1484 216.125 20.6953C216.758 19.2422 217.613 17.9766 218.691 16.8984C219.77 15.8203 221.035 14.9766 222.488 14.3672C223.941 13.7344 225.5 13.418 227.164 13.418H246.605V22.9805H227.164C226.508 22.9805 225.945 23.2148 225.477 23.6836C225.008 24.1523 224.773 24.7148 224.773 25.3711C224.773 26.0508 225.008 26.6367 225.477 27.1289C225.945 27.5977 226.508 27.832 227.164 27.832H237.148C238.789 27.832 240.336 28.1133 241.789 28.6758C243.242 29.2148 244.508 29.9766 245.586 30.9609C246.664 31.9453 247.52 33.1289 248.152 34.5117C248.785 35.8945 249.102 37.4062 249.102 39.0469C249.102 40.7109 248.785 42.2695 248.152 43.7227C247.52 45.1523 246.664 46.418 245.586 47.5195C244.508 48.5977 243.242 49.4531 241.789 50.0859C240.336 50.6953 238.789 51 237.148 51Z"
                fill="#1565D8"
              />
            </svg>
          </div>
    )
  }
}
