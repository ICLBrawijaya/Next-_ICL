import styles from '../../styles/video_profile.module.css';
export default function video_profile() {
    return (
        <>
        <div className={styles.BackgroundProfile} >
            <h1 className='p-2 text-light text-center'><b>VIDEO PROFILE</b></h1>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active p-4" data-bs-interval="99999999999999">
                        <div className={styles.carouselheight}>
                            <div className='ratio ratio-16x9' >
                                <iframe width="90%" height="530px" src="https://www.youtube.com/embed/xHlx3rx5Bew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="carousel-caption d-none d-md-block">
                                    <h5 className='text-light'>Video Profil Industrial Computer Laboratory</h5>        
                            </div>
                        </div>
                        {/* <h5 className='text-dark'>Video Profil</h5>       */}
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        < img src="..." class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className=' m-4 backgroundopacity'>
                
            </div>
        </div>
        </>
    )
}
