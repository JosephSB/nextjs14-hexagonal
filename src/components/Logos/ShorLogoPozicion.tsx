import ShortLogoSvg from "@components/svgs/ShortLogo.svg"

interface props {
    style?: string
    width : number
    height : number
}

const ShortLogoPozicion = ({style, width, height}:props) => {
    return(
        <div className={style}>
            <ShortLogoSvg width={width} height={height} />
        </div>
    )
}

export default ShortLogoPozicion