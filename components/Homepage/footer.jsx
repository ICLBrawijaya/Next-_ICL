import styles from '../../styles/footer.module.css';
export default function footer() {
    return (
    <>
        <footer className={styles.footer}>
            <div className={`row align-items-center ${styles.main_content}`}>
                <div className={`col ${styles.left}`}>
                    <a href="#">
                        <img className={styles.logo} src="https://drive.google.com/uc?export=view&id=1kS8JZaWXJ1HpLgSAcblMeMz_bd9SuQAG" alt=""/>
                    </a>
                <h3>Industrial <br></br> Computer Laboratory</h3>
                </div>
                <div className={`col ${styles.center}`}>
                    <div className={`container`}>
                        <h5>Learn More</h5>
                        <div className={`row`}>
                            <div className={`col`}>
                                <div className={`row`}>
                                    <a href="#">About ICL</a>
                                </div>
                                <div className={`row`}>
                                    <a href="#">Praktikum</a>
                                </div>
                                <div className={`row`}>
                                    <a href="#">Pengabdian</a>
                                </div>
                            </div>
                            <div className={`col`}>
                                <div className={`row`}>
                                    <a href="#">Prestasi</a>
                                </div>
                                <div className={`row`}>
                                    <a href="#">Alumni</a>
                                </div>
                                <div className={`row`}>
                                    <a href="#">Kontak</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`col ${styles.right}`}>
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
