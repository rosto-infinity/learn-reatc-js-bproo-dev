import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  //   const [count, setCount] = useState(0)
  // const title="Salut le monde des pros";
  // const article="voici le contenu de notre article";
  // const likes=1500;
  // let personne={
  //   nom:"duplex",
  //   age:20
  // };
  // const lien="https://google.com";
  //   return (
  //     <>
  //       {/* <div>
  //         <a href="https://vite.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p> */}
  //       <div className="App">
  //        <Navbar />
  //       <Home/>
  //       </div>
  //     </>
  //   )

  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* Ajoutez d'autres routes ici */}
        </Routes>
    </div>
</Router>

  )
}

export default App
