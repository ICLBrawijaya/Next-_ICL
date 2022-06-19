import React from 'react'
import styles from '../../../styles/login.module.css'
import Link from 'next/link'

export default function Login() {
  return (
    <div>
<div className={styles.overlay}></div>
   <div className={styles.background}>
   <form action="#login" className={styles.box}>
       
       <div className={styles.header}>
           <h2 className={styles.teksheader}>Login To Your Account</h2>
    </div>   
       <div className={styles.login_area}>
           <input type="text" className={styles.username} placeholder="Username"/>
           <input type="password" className={styles.password} placeholder="Password"/>
           <div className={styles.sec}>
            
               <button type="submit" value="Login" className={styles.submit}>Login</button>
                <Link  href="/registration">
               <button value="Register" className={styles.regis}>
                <a className={styles.regisa}>Register</a>
                </button>
                </Link>
            </div>
           <a href="#" className={styles.buata}>Forgot Password?</a>
       </div>
   </form>
    </div>
    </div>
  )
}
