import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import GameBoard from './Pages/GameBoard';
import History from './Pages/History';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<GameBoard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}
