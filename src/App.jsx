import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TitlePage from "./Pages/title/TitlePage";
import Timeline from "./Pages/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/title/:id"
          element={<TitlePage />}
        />

        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;