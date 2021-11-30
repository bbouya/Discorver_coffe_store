import styles from "C:/Users/elgha/Documents/GitHub/Discorver_coffe_store/discover-caffe-store/styles/banner.module.css";

const Banner = (props) => {
    return  (<div className={styles.container}>
                <h1 className={styles.title}>
                    <span className = {styles.title1}>Coffee</span>
                    <span className = {styles.title2}>Connoisseur</span> 
                </h1>
                <p className = {styles.subtitle}>Discover your local coffe shops!</p>
                <button className = {styles.button}>{props.buttonText}</button>
    
            </div>);
};

export default Banner;