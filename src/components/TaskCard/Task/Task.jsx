import React,{useRef} from 'react'
import styles from './Task.module.css'
function Task() {
      const textareaRef = useRef(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set the height based on content
    }
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="first"
        name="first"
        value="first"
      ></input>
      <textarea
        ref={textareaRef}
        className={styles.textarea}
        onInput={handleInput}
        rows={1} // Start with 1 row
        placeholder="Type here..."
      />
    </div>
  )
}
export default Task;
