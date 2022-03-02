import styles from '../../styles/video_profile.module.css';
export default function video_profile() {
    return (
        <>
        <div className={styles.BackgroundProfile} >
            <h1 className='p-2 text-light text-center'><b>VIDEO PROFILE</b></h1>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active p-4" data-bs-interval="99999999999999">
                        <div className={styles.carouselheight}>
                            <div className='ratio ratio-16x9' >
                                <iframe width="90%" height="530px" src="https://www.youtube.com/embed/f51KEv1rySI?autoplay=1&mute=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="carousel-caption d-none d-md-block">
                                    <h5 className='text-light'>Video Profil Industrial Computer Laboratory</h5>        
                            </div>
                        </div>
                        {/* <h5 className='text-dark'>Video Profil</h5>       */}
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://i.ytimg.com/vi/1KRCKZPWxls/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/1KRCKZPWxls/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className=' m-4 backgroundopacity'>
                
            </div>
        </div>
        </>
    )
}
