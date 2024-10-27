import styles from './LoginForm.module.css'
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";

export default function LoginForm() {
    return (
        <div className={styles.container} >

            <h1 className={styles.heading}>Login</h1>
            <div className={styles.form} >

                <div className={styles.inputFields} >
                    <MdOutlineEmail className={styles.icon} />
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
                        id="password"
                        name="password"
                        placeholder="Password"
                    ></input>

                <HiOutlineEye className={styles.icon}/>
                    
                </div>
        <button id={styles.submit_button}>Login</button>
      <h1 className={styles.subHeading}>Have no account yet?</h1>
      <button
        
        className={styles.register_button}
      >
        Register
      </button>
            </div>
        </div>
    )
}