import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Protfolio from "./pages/Portfolio";

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Protfolio />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
