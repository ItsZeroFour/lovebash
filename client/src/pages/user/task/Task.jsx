import React from "react";
import LeftPanel from "../../../components/left_panel/LeftPanel";
import UserTop from "../../../components/user_top/UserTop";
import TaskMain from "../../../components/user/task/TaskMain";

const Task = ({ setOpenMenu, openMenu }) => {
  return (
    <section className="user_container">
      <LeftPanel setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="user_nav">
        <UserTop setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <TaskMain />
      </div>
    </section>
  );
};

export default Task;
