import React from 'react'
import styles from './PageTemplate.module.css'

const PageTemplate = (props) => {
    return (
        <div>
            <div className={styles.nav}>
                <h1 className={styles.navtitle}>Perfil</h1>
                <ul className={styles.navlinks}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">My Profile</a></li>
                    <li><a href="#">Encontrar conexiones</a></li>
                    <li><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>
            <div >
                {props.children}
            </div>
        </div>
    )
}

export default PageTemplate