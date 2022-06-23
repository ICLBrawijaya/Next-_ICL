import style from '../../styles/blog.module.css'

export default function Blog() {
  return (
    <div>
        <div className={style.containerblog}>
  <div className={style.blog}>
    <h1 className={style.teks}>ICL Blog</h1>
    <p>Curated and written by our assistans</p>
  </div>
  <div className={style.containerkonten}>
  <div className={style.konten}>
    <div className={style.thumbnail}>
      <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>

        </div>
    <div className={style.preview}>
      <h3 className={style.author}>Maulana Reza</h3>
      <h1 className={style.tittle}>Bismillah bagus</h1>
      <p >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corporis eum reprehenderit totam blanditiis quisquam, voluptate ipsa! Laudantium, in harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium accusantium suscipit minus molestiae quod, doloremque praesentium. Quos tempore libero a cum provident eum voluptate assumenda facere esse, porro voluptatem.
      </p>
      <button><a href="#readmore">Read More</a></button>
    </div>

  </div>
  <div className={style.konten}>
    <div className={style.thumbnail}>
     <img src="https://drive.google.com/uc?export=view&id=19pQFcsr7gi1CAu7e6BeihXNDalKWl9OO" alt="" className="image-fluid"/>

        </div>
    <div className={style.preview}>
      <h3 className={style.author}>Maulana Reza</h3>
      <h1 className={style.tittle}>Bismillah bagus</h1>
      <p >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio corporis eum reprehenderit totam blanditiis quisquam, voluptate ipsa! Laudantium, in harum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium accusantium suscipit minus molestiae quod, doloremque praesentium. Quos tempore libero a cum provident eum voluptate assumenda facere esse, porro voluptatem.
      </p>
      <button><a href="#readmore">Read More</a></button>
    </div>

  </div>
</div>
  <a href="#viewmore" className={style.viewmmore}>View more here!</a>

  
  
</div>
    </div>
  )
}
