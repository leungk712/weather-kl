import { Routes, Route, useLocation } from "react-router-dom";

// ===== Material UI ===== //

// ===== Components ===== //
import LandingPage from "./views/LandingPage";

function App() {
  const location = useLocation();

  return (
    <>
      <>
        <Routes key={location.pathname} location={location}>
          <Route index={true} element={<LandingPage />} />
        </Routes>
      </>
    </>
  );
}

export default App;
