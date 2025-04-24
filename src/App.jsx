
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import Add from "./Add";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/blog/:id" element={<BlogDetail/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
