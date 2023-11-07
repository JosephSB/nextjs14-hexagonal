interface props {
    width: number;
    height: number;
    color?: string;
}

const MesagePlusSVG = ({ width, height, color }: props) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-plus"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path>
            <path d="M16 19h6"></path>
            <path d="M19 16v6"></path>
        </svg>
    );
};

export default MesagePlusSVG;