
import './App.css';
import Header from './components/layouts/Header';
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
