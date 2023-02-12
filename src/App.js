import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon'
import Counter from './Counter'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/pokemon' element={<Pokemon />} />
        <Route path = '/counter' element={<Counter />} />
      </Routes>
    </Router>
  );
};


export default App;
