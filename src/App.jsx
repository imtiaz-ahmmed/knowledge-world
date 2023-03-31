import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Log from './components/Log/Log';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
      <hr />
      <Log></Log>

    </div>
  )
}

export default App
