import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './screens/landing';
import FormScreen from './screens/form';
// import ReviewScreen from './screens/ReviewScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/reviewForm" element={<FormScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
