import WrapperLayout from "@layouts/WrapperLayout";
import styles from './page.module.css'

export default function Home() {
    return (
      <WrapperLayout>
        <main className={styles.main}>
          <div className={styles.body}>
            <p className={styles.feedTitle}>Nuevas publicaciones</p>
            {/*<FeedPosts/>*/}
          </div>
          <div className={styles.aside}>
            {/*<UserRecomended/>*/}
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
  