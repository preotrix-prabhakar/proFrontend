import styles from './LoginForm.module.css'
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { PiEyeSlash } from "react-icons/pi";
import { useNavigate } from "react-router";
import { useState } from "react";
import { userLogin } from "../../apis/auth";
export default function LoginForm() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isHidden, setIsHidden] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    const response = await userLogin({ ...credentials });
    if (response) {
      console.log(response);
      localStorage.setItem("token", response.jwt);
      localStorage.setItem("userName", response.name);
      navigate("/board");
    }

    setErrorFlag(true);
  }
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container} >
      <h1 className={styles.heading}>Login</h1>
      <div className={styles.form} >
        <div className={styles.inputFields} >
          <MdOutlineEmail className={styles.icon} />
          <input
            type="textarea"
            id="email"
            value={credentials.email}
            onChange={onChangeHandler}
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div className={styles.inputFields}>
          <HiOutlineLockClosed className={styles.icon} />
          <input
            type={isHidden ? "password" : "text"}
            id="password"
            onChange={onChangeHandler}
            value={credentials.password}
            name="password"
            placeholder="Password"
          ></input>

          {

            (isHidden) ? <HiOutlineEye className={styles.icon} onClick={() => setIsHidden(!isHidden)} /> :
              <PiEyeSlash className={styles.icon} onClick={() => setIsHidden(!isHidden)} />

          }
        </div>
        <button onClick={handleSubmit} id={styles.submit_button}>Login</button>
        <h1 className={styles.subHeading}>Have no account yet?</h1>
        <button
          onClick={() => { navigate('/register') }}
          className={styles.register_button}
        >
          Register
        </button>
      </div>
    </div>
  )
}