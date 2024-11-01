import React, { useState } from "react";
import styles from "./Setting.module.css";
import passwordIcon from "../../assets/icons/lock.png";
import icon from "../../assets/icons/icon.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { nameKey } from "../../utils/variables";
function Settings() {
  const [isHidden, setIsHidden] = useState(true);

  const [form,setForm]=useState({
    name:"",
    oldPassword:"",
    newPassword:""});

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
}

  const handleUpdateName=async ()=>{
    const response=await updateName({name:form.name});
    if(response){
      console.log(response);
      localStorage.setItem(nameKey,form.name);
     }
     else{
        console.log(`something wrong`)
    }
  }

  const handleUpdatePassword=async ()=>{

    const response=await updatePassword({oldPassword:form.oldPassword,newPassword:form.newPassword});
    if(response){
      console.log(response);
      setForm({...form,[oldPassword]:"",[newPassword]:""});
      notifySuccess("Password");
     }
     else{
        console.log(`something wrong`)
    }
  }

  const submitHandler=async ()=>{
    
    try{
      await handleUpdateName();

      if(form.oldPassword!="" && form.newPassword!=""){
        await handleUpdatePassword();
      }

    }
    catch(error){
      console.log(error);
      
    }
    };
 


  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h1 className={styles.heading}>Settings</h1>
      </div>
      <div className={styles.register_form}>
        <div className={styles.inputFields}>
        <img className={styles.icon} src={inputAccountIcon}></img>

          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
        </div>
        <div className={styles.inputFields}>
          <img className={styles.icon} src={icon}></img>
          <input
            type="text"
            id="email"
            name="email"
            value={form.name}
            onChange={handleChange}
            placeholder="Email"
          ></input>
        </div>
        <div className={styles.inputFields}>
        <img className={styles.icon} src={passwordIcon}></img>

          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="oldPassword"
            name="oldPassword"
            placeholder="Old Password"
            value={form.oldPassword}
            onChange={handleChange}
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>

        <div className={styles.inputFields}>
        <img className={styles.icon} src={passwordIcon}></img>

          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
            value={form.newPassword}
            onChange={handleChange}
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>

        <button  id={styles.submit_button}>
          Update
        </button>
        
      </div>
    </div>
  ); }



export default Settings;
