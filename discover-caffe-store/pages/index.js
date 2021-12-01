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
        <title>Create Next App</title>
       
        <link rel = 'icon' href = '/favion.ico'/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coffe Conno</h1>
        <Banner buttonText = 'View stores nearby' handleOnclick = {handleOnBannerBtnClick}/>
      </main>
      
     
    </div>
  )
}
