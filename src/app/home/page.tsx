import WrapperLayout from "@layouts/WrapperLayout";
import styles from './page.module.css'
import { Metadata } from "next";
import SpamUsersRecomended from "./components/SpamUsersRecomended"
import FeedPosts from "./components/FeedPosts";

export const metadata: Metadata = {
  title: "Noticias del Perú y el Mundo | Pozicion",
  keywords: "Noticias, Pozicion, Peru, Mundo, Deportes, Internacional, Tecnologia, Diario, Cultura, Ciencias, Economía, Opinión",
};

export default function Home() {
    return (
      <WrapperLayout>
        <main className={styles.main}>
          <div className={styles.body}>
            <p className={styles.feedTitle}>Nuevas publicaciones</p>
            <FeedPosts/>
          </div>
          <div className={styles.aside}>
            <SpamUsersRecomended/>
            <p>
              Información • Ayuda • Privacidad •
              Condiciones 
            </p>
            <p style={{margin: "10px 0"}}>© {(new Date().getFullYear())} Pozicion</p>
          </div>
        </main>
      </WrapperLayout>
    )
  }
  