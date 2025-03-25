import { useState } from "react";
import LeftPanel from "./components/left_panel/LeftPanel";
import UserTop from "./components/user_top/UserTop";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import UserTask from "./pages/user_task/UserTask";
import Modules from "./pages/modules/Modules";

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
              <Route path="/user/:id" element={<User />} />
              <Route path="/user/task/:id" element={<UserTask />} />
              <Route path="/modules" element={<Modules />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
