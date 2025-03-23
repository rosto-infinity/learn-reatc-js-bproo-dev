import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const title="Salut le monde des pros";
const article="voici le contenu de notre article";
const likes=1500;
let personne={
  nom:"duplex",
  age:20
};
const lien="https://google.com";
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="contenair">
        <h2>{title}</h2>
     <p className="">{article}</p>
     <p className="">Le nombre de personnes qui ont aimé est {likes}</p>
     <p>cette personne s'appelle {personne.nom}</p>
     <p>{[1,2,3,4,5]}</p>
     <p>{Math.random()*10}</p>
     <a href={lien}>goo to google</a>
      </div>
    </>
  )
}

export default App
