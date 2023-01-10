
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import DefaultLayout from './layout/DefaultLayout';
function App() {
  return (
  
     <Router>
        <div className="App">
          
          <Routes>
            <Route path='/' element={<DefaultLayout><Home></Home></DefaultLayout>}></Route>
            <Route path='/projects' element={<DefaultLayout><Projects></Projects></DefaultLayout>}></Route>
            <Route path='/about' element={<DefaultLayout><About></About></DefaultLayout>}></Route>
          </Routes>
      
        </div>
     </Router>
  
  );
}

export default App;
