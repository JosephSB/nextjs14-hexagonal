interface props {
    width: number;
    height: number;
    color?: string;
}

const LogoutSVG = ({ width, height, color }: props) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-logout" viewBox="0 0 24 24" 
            stroke-width="2" stroke="currentColor" fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z"></path>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
            <path d="M9 12h12l-3 -3"></path>
            <path d="M18 15l3 -3"></path>
        </svg>
    );
};

export default LogoutSVG;