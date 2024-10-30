import React, { useState } from "react";
import styles from "./Settings.module.css";

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
      localStorage.setItem(nameStorageKey,form.name);
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
        <div className={styles.form_input}>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          ></input>
        </div>

        <div className={styles.form_input}>
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
          ></img>
        </div>

        <div className={styles.form_input}>
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
           
          ></img>
        </div>

        <button  id={styles.submit_button}>
          Update
        </button>
        
      </div>
    </div>
  ); }



export default Settings;
