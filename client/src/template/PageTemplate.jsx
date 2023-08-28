import React from 'react'
import styles from './PageTemplate.module.css'

import { Link } from "react-router-dom";

const PageTemplate = (props) => {
    return (
        <div>
            <div className={styles.nav}>
                <h1 className={styles.navtitle}>Veterinaria Pepita</h1>
                <ul className={styles.navlinks}>
                    <li>
                        <Link
                            className={styles.linkfont}
                            to={`/`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.linkfont}
                            to={`/sobrenosotros`}
                        >
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.linkfont}
                            to={`/contacto`}
                        >
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={styles.linkfont}
                            to={`/tomadehora`}
                        >
                            Toma de Hora
                        </Link>
                    </li>
                </ul>
            </div>
            <div >
                {props.children}
            </div>
        </div>
    )
}

export default PageTemplate