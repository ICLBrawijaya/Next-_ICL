import Asistenslide from '../components/Homepage/homepage';
import Videoprofile from '../components/Homepage/video_profile';
import View3d from '../components/Homepage/3D_Lab_View';
import Footer from '../components/Homepage/footer';
import Header from '../components/Homepage/header';
import Moto from '../components/Homepage/moto';

export default function homepage() {
    return (
      <div>
        <Header/>
        <Moto/>
        <Videoprofile/>
        <View3d/>
        <Asistenslide/>
        <Footer/>
      </div>
    
      );
     
}
