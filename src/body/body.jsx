import React, { useState } from 'react'
import LogoAndPara from '../logoAndPara/logoAndpara'
import Cards from '../cards/cards'
import styles from "./body.module.css"
import axios from "axios"
import Grid from '@mui/material/Grid';

const Body = () => {
  const [email,setEmail] = useState("")
  //  console.log(email)
  // console.log(verifiedEmail)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.indexOf("@") !== -1){
            try {
          const res = await axios.post(`http://34.225.132.160:8002/api`, {
            email: email,
          })
          setEmail(res.data.message)
        } catch (error) {
          setEmail(error.response.data.detail)
        }
        }
        else{
        alert("enter valid email")
        setEmail("")
       }
      }
  return (
    <div className={styles.grandParent}>
      <Grid container>
        <div className={styles.flexParent}>
        <Grid xs={6} md={12} lg={12} item>
          <div className={styles.logo}><LogoAndPara />
        <form className={styles.inputAndBtn}
         onSubmit={handleSubmit}>   
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Email Address' type="text" name="email" id={styles.email} />
        <button className={styles.Btn} type='submit'>Contact Me</button>
        </form>
        </div>  
        </Grid>
        <Grid xs={6} md={12} lg={12} item><div><Cards/></div></Grid>
      </div>
      </Grid>
    </div>
  )
}

export default Body