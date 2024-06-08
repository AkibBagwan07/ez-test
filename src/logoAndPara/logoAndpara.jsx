import React from 'react'
import ezLogo from "../ezLogo.png.webp"
import styles from "./logoAndPara.module.css"

const LogoAndPara = () => {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.logoAndWorks}><img src={ezLogo} alt="EZ logo" className={styles.heroImage} />
         <h1 className={styles.works}>Works</h1>
       </div>
      <h2>Suite of Business Support Services</h2>
      <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eligendi illum quidem exercitationem consequuntur quas aliquamatque ex magnam culpa nulla,
           debitis voluptatibus laudantium nemo commodi laborum non.</p>
      </div>
    </div>
  )
}

export default LogoAndPara