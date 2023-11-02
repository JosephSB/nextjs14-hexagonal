"use client"
import LogoPozicion from '@components/Logos/LogoPozicion'
import styles from './header.module.css'
import Link from 'next/link'
import AuthButtons from './AuthButtons'
import AccountButton from './AccountButton'
import ShortLogoPozicion from '@components/Logos/ShorLogoPozicion'
import ContextAuth from '@contexts/Authenticated.context'

const Header = () => {
    const { data, auth } = ContextAuth();

    return (
        <header className={styles.containerHeader}>
            <div className={styles.header}>
                <Link href='/'>
                    <LogoPozicion style={styles.headerLogo} width={182} height={42} />
                    <ShortLogoPozicion style={styles.headerShortLogo} width={42} height={42}/>
                </Link>
                <div className={styles.menu}>
                    {
                        auth
                            ? <AccountButton dataUser={data} />
                            : <AuthButtons />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header