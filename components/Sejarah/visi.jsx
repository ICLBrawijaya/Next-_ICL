import styles from '../../styles/visi.module.css';
export default function visimisi() {

    return (
        <>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" >
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
            <span class="fs-4">Sidebar</span>
            </a>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
                Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
                Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
                Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-dark">
                {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
                Customers
                </a>
            </li>
            </ul>
            <hr></hr>
            <div class="dropdown">
            <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                <strong>mdo</strong>
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>
        



        <div className={`${styles.container_utama}`}>
            <div className={`${styles.judul}`}>
                <h1> Tujuan, Visi, Misi & Janji Pelayanan</h1>
            </div>    

            <div className={`border  ${styles.visi}`}>
                <h2 class="" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Visi</h2>
            </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div className={`card card-body ${styles.visi}`}>
                            <p>
                            “Menjadi Laboratorium Komputer yang unggul dalam pengembangan ilmu pengetahuan dan Teknologi Informasi dalam bidang Teknik Industri serta secara aktif mendukung penyelenggaraan Tri Dharma Perguruan Tinggi”
                            </p>
                        </div>
                    </div>
                    <div className={`card-footer  ${styles.footercard}`}>
                    </div>
                </div>
            </div>


            <div className={`border  ${styles.visi}`}>
                <h2 class="" data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">Misi</h2>
            </div>


            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div className={`card card-body ${styles.misi}`}>
                        <ol className={`${styles.poin}`}>
                            <li>Meningkatkan pelayanan untuk kegiatan praktikum pada keilmuan komputer dan teknologi informasi dalam lingkup Teknik Industri</li>
                            <li>Mengembangkan ilmu pengetahuan dan teknologi di bidang komputer dengan mengedepankan moral dan etika serta didukung oleh pengembangan sumber daya yang berkelanjutan</li>
                            <li>Aktif menyelenggarakan pelatihan dan penelitian dalam rangka meningkatkan kompetensi dibidang aplikasi komputer bagi sivitas akademika Teknik Industri</li>
                            <li>Meningkatkan kontribusi dan kerja sama dengan berbagai pihak melalui pengabdian kepada masyarakat</li>
                        </ol>
                        </div>
                    </div>
                    <div className={`card-footer  ${styles.footercard}`}>
                    </div>
                </div>
            </div>

            <div className={`border  ${styles.visi}`}>
                <h2 class="" data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">Tujuan</h2>
            </div>


            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample3">
                        <div className={`card card-body ${styles.misi}`}>
                        <ol className={`${styles.poin}`}>
                            <li>Membangun tata kelola organisasi laboratorium penyelenggara pendidikan tinggi Teknik Industri yang bermutu</li>
                            <li>Menghasilkan pelayanan yang berguna untuk mengembangkan ilmu pengetahuan dan teknologi serta membantu menyelesaikan permasalahan di masyarakat berbasis keilmuan Teknik Industri</li>
                            <li>Melibatkan mahasiswa dalam pengembangan ilmu pengetahuan dan teknologi berbasis keilmuan Teknik Industri</li>
                            <li>Secara aktif melakukan penelitian dan turut serta dalam pengabdian kepada masyarakat</li>
                        </ol>
                        </div>
                    </div>
                    <div className={`card-footer  ${styles.footercard}`}>
                    </div>
                </div>
            </div>


            <div className={`border  ${styles.visi}`}>
                <h2 class="" data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">Janji Pelayanan</h2>
            </div>


            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample4">
                        <div className={`card card-body ${styles.misi}`}>
                        <ol className={`${styles.poin}`}>
                            <li>Membantu seluruh elemen TI dalam mengembangkan bidang keilmuan teknologi informasi demi kemajuan Jurusan Teknik Industri UB</li>
                            <li>Bersikap professional dalam memberikan pelayanan untuk seluruh elemen TI</li>
                            <li>Menyadiakan layanan praktikum yang terbaik bagi mahasiswa TI</li>
                        </ol>
                        </div>
                    </div>
                    <div className={`card-footer  ${styles.footercard}`}>
                    </div>
                </div>
            </div>
    </div>
    
    </>
    );
}
