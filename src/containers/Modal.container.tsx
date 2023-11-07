import useModal from "@hooks/useModal";

interface props {
    children: (handleModal: () => void) => JSX.Element
    Modal: ({handleModal}: {handleModal: () => void}) => JSX.Element
}

const ModalContainer = ({ children, Modal }: props) => {
    const {openModal, handleModal} = useModal(false);

    return (
        <>
            {openModal && <Modal handleModal={handleModal}/>}
            {children(handleModal)}
        </>
    )

}

export default ModalContainer