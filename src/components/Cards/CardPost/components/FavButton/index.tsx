"use client"
import { useState } from "react"
import SVGHeart from "@components/svg/SVGHeart"
import SVGHeartSolid from "@components/svg/SVGHeartSolid"
import styles from "./styles.module.css"
import { shortNumber } from "@utils/formats.util"
import { favPost, getFavsFromPost } from "@services/Posts.services"
import { useQuery } from "@tanstack/react-query"

interface props2 {
    total_favs: number
    id: number
    meFav: boolean
}
export const FavButtonUI = ({ id, total_favs, meFav}: props2) => {
    const [isFav, setIsFav] = useState(meFav);
    const [totalFavs, setTotalFavs] = useState(total_favs);

    const handleFavPost = async () => {
        const resp = await favPost(id.toString());
        if(!resp) return
        setIsFav(!isFav)
        setTotalFavs(resp.bookmark ? totalFavs + 1 : totalFavs - 1)
    }

    return (
        <div className={styles.boxActions}>
            <button className={styles.sharebtn} onClick={handleFavPost}>
                {
                    isFav
                        ? <SVGHeartSolid color="rgba(19, 117, 140, 1)" width={20} height={20} />
                        : <SVGHeart color="rgba(19, 117, 140, 1)" width={20} height={20} />
                }
            </button>
            <p className={styles.text}>{shortNumber(totalFavs)}</p>
        </div>
    )
}

interface props {
    total_favs: number
    id: number
}

const FavButton = ({ id, total_favs}: props) => {
    const { data, isError, isLoading } = useQuery(["favpost", id], () => getFavsFromPost(id.toString()), {retry: 1, refetchOnWindowFocus: false})

    if(isLoading || !data || isError){
        return (
            <div className={styles.boxActions}>
                <button className={styles.sharebtn}>
                    <SVGHeart color="rgba(19, 117, 140, 1)" width={20} height={20} />
                </button>
                <p className={styles.text}></p>
            </div>
        )
    }

    return (
        <FavButtonUI id={id} meFav={data.meFav}  total_favs={total_favs}/>
    )
}

export default FavButton