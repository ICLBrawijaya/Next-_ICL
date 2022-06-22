import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from '../../styles/ouractivities.module.css'
// import required modules
import { Pagination, Navigation } from "swiper";


export default function Ouractivities() {
  return (
    <>

    <div className={style.margin}>
        <div className={style.ouractivities}>
        <h1>Our Activities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, veniam!</p>
      </div>

      <Swiper
       breakpoints={{
        // when window width is >= 640px
        378:{
            width: 378,
            slidesPerView:1
        },
        640: {
          width: 640,
          slidesPerView: 2,
        },
        // when window width is >= 768px
      }}
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
            <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
                        <div className={`${style.card} `}>
            <div className={`card-body ${style.background}`}  >
                <div className={style.image}>
                <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>
                </div>
                  <h4 className={`card-title ${style.card_title}`}>Praktikum Algoritma Dan Pemrograman</h4>
                  <p className={`card-text ${style.card_text} `}>Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>
              </div>
              </div>
        </SwiperSlide>
      </Swiper>
          </div>
    </>
  );
}
