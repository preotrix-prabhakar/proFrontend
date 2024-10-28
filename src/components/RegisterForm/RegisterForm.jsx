import styles from './RegisterForm.module.css'
import { HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { PiEyeSlash } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
export default function RegisterForm(){
    return(
        <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <div>
        <form className={styles.form}>
          <div className={styles.inputFields}>
            <FaRegUser className={styles.icon}/>
            <input
              type="textarea"
              id="name"
              name="name"
              placeholder="Name"
            ></input>
          </div>
          <div className={styles.inputFields}>
            
              <MdOutlineEmail className={styles.icon}/>
            <input
              type="textarea"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className={styles.inputFields}>
          <HiOutlineLockClosed className={styles.icon}/>
            <input
              className={styles.password_input}
              type="textarea"
              id="password"
              name="password"
              placeholder="Password"
            ></input>
                <HiOutlineEye className={styles.icon}/>
            
          </div>
          <div className={styles.inputFields}>
              <HiOutlineLockClosed className={styles.icon}/>
            <input
              className={styles.password_input}
              type="textarea"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
            ></input>
                <HiOutlineEye className={styles.icon}/>
                <PiEyeSlash className={styles.icon}/>
            
          </div>
          
          <input
            id={styles.submit_button}
            type="submit"
            value="Register"
          ></input>
        </form>
      </div>
      <h1 className={styles.subHeading}>Have an account?</h1>
      <button className={styles.login_button}>Log in</button>
    </div>
    )
}