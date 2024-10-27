import React from 'react'
import styles from './LoginPage.module.css'
import CommonPage from '../../components/commonPage/Common'
import LoginForm from '../../components/LoginForm/LoginForm'
function LoginPage() {
  return (
    <div className={styles.container}>
        <CommonPage/>
        <LoginForm/>
    </div>
  )
}

export default LoginPage