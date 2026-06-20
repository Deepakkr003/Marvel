import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./App.jsx";
import { SoundProvider } from "./components/SoundProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SoundProvider>
      <Home />
    </SoundProvider>
  </StrictMode>
);