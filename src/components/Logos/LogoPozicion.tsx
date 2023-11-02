import Logo from "@assets/logo-pozicion.png"
import Image from "next/image"

interface props {
    style?: string
    width : number
    height : number
}

const LogoPozicion = ({style, width, height}:props) => {
    return(
        <Image src={Logo.src} alt="pozicion" className={style} width={width} height={height} />
    )
}

export default LogoPozicion