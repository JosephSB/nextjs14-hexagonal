import styles from './header.module.css'
import ContextAuth from "@contexts/Authenticated.context";
import LogoutSVG from "@components/svgs/Logout.svg";

const MenuAccount = () => {
    const { Logout } = ContextAuth();

    return (
        <ul className={styles.menuAccount + " animateUp"}>
            <li className={styles.menuItemAccount} onClick={Logout}>
                <LogoutSVG width={20} height={20} />
                &nbsp;Cerrar sesión
            </li>
        </ul>
    )
}

export default MenuAccount