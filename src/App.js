import { Route, Routes } from 'react-router-dom';
import './App.css';
import Billings from './Pages/Billings/Billings';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import SignUP from './Pages/SignUp/SignUP';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/billings' element={<Billings></Billings>}></Route>
        <Route path='/signup' element={ <SignUP></SignUP> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
