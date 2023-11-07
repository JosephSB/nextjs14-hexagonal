import { useEffect, useState } from "react";

const useModal = (initValue: boolean) => {
    const [openModal, setOpenModal] = useState(initValue);

    const handleModal = () => setOpenModal(!openModal)

    useEffect(() => {
        if (!openModal) return

        const htmlTag = document.querySelector('html')
        if (!htmlTag) return
        htmlTag.style.overflow = 'hidden';

        return () => {
            htmlTag.style.overflow = 'auto';
        };
    }, [openModal]);


    return {openModal, handleModal}
}

export default useModal