import styles from './AnalyticsPage.module.css'
import React from 'react'

function AnalyticsPage(){
return(
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <Analytics></Analytics>
    </div>
)
}
export default AnalyticsPage;
