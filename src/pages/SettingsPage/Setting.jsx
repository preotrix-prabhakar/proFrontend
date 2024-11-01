import React from 'react'
import settingStyles from './setting.module.css'
import Dashboard from '../../components/Dashboard/Dashboard'
import Settings from '../../components/Setting/Setting'
function SettingsPage() {
  return (
    <div className={settingStyles.main_container}>
    <Dashboard/>
    <Settings/>
    </div>
  )
}
export default SettingsPage;