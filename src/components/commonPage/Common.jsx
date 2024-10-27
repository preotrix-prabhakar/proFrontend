import styles from './CommonPage.module.css'
import Logo from "../../assets/images/Group.png"
export default function CommonPage() {
    return (
        <div className={styles.container}>
            <div className={styles.logoClass}>
                <div>

                <img className={styles.image} src={Logo} alt="Logo is here" />
                </div>
                
                <h1 className={styles.heading}>Welcome aboard my friend </h1>
                <h1 className={styles.sub_heading }>Just a couple of clicks and we start </h1>
            </div>
        </div>
    )
}