import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TitleDetails from "./components/TitleDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/title/:id"
          element={<TitleDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;