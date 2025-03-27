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
import CompletingTask from "./pages/user/completing_task_1/CompletingTask";
import CompletingTask2 from "./pages/user/completing_task_2/CompletingTask2";
import Terminal from "./pages/user/terminal/Terminal";
import Settings from "./pages/user/settings/Settings";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  /* 🍵 Hide header and footer if user stay on this paths ⬇️ */
  const hiddenRoutes = [
    "/user/main",
    "/user/modules",
    "/user/terminal",
    "/user/settings",

    // ⬇️ URL's with dynamic params ⬇️
    /^\/user\/modules\/.*/,
    /^\/user\/task\/.*/,
    /^\/user\/task\/complete\/.*/,
    /^\/user\/task\/complete-2\/.*/,
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
              path="/user/terminal"
              element={
                <Terminal setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />
            <Route
              path="/user/settings"
              element={
                <Settings setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />

            {/* 🔗 :id - для получения конкретного модуля/задания */}
            <Route
              path="/user/modules/:id"
              element={
                <UserModule setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />
            <Route
              path="/user/task/:id"
              element={<Task setOpenMenu={setOpenMenu} openMenu={openMenu} />}
            />
            <Route
              path="/user/task/complete/:id"
              element={
                <CompletingTask setOpenMenu={setOpenMenu} openMenu={openMenu} />
              }
            />
            <Route
              path="/user/task/complete-2/:id"
              element={
                <CompletingTask2
                  setOpenMenu={setOpenMenu}
                  openMenu={openMenu}
                />
              }
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
