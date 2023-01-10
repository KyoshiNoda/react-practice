import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = '/movie' element = {<Movie/>}/>
    </Routes>
  );
}

export default App;
