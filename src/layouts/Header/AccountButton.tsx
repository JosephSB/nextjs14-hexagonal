import Avatar from "react-avatar"
import styles from './header.module.css'
import MenuAccount from "./MenuAccount"
import { useEffect, useRef, useState } from "react"
import { IUser } from "@modules/user/domain/user.interface"
import IconDownSVG from "@components/svgs/IconDown.svg"

interface props {
  dataUser: IUser
}

const AccountButton = ({dataUser}:props) => {
    const [openOpts, setOpenOpts] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: any) => {
          if ( modalRef.current && !modalRef.current.contains(e.target)) {
            setOpenOpts(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [openOpts]);
    

    return (
        <div className={styles.containerAccount} ref={modalRef} onClick={() => setOpenOpts(!openOpts)}>
            <Avatar
                src={dataUser.profileImage}
                name={dataUser.fullName}
                size="35"
                maxInitials={2}
                round={true}
            />
            <div>
                <p className={styles.titleAccount}>{dataUser.fullName.slice(0, 15)}</p>
            </div>
            <IconDownSVG width={20} height={20} />
            {openOpts && <MenuAccount/>}
        </div>
    )
}

export default AccountButton