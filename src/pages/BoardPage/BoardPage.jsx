import React from 'react'
import styles from './BoardPage.module.css'
import Dashboard from '../../components/Dashboard/Dashboard';
import Board from '../../components/Board/Board';
import Board2 from '../../components/Board2/Board2';
import TaskPopup from '../../components/TaskPopup/TaskPopup';
function BoardPage() {
  return (
    
    <div className={styles.container}>
    <Dashboard/>
      <TaskPopup/>
    </div>
  )
}

export default BoardPage;