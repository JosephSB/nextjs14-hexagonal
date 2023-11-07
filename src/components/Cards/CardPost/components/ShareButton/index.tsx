"use client"
import { useState, useRef, useEffect } from "react"
import styles from "./styles.module.css"
import SVGFacebook from "@components/svg/SVGFacebook"
import SVGLinkedin from "@components/svg/SVGLinkedin"
import SVGTwitter from "@components/svg/SVGTwitter"
import SVGShare from "@components/svg/SVGShare"
import SVGLink from "@components/svg/SVGLink"


interface props {
    url: string
}

const ShareBtn = ({ url }: props) => {
    const [openModal, setOpenModal] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const divRef2 = useRef<HTMLButtonElement>(null);
    const [copied, setCopied] = useState(false);

    const CopyToClipboard = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (divRef2.current && divRef2.current.contains(event.target)) return
            if (divRef.current && !divRef.current.contains(event.target)) {
                setOpenModal(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const ajustarDivFlotante = () => {
            const anchoPantalla = window.innerWidth;

            if (!divRef.current) return
            if (anchoPantalla < 600) {
                divRef.current.style.top = '40px';
                divRef.current.style.bottom = 'unset';
                //divRef.current.style.right = '-170px';
                divRef.current.style.left = '-150px';
            } else {
                divRef.current.style.top = '40px';
                divRef.current.style.bottom = 'unset';
                divRef.current.style.right = '-170px';
                //divRef.current.style.left = '-150px';
            }
        };

        ajustarDivFlotante();
        window.addEventListener('resize', ajustarDivFlotante);

        return () => {
            window.removeEventListener('resize', ajustarDivFlotante);
        };
    }, [openModal]);

    return (
        <div className={styles.boxActions}>
            <button ref={divRef2} className={styles.sharebtn} onClick={() => setOpenModal(!openModal)}>
                <SVGShare color="rgba(19, 117, 140, 1)" width={20} height={20} />
            </button>
            {
                openModal &&
                <div 
                    className={styles.ShareOptions} 
                    ref={divRef}
                >
                    <a href={`http://www.facebook.com/sharer.php?u=${url}`} itemProp="url" rel="noreferrer" target="_blank">
                        <div className={styles.ShareOption}>
                            <SVGFacebook color="black" width={18} height={18} />
                            <p>Enviar por Facebook</p>
                        </div>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=Mira%20esta%20nota%20\n&url=${url}/&via=pozicion_peru`} itemProp="url" rel="noreferrer" target="_blank">
                        <div className={styles.ShareOption}>
                            <SVGTwitter color="black" width={24} height={24} />
                            <p>Enviar por Twiter</p>
                        </div>
                    </a>
                    <a href={`http://www.linkedin.com/shareArticle?url=${url}`} itemProp="url" rel="noreferrer" target="_blank">
                        <div className={styles.ShareOption}>
                            <SVGLinkedin color="black" width={22} height={22} />
                            <p>Enviar por Linkedin</p>
                        </div>
                    </a>
                    {/*<a href={`whatsapp://send?text=Mira%20esta%20nota%20\n${url}`} itemProp="url" rel="noreferrer" target="_blank">
                        <div className={styles.ShareOption}>
                            <SVGWhatsapp color="black" width={22} height={22} />
                            <p>Enviar por Whatsapp</p>
                        </div>
            </a>*/}
                    <div className={styles.ShareOption} onClick={CopyToClipboard}>
                        <SVGLink width={20} height={20} />
                        <p>Copiar link</p>
                        {copied && (
                            <div className={styles.confirmationMessage}>
                                ¡Copiado!
                            </div>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default ShareBtn