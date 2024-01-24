import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms';
import Card from './components/Card';
import desktopBg from './assets/bg-main-desktop.png'


function App() {
  
  return (
    <>
<div className='d-flex justify-content-between align-items-center'>
<img  src={`${desktopBg}`} alt="" height={'700px'}/>
    <div className='d-flex justify-content-evenly align-items-center w-100'>
      <Card/>
      <Forms />
    </div>
    </div>
    </>
  );
}

export default App;
