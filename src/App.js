import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Componnets/Landing';
import Card2 from './Componnets/Card2';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/card2" element={<Card2 />} />
      </Routes>
    </Router>
  );
}

export default App;
