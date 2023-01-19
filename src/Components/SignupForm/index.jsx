import * as yup from "yup";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

import "./style.css";
export default function SignupForm(props) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter your Email"),
    password: yup
      .string()
      .min(8)
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Please Enter your password"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Passwords must match"),
    ischecked: yup
      .boolean()
      .oneOf([true], "You should agree to terms & conditions")
      .required(),
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
      .catch((error) => {
        props.handelErrors(error)
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
      <div className="errors">{props.errors.map((ele,index) => <div key={index}>{ele}</div>)}</div>
      <Button text="Register Account" />
    </form>
  );
}
