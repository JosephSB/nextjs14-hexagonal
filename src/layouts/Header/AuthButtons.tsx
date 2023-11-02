import Link from "next/link"
import styles from './header.module.css'
import { config } from "@config/index"

const AuthButtons = () => {
    return(
        <div className={styles.authButtons}>
            <Link href={config.URL_AUTH_WEB + `register?continue=${encodeURIComponent(config.MY_URL)}`}>
                <button className={styles.btnRegister}>
                    Regístrate
                </button>
            </Link>
            <Link href={config.URL_AUTH_WEB + `login?continue=${encodeURIComponent(config.MY_URL)}`}>
                <button className={styles.btnLogin}>
                    Iniciar sesión
                </button>
            </Link>
        </div>
    )
}

export default AuthButtons