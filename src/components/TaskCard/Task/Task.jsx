import React, { useRef } from "react";
import { MdDelete } from "react-icons/md";
import styles from "./Task.module.css";

function Task({ isPopupView }) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="first"
        id="first"
        name="first"
      />
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        onInput={handleInput}
        rows={1}
        placeholder="Type here..."
      />
      {isPopupView && (
        <button className={styles.deleteButton} aria-label="Delete Task">
          <MdDelete className={styles.deleteIcon} />
        </button>
      )}
    </div>
  );
}

Task.defaultProps = {
  isPopupView: true,
};

export default Task;
