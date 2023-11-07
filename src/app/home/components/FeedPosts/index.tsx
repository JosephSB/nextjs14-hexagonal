"use client"
import { useState } from 'react';
import styles from './styles.module.css'
//import IconMessagePlus from "@assets/icons/message-plus.svg"
import AuthModalContainer from '@containers/AuthModal.container';
import { TABS_HOME_FEED } from './constants';
import MesagePlusSVG from '@components/svgs/MessagePlus.svg';
import ListPosts from './ListPosts';

const FeedPosts = () => {
    const [viewActive, setviewActive] = useState(1);

    return (
        <div className={styles.containerFeed}>
            <div className={styles.feedMenuTabs} >
                {
                    TABS_HOME_FEED.map(
                        (item) =>
                            <div key={item.id} className={styles.feedTab + " " + (viewActive === item.id ? styles.tabActive : "")}
                                onClick={() => setviewActive(item.id)}
                            >
                                <p>{item.name}</p>
                            </div>
                    )
                }
                <AuthModalContainer Modal={/*ModalCreateForum*/() => <></>}>
                    {
                        (handleModal) => (
                            <div
                                className={styles.feedTabBtn}
                                onClick={handleModal}
                            >
                                <MesagePlusSVG width={20} height={20} />
                                <p>&nbsp;Crear Foro</p>
                            </div>
                        )
                    }
                </AuthModalContainer>
            </div>
            <div className={styles.containerPosts}>
                    <ListPosts typePost={viewActive === 1 ? undefined : viewActive === 2 ? 4 : 1 } />
            </div>
        </div>
    )
}

export default FeedPosts