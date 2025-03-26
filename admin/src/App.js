import { useState } from "react";
import LeftPanel from "./components/left_panel/LeftPanel";
import UserTop from "./components/user_top/UserTop";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import UserTask from "./pages/user_task/UserTask";
import Modules from "./pages/modules/Modules";
import CreateModule from "./pages/create_module/CreateModule";
import Tasks from "./pages/tasks/Tasks";
import CreateTask from "./pages/create_task/CreateTask";
import FileStorage from "./pages/file_storage/FileStorage";

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
              <Route path="/module/create" element={<CreateModule />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/task/create" element={<CreateTask />} />
              <Route path="/file-storage" element={<FileStorage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
