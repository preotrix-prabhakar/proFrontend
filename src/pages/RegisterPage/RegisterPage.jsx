import React from 'react'
import styles from './RegisterPage.module.css'
import CommonPage from '../../components/commonPage/Common'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

function RegisterPage() {
  return (
    <div className={styles.container}>
        <CommonPage/>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage