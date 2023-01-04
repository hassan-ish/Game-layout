import * as yup from "yup";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import "./style.css";
export default function SignupForm(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .matches(
        /[a-z]|[A-Z]|[0-9]/,
        "password must have a lower,upper case and a number "
      )
      .required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password")], "the password should be matching")
      .required(),
    ischecked: yup.boolean().oneOf([true], "must be checked").required(),
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    schema
      .validate(
        {
          email: props.email,
          password: props.password,
          repassword: props.repassword,
          ischecked: props.ischecked,
        },
        { abortEarly: false }
      )
      .then(() => {
        console.log("valid");
        navigate("/home");
      })
      .catch((e) => {
        console.log(e.errors);
      });
  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="email">Email address*</label>
      <input
        type="email"
        id="email"
        onChange={props.handelChange}
        value={props.email}
      />
      <label htmlFor="password">Create password*</label>
      <input
        type="password"
        id="password"
        onChange={props.handelChange}
        value={props.password}
      />
      <label htmlFor="">Repeat password*</label>
      <input
        type="password"
        id="repassword"
        onChange={props.handelChange}
        value={props.repassword}
      />
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={props.handelCheckbox}
          checked={props.ischecked}
        />
        I agree to terms & conditions
      </label>
      <Button text="Register Account" />
    </form>
  );
}
