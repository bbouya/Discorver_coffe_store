import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'

export default function Home() {
  console.log('ayoub')
  const handleOnBannerBtnClick = () =>{
    console.log('hadchi rah 5dam abro good jobs')
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Connoisseur</title>
       
        <link rel = 'icon' href = '/favion.ico'/>
      </Head>

      <main className={styles.main}>
        
        <Banner buttonText = 'View stores nearby' handleOnclick = {handleOnBannerBtnClick}/>
        <div className={styles.heroImage}>
          <Image src = "/Static/image_2.png" width={700} height={400}></Image>
     
        </div>
       </main>
      
     
    </div>
  )
}
