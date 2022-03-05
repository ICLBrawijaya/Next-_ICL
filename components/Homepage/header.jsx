import styles from '../../styles/header.module.css';
export default function header() {
    return (
    <>
        <div className={styles.mynavbar}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light p-md-3">
            <div className={styles.container_fluid}>
                <div className="logo">
                    <a href="#">
                    <img className={styles.gambarlogo} src="https://drive.google.com/uc?export=view&id=1kS8JZaWXJ1HpLgSAcblMeMz_bd9SuQAG" alt=""/>
                    <h3>Industrial <br></br> Computer Laboratory</h3>
                    </a>
                </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ICL Blog</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Praktikum
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item text-dark" href="#">Praktikum Alprog</a></li>
                            <li><a className="dropdown-item text-dark" href="#">Praktikum APS</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Join Us</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        <div className="containerHeadline">
           <h2 className="Pass"><span>Improve Knowledge With <b className="bold">Passion</b></span></h2>
           <h2 className="Pass"><span>Implement Knowledge With <b className="bold">Heart</b></span></h2>
        </div>
    </div>

    </>
    )
}
