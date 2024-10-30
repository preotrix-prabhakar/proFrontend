import styles from './RegisterForm.module.css'
import { HiOutlineLockClosed } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineEye } from "react-icons/hi";
import { PiEyeSlash } from "react-icons/pi";
import {useNavigate} from 'react-router';
import { useState } from 'react';
import { userRegister } from '../../apis/auth';

export default function RegisterForm(){
  const navigate=useNavigate();
    const [form,setForm]=useState({name:"",email:"",confirmPassword:"",password:""});
    const [isHidden,setIsHidden]=useState(true);

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setForm({...form,[name]:value})
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      if(form.confirmPassword===form.password){
        const response=await userRegister({name:form.name,email:form.email,password:form.password})
        console.log(response);
        if(response){
          console.log(response);
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("userName", response.name);
        navigate("/");
        }
      }
    }
    return(
        <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
      <div>
        <form className={styles.form}>
          <div className={styles.inputFields}>
            <FaRegUser className={styles.icon} />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            onChange={handleChange}
            ></input>
          </div>
          <div className={styles.inputFields}>
            
              <MdOutlineEmail className={styles.icon}/>
            <input
              type="textarea"
              id="email"
              name="email"
              placeholder="Email"
            onChange={handleChange}
            ></input>
          </div>
          <div className={styles.inputFields}>
          <HiOutlineLockClosed className={styles.icon}/>
            <input
              className={styles.password_input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            onChange={handleChange}
            ></input>
            {

            (isHidden)?<HiOutlineEye className={styles.icon} onClick={()=>setIsHidden(!isHidden)} />:
            <PiEyeSlash className={styles.icon} onClick={()=>setIsHidden(!isHidden)} />
            
            }
          </div>
          <div className={styles.inputFields}>
              <HiOutlineLockClosed className={styles.icon}/>
            <input
              className={styles.password_input}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
             onChange={handleChange}
            ></input>{
              (isHidden)?<HiOutlineEye className={styles.icon} onClick={()=>setIsHidden(!isHidden)} />:
              <PiEyeSlash className={styles.icon} onClick={()=>setIsHidden(!isHidden)} />
              }
          </div>
          
          <input
            id={styles.submit_button}
            type="submit"
            value="Register"
            onClick={handleSubmit}
          ></input>
        </form>
      </div>
      <h1 className={styles.subHeading}>Have an account?</h1>
      <button className={styles.login_button} onClick={()=>{navigate('/');}} >Log in</button>
    </div>
    )
}