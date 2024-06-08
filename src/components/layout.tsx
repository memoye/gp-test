import { useState } from "react";
import { SidePanel } from "./side-panel";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./user-profile";

export const Layout = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="md:flex">
      <div className="max-h-svh sticky top-0 z-50">
        <SidePanel open={sidePanelOpen} setOpen={setSidePanelOpen} />
      </div>
      <div className="w-full">
        <header className="lg:hidden">
          <button onClick={() => setSidePanelOpen(true)}>open sidepanel</button>
          <button onClick={() => setProfileOpen(true)}>open profile</button>
        </header>

        <Outlet />
      </div>

      <aside className="max-h-svh sticky top-0 40">
        <UserProfile open={profileOpen} setOpen={setProfileOpen} />
      </aside>
    </div>
  );
};
