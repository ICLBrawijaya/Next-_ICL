import styles from '../../styles/homepage.module.css';
import { Button, ButtonGroup,ToggleButton } from 'react-bootstrap';
import {UseState} from 'react';
import Image from 'next/image';
export default function homepage() {

    const [Checked, setChecked] = UseState(false);
    const [radioValue, setRadioValue] = UseState('1');
    const [ID,setID]=UseState(1)

    const asisten=[
        {ID:1, divisi:"Research and Development", Anggota:[{Nama:"Hafizh Maulana",Photo:"https://drive.google.com/uc?export=view&id=1R8r5DOOu1FdoeB6Djk3cFs1BoBbut5d8"},{Nama:"Addis Rezha",Photo:"https://drive.google.com/uc?export=view&id=1GA_YIM77wvEs39agIaIhI3qX4Px8pfXE"},{Nama:"Maulana Ahmad Fahreza",Photo:"https://drive.google.com/uc?export=view&id=1GdC2GsOT6Wx_u6ECxkBp6khXCb89bHdy"}],
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
            <div className="p-2">
                <div className={`p-2 container-fluid rounded ${styles.ContainerAsisten}`} > 
                    <div  className={styles.ContainerAsistenLeft}  >
                        <h1 className="text-sm-start">Our Assistant</h1>
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
                                    <button type="button" className="btn-list-asisten btn btn-light">{item.Nama}</button>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
