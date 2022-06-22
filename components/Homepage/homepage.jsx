import styles from '../../styles/homepage.module.css';
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import React,{useState} from 'react';
import Image from 'next/image';
export default function homepage() {

    const [Checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [ID,setID]=useState(1)

    const asisten=[
        {"ID":1, 
            "divisi":"Coordinator Assistanttt", 
            "Anggota":[
                {"Nama":"Rizkianuri Rahmani","Photo":"https://drive.google.com/uc?export=view&id=1AeEOKR5BopeqWi8RiZNoQAHM4SvfyU_4","Angkatan":2019,"Email":"ss","NOHP": "+62" }],
            "deskripsi_1": "RND Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
            "deskripsi_2": ""},
        {"ID":2, 
            "divisi":"Research and Development", 
            "Anggota":[
                {"Nama":"Hafizh Maulana","Photo":"https://drive.google.com/uc?export=view&id=1NNHyQBWbJSUNcBTuYue6Cze8-sWrVorN","Angkatan":2019,"Email":"ss","NOHP": "+62" },
                {"Nama":"Addis Rezha Firmansyah","Photo":"https://drive.google.com/uc?export=view&id=1N0g27vdrr1xW8ZsvTn145bFwzDyJOivJ","Angkatan":2020,"Email":"ss","NOHP": "+62"},
                {"Nama":"Maulana Ahmad Fahreza","Photo":"https://drive.google.com/uc?export=view&id=1NkfVL3sbzAyK9xDWD_FvYliXAgomP_jA","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
            "deskripsi_1": "Divisi Research And Development merupakan salah satu divisi di Laboratorium Industrial Computer Laboratory yang bertugas untuk melakukan riset dan pengembangan terkait kemampuan asisten dalam bidang keilmuan komputer terutama dalam lingkup Teknik Industri ",
            "deskripsi_2": "Divisi Research dan Development mewadahi para asisten untuk mengembangkan minat di bidang keilmuan komputer seperti Pengembangan Website, perangkat lunak, Sharing Internal Python, Sharing Internal Pengembangan Website dan Sharing Internal Pengembangan Perangkat Lunak dsb."},
        {"ID":3, 
            "divisi":"Head Resource Management", 
            "Anggota":[
                {"Nama":" Maulana","Photo":"https://drive.google.com/uc?export=view&id=1uhgaXFjYo0gtm97tzl6BXXtSsuLsccIv","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":" Dhira","Photo":"https://drive.google.com/uc?export=view&id=1670qLDWLLt_8E1ivalWcoh0YX_O8FL5g","Angkatan":20220,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "HRM Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        "deskripsi_2": "HRM Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {"ID":4,
            "divisi":"Event", 
            "Anggota":[
                {"Nama":"Ramadhana Pratama Putra Prasetiya","Photo":"https://drive.google.com/uc?export=view&id=1HQO4ouRH6zydFbGGNvSIXuPt07Rtbj6F","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"Balqis Intan Azzahra","Photo":"https://drive.google.com/uc?export=view&id=1FLumCX5brpZn7rVICYae2d4_ovn1NzAO","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"Tiara Anindityantary","Photo":"https://drive.google.com/uc?export=view&id=1DCH5Me48OHUYKvcAcSJKDrBgrzwXCReB","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Divisi Event merupakan divisi dalam organisasi Industrial Computer Laboratory yang memiliki wewenang dan tanggung jawab untuk melaksanakan suatu program kerja yang ditujukan untuk pihak eksternal dari Industrial Computer Laboratory. Selain itu, Divisi Event juga memiliki tugas sebagai media branding dan pengenalan dari Industrial Computer Laboratory, Sehingga pihak eksternal dapat mengenal lebih jauh tentang Industrial Computer Laboratory.",
        "deskripsi_2": "Program Kerja yang dimiliki oleh Divisi Event adalah berupa pengadaan Training dan Sharing Eksternal, Serta Webinar. Pada Periode 2021/2022, Divisi Event berhasil menyelenggarakan 3 Training Eksternal dan 1 Webinar. Tiga training eksternal yang diadakan oleh Divisi Event berupa Training Advance Excel, Training Data Analytics (Kolaborasi dengan Laboratorium SRK), dan Training Matlab for Data Processing and Visualization. Sedangkan untuk Webinar, diadakan Webinar Alumni yang membahas Aplikasi Ilmu PPIC dan SCM dalam pembangunan Nasional. Pada Periode 2022/2023, program kerja yang akan direncakan hadir di Industrial Computer Laboratory oleh divisi Event, berupa 3 Training 1 Sharing Eksternal dan 2 Webinar. Training yang akan dihadirkan yaitu Training Ms Office : Word & Excel 101, Training LinkedIn, dan Training Data Processing dan Data Science. Untuk Sharing, akan diadakan Sharing Eksternal yang membahas tentang MBKM oleh para alumni program tersebut. Terakhir untuk webinar akan diadakan Webinar Alumni yang membahas prospek karir pasca lulus dari perkuliahan dan mengenai pentinganya data science dalam suatu perusahaan."},
        {"ID":5, 
            "divisi":"External Relationshiop", 
            "Anggota":[
                {"Nama":"Ajeng","Photo":"https://drive.google.com/uc?export=view&id=1X7W-ZzjJ4xJ3C-RvvPl_-dWHd2Vha8Il","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"arif Rezha","Photo":"https://drive.google.com/uc?export=view&id=1gKeEcI7IRxjyN0MzpgltbzEmLHgaQabq","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        "deskripsi_2": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {"ID":6, 
            "divisi":"Head Capital Managemnt", 
            "Anggota":[
                {"Nama":"Ridwan Manihuruk","Photo":"https://drive.google.com/uc?export=view&id=1VUxPgavNpzYzck7r096jhlLHW5C4UQyw","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"Indana Alya Pratiwi","Photo":"https://drive.google.com/uc?export=view&id=1w4y5spH2QNjiItMFzH4F-HcqGGtCjU_m","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Divisi Human Capital Management merupakan salah satu divisi di Laboratorium Industrial Computer Laboratory yang memiliki wewenang dan tanggung jawab untuk melaksanakan suatu program kerja yang ditujukan untuk meningkatkan kemampuan dan pengetahuan seluruh asisten Laboratorium Industrial Computer Laboratory. ",
        "deskripsi_2": "Saat ini divisi Human Capital Management memiliki program kerja berupa Training dan Sharing Internal yang diharapkan dapat mempersiapkan kemampuan asisten Laboratorium Industrial Computer Laboratory untuk menghadapi praktikum - praktikum yang diampu oleh Laboratorium Industrial Computer Laboratory itu sendiri. Selain itu, dari Training dan Sharing Internal diharapkan dapat mempersiapkan asisten dalam menghadapi kehidupan perkuliahan maupun dunia kerja nanti. "},
        {"ID":7, 
            "divisi":"Operational", 
            "Anggota":[
                {"Nama":"Matheus Albert","Photo":"https://drive.google.com/uc?export=view&id=132-lFev0xVm2aP8vUwPn7nfp_beRy7zr","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"Try Putra Amirul M.","Photo":"https://drive.google.com/uc?export=view&id=12El3431sKEtZajcf_DKWc6YbK1elIErR","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Divisi Operasional merupakan divisi yang bertugas untuk menjaga dan merawat semua hardware dan software serta barang inventaris yang dimiliki oleh ICL.",
        "deskripsi_2": " "},
        {"ID":8, 
            "divisi":"Creative", 
            "Anggota":[
                {"Nama":"dea","Photo":"https://drive.google.com/uc?export=view&id=1OeH9Sv3dv6Nf0M8gVr0xNZydj5H153On","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"puput","Photo":"https://drive.google.com/uc?export=view&id=1mZa8aezibYAU72MzBfgQ-MdRgmwcBiFw","Angkatan":2020,"Email":"ss","NOHP": "+62"},
                {"Nama":"Fallah","Photo":"https://drive.google.com/uc?export=view&id=1cubwt0KMBTQamcG7t81yYCJydxnXeh72","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        "deskripsi_2": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {"ID":9, 
            "divisi":"Finance and Administration", 
            "Anggota":[
                {"Nama":"Nisa","Photo":"https://drive.google.com/uc?export=view&id=1rGFaEpPr-E2h2iHmzwXtTKMaxUGLR9AS","Angkatan":2019,"Email":"ss","NOHP": "+62"},
                {"Nama":"Indico","Photo":"https://drive.google.com/uc?export=view&id=1fN4awqaOD2Eawtly9O6CyGdShcOvlMVd","Angkatan":2020,"Email":"ss","NOHP": "+62"}],
        "deskripsi_1": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        "deskripsi_2": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"}
    ]
    const anggota=asisten[ID-1].Anggota
    return (
        <>
            <div className={`row g-0 p-4 ${styles.ContainerAsisten}`}>
                <div  className={`col-sm-6 col-md-5`}  >
                    <h1 className={`text-sm-start ${styles.teks} `}>Our Assistant</h1>
                    <p>{asisten[ID-1].deskripsi_1}</p>

                        <h6></h6>
                        <p>{asisten[ID-1].deskripsi_2}</p>
                        <div className={styles.ContainerButtonPreviewAsisten}>
                        
                            {asisten.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant=""
                                // {idx % 2 ? "btn-preview-asisten-selected btn-sm btn-dark my-1 button-preview-asisten": styles.BtnPreviewAsistenNotSelected}
                                name="radio"
                                value={radio.ID}
                                checked={radioValue === radio.ID}
                                onChange={(e) => setRadioValue(e.currentTarget.value) & setID(e.currentTarget.value)}
                                className= "btn-preview-asisten btn-sm rounded-5 btn-outline-dark m-1 p-1"
                                // size="lg"
                            >
                            {console.log(radio.ID)}
                                {radio.divisi}
                            </ToggleButton>))}
                        
                            
                        </div>
                    </div>
                        <div className={`col-6 col-md-7 ms-auto px-4 ${styles.ContainerAsistenRight }`}>
                            <div className={`${styles.containerright}`}>
                                <h1 className={styles.PreviewHeadAsisten}>{asisten[ID-1].divisi}</h1>
                            
                                <div className={` ${styles.ContainerAnggota}`}>
                                {anggota.map((item) => (
                                        <span  key={item.ID} className={`mx-auto p-1`}>
                                            <div className={`d-block mx-auto ${styles.container_per_anggota}`}>
                                                <img className={`img-fluid p-2 ${styles.ImageHomeAsisten} `} src={item.Photo} alt="" />
                                                <br></br>
                                            </div>
                                            <div className={`d-grid gap-2`}>
                                            <button type="button" className={`btn btn-secondary ${styles.btn_list_asisten}`}><>{item.Nama}</></button>
                                            </div>
                                            
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                
        </>
    )
}
