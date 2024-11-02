import React from 'react'
import styles from './BoardPage.module.css'
import Dashboard from '../../components/Dashboard/Dashboard';
import Board from '../../components/Board/Board';
import ConfirmationDialog from '../../components/Confirm/Confirm';
function BoardPage() {
  return (
    
    <div className={styles.container}>
    <Dashboard/>
      <Board/>
    </div>
  )
}

export default BoardPage;