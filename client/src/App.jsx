import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>


        {/* <loginContext.Provider value={{ logInData, setlogInData }}> */}
        {/* <toggleLogin.Provider value={{ isLoggedIn, setIsLoggedIn }}> */}
          <Routes>
            <Route path="/" element={<Products />} />
          
          </Routes>
  
    </Router>
    </>
  )
}

export default App
