import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Main from './component/main/main';
import About from './component/about/about';
import Service from './component/service/service';
import Gallery from './component/gallery/gallery';
import Footer from './component/footer/footer';

import image1 from './component/images/image1.jpg';
import image2 from './component/images/image2.jpg';
import image3 from './component/images/image3.jpg';
import image4 from './component/images/image4.jpg';
import image5 from './component/images/image5.jpg';
import image6 from './component/images/image6.jpg';
import image7 from './component/images/image7.jpg';
import image8 from './component/images/image8.jpg';





function App() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ];
  return (
    <>
    <div className='container'>
    <Navbar/>
    </div> 
     <Main image = {image8}/>
     <About/>
     <Service/>
     <Gallery images = {images} interval = {4000}/>
    <Footer/>
    </>
  );
}

export default App;
