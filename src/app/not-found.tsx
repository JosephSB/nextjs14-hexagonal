'use client' 
import ImgNotFound from "@assets/NotFound.png";
import WrapperLayout from '@layouts/WrapperLayout';
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Pagina no encontrada  | Pozicion",
    keywords: "Noticias, Pozicion, Peru, Mundo, Deportes, Internacional, Tecnologia, Diario, Cultura, Ciencias, Economía, Opinión",
};

const Error = () => {
    return (
        <WrapperLayout>
            <div className="mainNotfound">
                <Image width={400} height={500} src={ImgNotFound.src} alt="Not found" />
                <div style={{textAlign: "center"}}>
                    <h3>Pagina no encontrada</h3>
                    <p>El recurso se ha eliminado de forma permanente o ya no esta disponible</p>
                </div>
            </div>
        </WrapperLayout>
    )
}

export default Error