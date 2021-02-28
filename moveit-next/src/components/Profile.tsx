import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/daviteixeira-btm.png" alt="Davi Teixeira"/>
            <div>
                <strong>Davi Teixeira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}