interface props {
    width: number;
    height: number;
    color?: string;
}

const IconDownSVG = ({ width, height, color }: props) => {
    return (
        <svg 
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill={color ? color : "none"}></path>
            <path d="M6 9l6 6l6 -6"></path>
        </svg>
    );
};

export default IconDownSVG;