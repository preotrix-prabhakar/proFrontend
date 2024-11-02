import React from "react";
import styles from "./Confirm.module.css";

function ConfirmationDialog({ isActionLogout, onConfirm }) {
  const actionText = isActionLogout ? "Logout" : "Delete";

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h1>Are you sure you want to {actionText}?</h1>
        <button onClick={onConfirm} className={styles.confirmButton}>
          Yes, {actionText}
        </button>
        <button className={styles.cancelButton}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
