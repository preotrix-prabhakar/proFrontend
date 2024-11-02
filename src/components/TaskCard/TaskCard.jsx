
import React, { useState } from 'react';
import styles from './TaskCard.module.css';
import Task from './Task/Task';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function TaskCard() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const priorityColorMap={
        low:"#63C05B",
        medium:"#18B0FF",
        high:"#FF2473",
      }
    return (
        <div className={styles.container}>
            <div className={styles.priorityContainer}>
                <div className={styles.priority}><span style={{color:priorityColorMap["low"]}} >●</span>
                <p>High Priority</p></div>
                <button className={styles.collapseButton} onClick={() => setIsCollapsed(!isCollapsed)}>
                    {isCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </button>
            </div>
            <h1 className={styles.taskTitle}>Hero Section</h1>

            <div className={styles.checklistHeadingContainer}>
                <p>Checklist (1/3)</p>
                <button className={styles.taskCollapseButton} onClick={() => setIsCollapsed(!isCollapsed)}>
                 {isCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </button>
            </div>

            {!isCollapsed && (
                <div className={styles.tasks}>
                    <Task />
                    <Task />
                </div>
            )}

            <div className={styles.footer}>
                <button className={styles.selectDateButton}>Select Date</button>
                <div className={styles.footerInside}>
                    <button>Backlog</button>
                    <button>To Do</button>
                    <button>In Progress</button>
                    <button>Done</button>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
