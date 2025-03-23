import React from "react";
import LeftPanel from "../../../components/left_panel/LeftPanel";
import UserTop from "../../../components/user_top/UserTop";
import SettingsMain from "../../../components/user/settings/SettingsMain";

const Settings = ({ setOpenMenu, openMenu }) => {
  return (
    <section className="user_container">
      <LeftPanel setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="user_nav">
        <UserTop setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <SettingsMain />
      </div>
    </section>
  );
};

export default Settings;
