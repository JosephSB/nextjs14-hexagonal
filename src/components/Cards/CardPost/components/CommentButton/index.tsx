import SVGComment from "@components/svg/SVGComment";
import { shortNumber } from "@utils/formats.util";
import styles from "./styles.module.css"

interface props {
    totalComments: number
    handleModal: () => void
}

const CommentButton = ({ handleModal, totalComments }: props) => {
    return(
        <div className={styles.boxActions}>
            <button onClick={handleModal} className={styles.sharebtn}>
                <SVGComment color="rgba(19, 117, 140, 1)" width={18} height={18} />
            </button>
            <p className={styles.text}>{shortNumber(totalComments)}</p>
        </div>
    )
}

export default CommentButton