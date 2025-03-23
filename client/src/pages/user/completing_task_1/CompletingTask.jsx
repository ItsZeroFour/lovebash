import React from "react";
import LeftPanel from "../../../components/left_panel/LeftPanel";
import UserTop from "../../../components/user_top/UserTop";
import CompletingTaskMain from "../../../components/user/completing_task_1/CompletingTaskMain";

const CompletingTask = ({ setOpenMenu, openMenu }) => {
  return (
    <section className="user_container">
      <LeftPanel setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="user_nav">
        <UserTop setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <CompletingTaskMain />
      </div>
    </section>
  );
};

export default CompletingTask;
