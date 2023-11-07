import BaseModal from "@components/Modals/BaseModal"
import CardPost from "../.."
import { Post } from "@interfaces/Post.interfaces"
import Comments from "@components/Comments"

interface props {
    handleModal: () => void
    title: string
    data: Post
}

const ModalCardPost = ({handleModal, title, data}: props) => {
    return(
        <BaseModal width={900} title={title} handleModal={handleModal}>
            <div style={{overflowY: "auto",paddingRight: "1rem" ,maxHeight: "90vh"}}>
                <CardPost {...data} disabledButtons={true} style={{
                    backgroundColor: "transparent",
                    boxShadow: "none"
                }} />
                <br />
                <Comments idPost={data.id.toString()} />
            </div>
        </BaseModal>
    )
}

export default ModalCardPost