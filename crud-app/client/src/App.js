import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ViewGroup" element={<Test />} />
    </Routes>
  );
}

export default App;
