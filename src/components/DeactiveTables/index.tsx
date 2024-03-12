import { resetAllTables } from '@/services'
import styles from './DeactiveTables.module.scss'

export const DeactiveTables = () => {

    const handleReset = () => {
        resetAllTables()
    }

    return (
        <div className={styles.conteinerDeactivate}>
            <h2 >Desactivar Mesas</h2>
            <button className={styles.button} onClick={handleReset}>Desactivar todas las mesas.</button>
        </div>
    )
}

