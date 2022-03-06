import styles from '../../styles/footer.module.css';
export default function footer() {
    return (
    <>
        <footer className={styles.footer}>
            <div className={styles.main_content}>
                <div className={styles.left}>
                    <a href="#">
                        <img className={styles.logo} src="https://drive.google.com/uc?export=view&id=1kS8JZaWXJ1HpLgSAcblMeMz_bd9SuQAG" alt=""/>
                    </a>
                <h3>Industrial <br></br> Computer Laboratory</h3>
                </div>
                <div className={styles.center}>
                    <div class="container">
                        <h5>Learn More</h5>
                        <div class="row">
                            <a href="#">About ICL</a>
                            <a href="#">Praktikum</a>
                            <a href="#">Pengabdian</a>
                        </div>
                        <div class="row">
                            <a href="#">About ICL</a>
                            <a href="#">Praktikum</a>
                            <a href="#">Pengabdian</a>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.img_rounded}>
                        <form>
                            <div className={`mb-3`}>
                            <h5>Kritik & Saran</h5>
                                <div className={`form-floating`}>
                                    <textarea className={`form-control ${styles.textform}`} placeholder="Leave a comment here" id="floatingTextarea" ></textarea>
                                    <label for="floatingTextarea">Kritik & saran disini</label>
                                </div>
                            </div>
                            <button type="button" className={`btn  btn-sm text-light ${styles.btn_secondary} `}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <center>
                    <hr></hr>
                    <h3>2022 ICL</h3>
                </center>
            </div>
        </footer>
    </>
    )
}
