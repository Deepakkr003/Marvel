import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./Pages/Home";
import TitlePage from "./Pages/title/TitlePage";
import Timeline from "./Pages/Timeline";
import SagasPage from "./Pages/Sagas";
import SagaDetailPage from "./Pages/SagaDetailPage";
import MultiversePage from "./Pages/Multiverse";
import MultiVerseDetailPage from "./Pages/MultiVerseDetailPage";
import Journey from "./Pages/Journey";

import SoundToggle from "./components/SoundToggle";

function Layout() {
  return (
    <>
      {/* Fixed position so it stays visible everywhere */}
      <div className="fixed top-4 right-4 z-50">
        <SoundToggle />
      </div>

      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/title/:id" element={<TitlePage />} />

          <Route path="/sagas" element={<SagasPage />} />

          <Route path="/timeline" element={<Timeline />} />

          <Route path="/sagas/:saga" element={<SagaDetailPage />} />

          <Route path="/multiverse" element={<MultiversePage />} />

          <Route
            path="/multiverse/:universe"
            element={<MultiVerseDetailPage />}
          />

          <Route path="/journey" element={<Journey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;