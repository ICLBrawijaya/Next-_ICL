import styles from '../../styles/activities.module.css';
export default function activities() {
    return (
        <>
      <div class="text">
    <h2 style="font-size: 3em; line-height: 1em;" >Our Activities</h2>
    <p style="font-size:1.275em" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut!</p>
  </div>
    
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card" style="height:100%">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Praktikum Algoritma Dan Pemrograman</h4>
                <p class="card-text">Menggunakan Python untuk memecahkan masalah yang berkaitan dengan Teknik Industri</p>

            </div>

        </div>
        </div>
        <div class="swiper-slide">
          <div class="card" style="height: 100%;">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Praktikum Analisis Perancangan Sistem</h4>
                <p class="card-text">Menggunakan django untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>

              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card" style="height: 100%; ">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Training External</h4>
                <p class="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
            </div>
        </div>
        </div>
        <div class="swiper-slide">
          <div class="card" style="height: 100%; ">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Training Internal</h4>
                <p class="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>

              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card" style="height: 100%; ">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Training External</h4>
                <p class="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
              </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="card" style="height: 100%; ">
            <img class="img-fluid" alt="100%x280" src="./DSC00001.JPG"/>
            <div class="card-body"  >
                <h4 class="card-title">Training External</h4>
                <p class="card-text">Menggunakan Python untuk memecahkan masaah yang berkaitan dengan Teknik Industri</p>
              </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
        </>
    )
}
