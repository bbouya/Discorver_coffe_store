import styles from "/components/banner.module.css";


//C:/Users/elgha/Documents/GitHub/Discorver_coffe_store/components/styles/banner.module.css
const Banner = (props) => {
    return  (<div className={styles.container}>
                <h1 className={styles.title}>
                    <span className = {styles.title1}>Coffee</span>
                    <span className = {styles.title2}>Connoisseur</span> 
                </h1>
                
               
                <p className = {styles.subTitle}>Discover your local coffe shops!</p>
                <div className = {styles.buttonWrapper}>    
                    <button className = {styles.button} onClick={props.handleOnclick}>{props.buttonText}</button>
                </div>
                
            </div>);
};

export default Banner;
