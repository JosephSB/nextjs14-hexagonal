"use client"
import { useQuery } from "@tanstack/react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import Avatar from "react-avatar"
import Skeleton from "react-loading-skeleton"
import { getUsersRecomended } from "@modules/user/application/getRecomendedUsers.use-case"
import { UserRepositoryImpl } from "@modules/user/infraestructure/user.repository.impl"
import { ImageAdapter } from "@utils/adapters.utils"

const SpamUsersRecomended = () => {
    const {
        isError,
        data,
        isLoading
    } = useQuery(
        {
            queryKey: ['user', "recomended"],
            queryFn: () => getUsersRecomended(UserRepositoryImpl()),
            refetchOnWindowFocus: false,
            retry: 0,
            //getNextPageParam: (lastPage, allPages) => allPages.length,
        }
    )

    if (isLoading) {
        return (
            <div className={styles.banner}>
                <div className={styles.header}>
                    <p className={styles.titleHeader}>Usuarios populares</p>
                </div>
                <div className={styles.body}>
                    {
                        new Array(3).fill(0).map((_,index) => (
                            <div key={index} className={styles.card}>
                                <Skeleton width="40px" height="40px" borderRadius={"50%"} />
                                <div className={styles.cardbody}>
                                    <div>
                                        <p className={styles.cardTitle}><Skeleton width="120px" height="14px" /></p>
                                        <p className={styles.cardSubtitle}><Skeleton width="70px" height="10px" /></p>
                                    </div>
                                    <p><Skeleton width="60px" height="20px" /></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    if (!data || isError) {
        return (
            <div></div>
        )
    }

    return (
        <div className={styles.banner}>
            <div className={styles.header}>
                <p className={styles.titleHeader}>Usuarios populares</p>
            </div>
            <div className={styles.body}>
                {
                    data.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <Avatar src={ImageAdapter(item.profileImage || "")} maxInitials={2} name={item.fullName} size="40" round={true} />
                            <div className={styles.cardbody}>
                                <div>
                                    <Link href={`/perfil/${item.slug}`}>
                                        <p className={styles.cardTitle}>{item.fullName}</p>
                                    </Link>
                                    <p className={styles.cardSubtitle}>Usuario</p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SpamUsersRecomended