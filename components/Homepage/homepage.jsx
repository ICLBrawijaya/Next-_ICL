import styles from '../../styles/homepage.module.css';
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import {useState} from 'react';
import Image from 'next/image';
export default function homepage() {

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [ID,setID]=useState(1)

    const asisten=[
        {ID:1, divisi:"Research and Development", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:"https://lh3.googleusercontent.com/a-/AOh14GifA6jqEB1_hymVayerCySxDQ2cQHlYv0RFoxcP=s28-c-k-no"},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "RND Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "RND Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:2, divisi:"Head Resource Management", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "HRM Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "HRM Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:3, divisi:"Event", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:4, divisi:"External Relationshiop", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:5, divisi:"Head C Managemnt", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:6, divisi:"Operational", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:7, divisi:"Creative", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"},
        {ID:8, divisi:"Finance and Administration", Anggota:[{Nama:"Hafizh Maulana",Photo:""},{Nama:"Addis Rezha",Photo:""},{Nama:"Maulana Reza",Photo:""}],
        deskripsi_1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?",
        deskripsi_2 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolorum laudantium, facere excepturi  officiis voluptates. Quod culpa optio velit sint voluptatum, illo suscipit dolores, esse possimus  eius  sit, doloremque vel?"}


    ]
    const anggota=asisten[ID-1].Anggota
    return (
        <>
            <div class="p-2">
                <div className={styles.ContainerAsisten} class=" p-2 container-fluid rounded" >
                    <div  className={styles.ContainerAsistenLeft} class="container-sm" >
                        <h1 class="text-sm-start">Our Assistant</h1>
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
                                {radio.divisi}
                            </ToggleButton>))}
                        
                            
                        </div>
                    </div>
                    
                    <div className={styles.ContainerAsistenRight}>
                        <h1 className={styles.PreviewHeadAsisten}>{asisten[ID-1].divisi}</h1>
                        <div className={styles.ContainerAnggota}>
                        {anggota.map((item) => (
                                <span className="p-3">
                                    <img className={styles.ImageHomeAsisten} src={item.Photo} alt="" />
                                    <button type="button" class="btn-list-asisten btn btn-light">{item.Nama}</button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
