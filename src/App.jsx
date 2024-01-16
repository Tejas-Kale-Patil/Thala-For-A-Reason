/** @format */

import "./App.css";
import "aos/dist/aos.css";
import Question from "./component/Question";
import { BrowserRouter as Router,Routes, Route}  from 'react-router-dom';
import Thala from "./component/Thala";


function App() {
    return (
        <>
        <Router>
          <Routes>
            <Route path="/thala" element={<Thala/>}/>
            <Route path="/" element={<Question/>}/>
            
          </Routes>
        </Router>
        </>
    );
}

export default App;
