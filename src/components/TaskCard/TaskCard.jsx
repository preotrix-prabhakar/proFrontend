import React, { useState } from 'react'
import styles from './TaskCard.module.css'
import Task from './Task/Task'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";

function TaskCard() {
    const [flag,setFlag]=useState(true);
    return (
        <div className={styles.container}>
            <div className={styles.priority_container}>
                <div>prioroty</div>
                <div>...</div>
            </div>
            <h1>Title</h1>
            <div className={styles.checklist_heading}>
                <p>Checklist (1/3)</p>
                <button 
          className={styles.durationButton} 
          onClick={() => setFlag(!flag)}
        >{flag ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </button>

            </div>
            <div className={styles.tasks}>
                <Task></Task>
                <Task></Task>
            </div>
            <div className={styles.footer}>
                <button> select date</button>
                <div>
                    
                    <button> backlog</button>
                    <button>to do</button>
                    <button>in progress</button>
                    <button>done </button>
                </div>
            </div>
        </div>
    )
}
export default TaskCard