import React from 'react'
import style from '../../../styles/regis.module.css'

export default function Regispage() {
  return (
    <div>
        <div className={style.background}>
   <form action="#login" className={style.box}>
       
       <div className={style.header}>
           <h2 className={style.headerh2} >Register To Your Account</h2>
    </div>   
       <div className={style.login_area}>
           <input required type="text" className={style.username} placeholder="Nama kamu siapa ?"/>
           <input required type="text" className={style.password} placeholder="Masukin NIM kamu "/>
           <input required type="email" className={style.password} placeholder="Masukin email kamu "/>
           <select name="gender" id="gender" required className={style.username}>
            <option value="" disabled selected hidden>Gender kamu ?</option>
            <option value="putra">Laki-laki</option>
            <option value="putri">Perempuan</option>
        </select>
        <input required type="number" className={style.password} placeholder="Berapa IPK kamu ?" min="0" max="4.00" step=".01"/>
        <input  required type="text " className={style.password} placeholder="Masukin username akunmu"/>
        <input required type="password" className={style.password} placeholder="Masukin password akunmu"/>
        <button type="submit" value="Login" className={style.submit}>Submit</button>
        
    </div>
            
   </form> 
</div>
    </div>
  )
}
