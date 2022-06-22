import styles from '../../styles/header.module.css';
export default function header() {
    return (
    <>
    <nav className={` navbar  navbar-expand-lg navbar-light  fixed-top  ${styles.navbar} `}>
        
        <div className={`container-fluid  ${styles.container_fluid}`}>
            <span className={styles.logo}>
                <a className={`navbar-brand `} href="#">
                    <img className={styles.gambarlogo}
                    src="https://drive.google.com/uc?export=view&id=1kS8JZaWXJ1HpLgSAcblMeMz_bd9SuQAG" alt="" />
                    <h3>Industrial <br></br> Computer Laboratory</h3>
                </a>
            </span>
            <button className= {`navbar-toggler mx-3`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon`}></span>
            </button>
            <div className={`collapse navbar-collapse rounded  ${styles.collapse}`}
            id="navbarNavDropdown">
            <ul className={`navbar-nav ms-auto  ${styles.navbar_nav}`}>
                <li className={`nav-item ${styles.nav_item}`}>
                    <a className={`nav-link ${styles.nav_link}`} href="#">Event</a>
                </li>
                <li className={`nav-item ${styles.nav_item}`}>
                    <a className={`nav-link ${styles.nav_link}`} href="#">ICL Blog</a>
                </li>
                <li className={`nav-item dropdown ${styles.nav_item}`}>
                    <a className={`nav-link dropdown-toggle ${styles.nav_link}`} href="#" id="navbarDropdownMenuLink" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Praktikum
                    </a>
                    <ul className={`dropdown-menu `} aria-labelledby="navbarDropdownMenuLink">
                        <li><a className={`dropdown-item text-dark `} href="#">Praktikum Alprog</a></li>
                        <li><a className={`dropdown-item text-dark `} href="#">Praktikum APS</a></li>
                    </ul>
                </li>
                <li className={`nav-item ${styles.nav_item}`}>
                    <a className={`nav-link ${styles.nav_link}`} href="#">Join Us</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    </>
    )
}
