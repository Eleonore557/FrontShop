import React from 'react';
import LogoImg from "../../../../public/manga-logo.jpeg";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="Manga"/>
        </div>
    );
}

export default Headerlogo;
