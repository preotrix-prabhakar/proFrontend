import React from "react";
import styles from "./Message.module.css";
function Message({ isLogoutOrDelete, handleSubmit ,close }) {
  const msg = isLogoutOrDelete ? "Logout" : "Delete";
  return (
    <div className={styles.temp}>
      <div className={styles.popup}>
        <h1>Are you sure you want to {msg}?</h1>
        <button onClick={handleSubmit} className={styles.submit}>
          Yes, {msg}
        </button>
        <button className={styles.cancel} onClick={()=>{close();}}>Cancel</button>
      </div>
    </div>
  );
}

export default Message;