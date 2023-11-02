import Header from "./Header"

interface props {
    children: JSX.Element
}

const WrapperLayout = ({children}:props) => {
    return(
        <>
            <Header/>
            <div className="app">
                {children}
            </div>
        </>
    )
}

export default WrapperLayout