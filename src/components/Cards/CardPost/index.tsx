import { Post } from "@interfaces/Post.interfaces"
import { memo, useState } from "react"
import Avatar from "react-avatar";
import Link from "next/link"
import styles from "./styles.module.css"
import ShareBtn from "./components/ShareButton";
import FavButton from "./components/FavButton";
import { calculateTimeElapsed, convertToDate } from "@utils/time.utils";
import { CreateURLpost } from "@utils/formats.util";
import CommentButton from "./components/CommentButton";
import { ImageAdapter } from "@adapters/image.adapter";
import ModalContainer from "@containers/Modal.container";
import ModalCardPost from "./components/ModalCardPost";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface props extends Post {
    style?: React.CSSProperties
    disabledButtons?: boolean
}

const CardPost = (data: props) => {
    const { style, medias, title, typePost, slug, id, dataPublisher, date, link, subtitle, totalComments, totalFavs, urlImage, disabledButtons = false } = data
    const [moreText, setMoreText] = useState(false);
    const maxText = 100

    return (
        <div className={styles.cardPost} style={style}>
            <div className={styles.cardPostHeader}>
                <Link href={`/perfil/${dataPublisher.slug}`}>
                    <Avatar src={dataPublisher.urlPhoto || ""} maxInitials={2} name={dataPublisher.fullName} size="40" round={true} />
                </Link>
                <div className={styles.cardPostHeaderInfo}>
                    <div className={styles.cardPostSubheader}>
                        <Link href={`/perfil/${dataPublisher.slug}`}>
                            <p className={styles.cardPostSubheaderTitle}>{dataPublisher.fullName}</p>
                        </Link>
                        <p className={styles.cardPostSubheaderOccupation}>Usuario</p>
                        <p className={styles.cardPostSubheaderDate}>{calculateTimeElapsed(convertToDate(date))}</p>
                    </div>
                    <div className={styles.cardPostHeaderData}>
                        <Link href={`/post/${slug}`}>
                            <p className={styles.cardPostHeaderDataTitle}>{title}</p>
                        </Link>
                        {subtitle && <p className={styles.cardPostHeaderDataSubtitle}>
                            {moreText
                                ? subtitle
                                : subtitle.length > maxText ? subtitle.slice(0, maxText) + "..." : subtitle
                            }&nbsp;
                            {subtitle.length > maxText && <span className={styles.cardPostHeaderDataHighlight} onClick={() => setMoreText(!moreText)}>
                                {moreText ? "Leer menos" : "Leer Más"}
                            </span>}
                        </p>}
                    </div>
                </div>
            </div>
            {
                typePost === 1 && <img className={styles.cardPostImage} src={ImageAdapter(urlImage || "")} alt={title} />
            }
            {
                typePost === 2 && <iframe className={styles.cardPostIframe} width="100%" height="400"
                    src={link || ""}
                    allowFullScreen
                />
            }
            {
                typePost === 4 &&
                <div className={styles.containerSwiper}>
                    <Swiper
                        navigation={true} modules={[Navigation]} style={{width: "700px"}}
                    >
                        {
                            medias.map((item, index) => (
                                <SwiperSlide key={index} style={{ width: "100%" }}>
                                    <iframe className={styles.cardPostIframe} width="100%" height="400"
                                        src={`https://www.youtube.com/embed/${item.url}`}
                                        allowFullScreen
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            }
            <div className={styles.cardPostFooter}>
                <FavButton id={id} total_favs={totalFavs} />
                {!disabledButtons
                    ? <ModalContainer Modal={(props) => <ModalCardPost data={data} title={`Publicacion de ${data.dataPublisher.fullName}`}  {...props} />}>
                        {
                            (handleModal) => (
                                <CommentButton handleModal={handleModal} totalComments={totalComments} />
                            )
                        }
                    </ModalContainer>
                    : <CommentButton handleModal={() => { }} totalComments={totalComments} />
                }
                <ShareBtn key={id} url={CreateURLpost(typePost, slug)} />
            </div>
        </div>
    )
}

function AreEqual(prevMovie: props, nextMovie: props) {
    return prevMovie.title === nextMovie.title
        && prevMovie.id === nextMovie.id;
}

export const MemoizedCardPost = memo(CardPost, AreEqual);
export default CardPost