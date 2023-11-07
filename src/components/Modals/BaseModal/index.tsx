import styles from "./basemodal.module.css"
import SVGClose from "@components/svgs/IconClose.svg"

interface props {
    title ?: string
    children: JSX.Element
    handleModal: () => void
    width?: number
}

const BaseModal = ({title, children, handleModal, width = 600}:props) => {
    return (
        <div className={styles.fadeModal} onClick={handleModal}>
            <div className={styles.modal+ " animateUp"} style={{width: "100%", maxWidth: width}} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <p>{title}</p>
                    <SVGClose onClick={handleModal} width={20} height={20} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default BaseModal