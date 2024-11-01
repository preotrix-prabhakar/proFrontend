import styles from './AnalyticsPage.module.css'
import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard';
import Analytics from '../../components/Analytics/Analytics';
function AnalyticsPage(){
return(
    <div className={styles.container}>
        <Dashboard></Dashboard>
        <Analytics></Analytics>
    </div>
)
}
export default AnalyticsPage;
