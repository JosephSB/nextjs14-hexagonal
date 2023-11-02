"use client"
import styles from './InitLoader.module.css'
import ContextAuth from "@contexts/Authenticated.context";
import { useEffect } from 'react';
import ShortLogoSvg from '@components/svgs/ShortLogo.svg';

const InitLoaderWrapper = () => {
    const { loading } = ContextAuth();

    useEffect(() => {
        const htmlTag = document.querySelector('html')
        if (!htmlTag) return
        if (!loading) return
        htmlTag.style.overflow = 'hidden';

        return () => {
            htmlTag.style.overflow = 'auto';
        };
    }, [loading]);

    if (loading) {
        return (
            <div className={styles.initLoaderWrapper}>
                <ShortLogoSvg width={50} height={50} />
            </div>
        )
    }

    return <></>
}

export default InitLoaderWrapper