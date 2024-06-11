import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import  Home from './components/home/Home'


function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
