import React from 'react'
import styles from "./cards.module.css"
import Presentation from "../presentation.png"

const Cards = () => {
  return (
    <div className={styles.cardsParent}>
        <div className={styles.cards}>
        <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>presentation design</h4></div>    
        <p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        <div className={styles.cards}>
                <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>Audio-visual Production</h4></div>        
        <p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        <div className={styles.cards}>        <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>Transiation services</h4></div>    
<p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        <div className={styles.cards}>        <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>Graphic Design</h4></div>    
<p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        <div className={styles.cards}>        <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>Resaerch & Analysis</h4></div>    
<p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
        <div className={styles.cards}>        <div className={styles.logoAndName}><img src={Presentation} alt="presentation"/><h4>Data Processing</h4></div>    
<p className={styles.cardsPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>
    </div>
  )
}

export default Cards