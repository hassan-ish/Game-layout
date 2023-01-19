import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import Button from "../Button";

import "./style.css";
export default function LoginForm(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup.string().required("Please Enter your password"),
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    schema
      .validate({
        email: props.email,
        password: props.password,
      })
      .then(() => {
      
        navigate("/home");
      })
      .catch((error) => {
        props.handelErrors(error)
      });
  };

  return (
    <form className="logIn" onSubmit={handelSubmit}>
      <label htmlFor="userName">Your email</label>
      <input
        type="email"
        id="email"
        placeholder="Write your email"
        value={props.email}
        onChange={props.handelChange}
      />
      <label htmlFor="password">Enter your password</label>
      <input
        type="password"
        id="password"
        placeholder="•••••••••"
        value={props.password}
        onChange={props.handelChange}
      />
      <div className="errors">{props.errors}</div>
      <Button text="Login" />
    </form>
  );
}
