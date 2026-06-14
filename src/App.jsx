import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TitlePage from "./Pages/title/TitlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/title/:id"
          element={<TitlePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;