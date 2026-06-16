import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TitlePage from "./Pages/title/TitlePage";
import Timeline from "./Pages/Timeline";
import SagasPage from "./Pages/sagas";
import SagaDetailPage from "./Pages/SagaDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/title/:id" element={<TitlePage />} />

        <Route path="/sagas" element={<SagasPage />} />

        <Route path="/timeline" element={<Timeline />} />

        <Route path="/sagas/:saga" element={<SagaDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;