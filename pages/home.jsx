import Asistenslide from '../components/Homepage/homepage';
import Videoprofile from '../components/Homepage/video_profile';
import View3d from '../components/Homepage/3D_Lab_View';
import Footer from '../components/Homepage/footer';
import Header from '../components/Homepage/header';
import Moto from '../components/Homepage/moto';
import Ouractivities from '../components/Homepage/ouractivities';
import Blog from '../components/Homepage/blog';

export default function homepage() {
    return (
      <div>
        <Header/>
        <Moto/>
        <Videoprofile/>
        <Asistenslide/>
        <View3d/>
        <Ouractivities/>
        <Blog/>
        <Footer/>
      </div>
    
      );
     
}
