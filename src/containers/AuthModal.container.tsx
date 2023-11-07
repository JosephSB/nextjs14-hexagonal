import AuthModal from "@components/Modals/AuthModal"
import ContextAuth from "@contexts/Authenticated.context"
import useModal from "@hooks/useModal"

interface props {
    children: (handleModal: () => void) => JSX.Element
    Modal: ({handleModal}: {handleModal: () => void}) => JSX.Element
}

const AuthModalContainer = ({ children, Modal }: props) => {
    const { auth } = ContextAuth();
    const {openModal, handleModal} = useModal(false);


    if(!auth) {
        return (
            <>
                {openModal && <AuthModal handleModal={handleModal} />}
                {children(handleModal)}
            </>
        )
    }

    return (
        <>
            {openModal && <Modal handleModal={handleModal}/>}
            {children(handleModal)}
        </>
    )

}

export default AuthModalContainer