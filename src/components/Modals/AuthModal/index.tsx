import LogoPozicion from "@components/Logos/LogoPozicion"
import Link from "next/link"
import BaseModal from "../BaseModal"
import styles from "./authmodal.module.css"
import { config } from "@config/index"

interface props {
    handleModal: () => void
}

const AuthModal = ({handleModal}:props) => {
    return(
        <BaseModal handleModal={handleModal}>
            <div className={styles.modalLogin}>
                <Link href="/"><LogoPozicion width={277} height={50} /></Link>
                <p className={styles.title}>¡Estás a un paso de descubrir aún más! Por favor, inicia sesión para continuar explorando nuestra aplicación.</p>
                <a href={config.URL_AUTH_WEB+`login?continue=${config.MY_URL}`} >
                    <button className={styles.btnLogin}>Iniciar Sesion</button>
                </a>
            </div>
        </BaseModal>
    )
}

export default AuthModal