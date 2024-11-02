import React from 'react'
import styles from './BoardPage.module.css'
import Dashboard from '../../components/Dashboard/Dashboard';
import Board from '../../components/Board/Board';
import Board2 from '../../components/Board2/Board2';
function BoardPage() {
  return (
    
    <div className={styles.container}>
    <Dashboard/>
      <Board/>
    </div>
  )
}

export default BoardPage;