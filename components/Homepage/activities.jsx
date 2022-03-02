import styles from '../../styles/activities.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
export default function activities() {
    return (
<>
  <div className={styles.text}>
    <h2 >Our Activities</h2>
      <p className={styles.deskripsi_text} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut!</p>
  </div>
    
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <div className={styles.swiper_slide}>
          <div className="card" style="height:100%">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className={styles.card-body}  >
                <h4 className={styles.card-title}>Praktikum Algoritma Dan Pemrograman</h4>
                <p className={styles.card-text}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>

            </div>

        </div>
        </div>
        <div className="swiper-slide">
          <div className="card" style="height: 100%;">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className="card-body"  >
                <h4 className="card-title">Praktikum Analisis Perancangan Sistem</h4>
                <p className="card-text">Menggunakan django untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>

              </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card" style="height: 100%; ">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className="card-body"  >
                <h4 className="card-title">Training External</h4>
                <p className="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
            </div>
        </div>
        </div>
        <div className="swiper-slide">
          <div className="card" style="height: 100%; ">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className="card-body"  >
                <h4 className="card-title">Training Internal</h4>
                <p className="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>

              </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card" style="height: 100%; ">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className="card-body"  >
                <h4 className="card-title">Training External</h4>
                <p className="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
              </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card" style="height: 100%; ">
            <img className="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div className="card-body"  >
                <h4 className="card-title">Training External</h4>
                <p className="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
              </div>
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
        </>
    )
}
