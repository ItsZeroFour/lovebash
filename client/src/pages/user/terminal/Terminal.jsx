import React from "react";
import LeftPanel from "../../../components/left_panel/LeftPanel";
import UserTop from "../../../components/user_top/UserTop";
import TerminalMain from "../../../components/user/terminal/TerminalMain";

const Terminal = ({ setOpenMenu, openMenu }) => {
  return (
    <section className="user_container">
      <LeftPanel setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="user_nav">
        <UserTop setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <TerminalMain />
      </div>
    </section>
  );
};

export default Terminal;
