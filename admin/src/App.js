import { useState } from "react";
import LeftPanel from "./components/left_panel/LeftPanel";
import UserTop from "./components/user_top/UserTop";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Users from "./pages/users/Users";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <div className="page">
        <div className="user_container">
          <LeftPanel setOpenMenu={setOpenMenu} openMenu={openMenu} />

          <div className="user_nav">
            <UserTop setOpenMenu={setOpenMenu} openMenu={openMenu} />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
