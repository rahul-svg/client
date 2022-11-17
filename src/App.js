import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Auth/signIn/Login';
import Signup from './component/Auth/signUp/Signup';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route exact path ='/' element = {<Login/>}/>
      <Route exact path ='/dashboard' element = {<Main/>}/>
      <Route exact path ='/Signup' element = {<Signup/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
