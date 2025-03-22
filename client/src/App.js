import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Signin from "./pages/signin/Signin";
import Register from "./pages/register/Register";
import Modules from "./pages/modules/Modules";
import Main from "./pages/user/main/Main";
import { useState, useEffect } from "react";
import UserModules from "./pages/user/modules/UserModules";
import UserModule from "./pages/user/module/UserModule";
import Task from "./pages/user/task/Task";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  /* 🍵 Hide header and footer if user stay on this paths ⬇️ */ 
  const hiddenRoutes = [
    "/user/main",
    "/user/modules",
    /^\/user\/module\/.*/,
    /^\/user\/task\/.*/,
  ];

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div className="App">
      <div className="page">
        {!hiddenRoutes.some((route) =>
          typeof route === "string"
            ? route === location.pathname
            : route.test(location.pathname)
        ) && <Header />}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/modules" element={<Modules />} />

            {/* 👽 user auth paths -> needs adds all paths to "hiddenRoutes" array ⬇️ */}
            <Route
              path="/user/main"
              element={<Main setOpenMenu={setOpenMenu} openMenu={openMenu} />}
            />
            <Route
              path="/user/modules"
              element={
                <UserModules setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />
            <Route
              path="/user/module/:id"
              element={
                <UserModule setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />
            <Route
              path="/user/task/:id"
              element={<Task setOpenMenu={setOpenMenu} openMenu={openMenu} />}
            />
          </Routes>
        </main>

        {!hiddenRoutes.some((route) =>
          typeof route === "string"
            ? route === location.pathname
            : route.test(location.pathname)
        ) && <Footer />}
      </div>
    </div>
  );
}

export default App;
