import React from "react";
import LeftPanel from "../../../components/left_panel/LeftPanel";
import UserTop from "../../../components/user_top/UserTop";
import CompletingTaskMain from "../../../components/user/completing_task_2/CompletingTaskMain";

const CompletingTask2 = ({ setOpenMenu, openMenu }) => {
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

export default CompletingTask2;
