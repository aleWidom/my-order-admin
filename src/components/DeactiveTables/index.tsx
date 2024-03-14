import { resetAllTables } from '@/services'
import styles from './DeactiveTables.module.scss'






export const DeactiveTables = () => {

    const handleReset = () => {
        resetAllTables()
    }

    return (
        <>
            <h2 className={styles.header} >Desactivar todas las mesas</h2>
            <div className={styles.conteinerDeactivate}>
                <h2 className={styles.title} >Desactivar * mesas.</h2>
                <button className={styles.button} onClick={handleReset}>Desactivar todas las mesas.</button>
            </div>
        </>
    )
}

