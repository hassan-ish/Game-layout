import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import Button from "../Button";

import "./style.css";
export default function LoginForm(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    schema
      .validate({
        email: props.email,
        password: props.password,
      })
      .then(() => {
        console.log("valid");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e.errors);
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
      <Button text="Login" />
    </form>
  );
}
