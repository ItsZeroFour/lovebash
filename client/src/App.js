import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import Modules from "./pages/modules/Modules";
import Main from "./pages/user/main/Main";
import { useState, useEffect } from "react";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const hiddenRoutes = ["/user/main"];

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"; // Запретить скролл
    } else {
      document.body.style.overflow = "auto"; // Включить скролл
    }
  }, [openMenu]);

  return (
    <div className="App">
      <div className="page">
        {!hiddenRoutes.includes(location.pathname) && <Header />}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/modules" element={<Modules />} />

            {/* user auth paths -> needs adds all paths to "hiddenRoutes" array */}
            <Route
              path="/user/main"
              element={<Main setOpenMenu={setOpenMenu} openMenu={openMenu} />}
            />
          </Routes>
        </main>

        {!hiddenRoutes.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

export default App;
