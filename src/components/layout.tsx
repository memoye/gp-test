import { useState } from "react";
import { SidePanel } from "./side-panel";
import { Outlet } from "react-router-dom";
import { UserProfile } from "./user-profile";
import { MenuIcon, SearchIcon } from "lucide-react";

export type LayoutContextType = {
  handleProfile: (action?: "open" | "close") => void;
  handleSidePanel: (action?: "open" | "close") => void;
  profileOpen: boolean;
  sidePanelOpen: boolean;
};

export const Layout = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  function handleSidePanel(action?: "open" | "close") {
    switch (action) {
      case "open":
        setSidePanelOpen(true);
        break;
      case "close":
        setSidePanelOpen(false);
        break;
      default:
        setSidePanelOpen((prev) => !prev);
        break;
    }
  }

  function handleProfile(action?: "open" | "close") {
    switch (action) {
      case "open":
        setProfileOpen(true);
        break;
      case "close":
        setProfileOpen(false);
        break;
      default:
        setProfileOpen((prev) => !prev);
        break;
    }
  }

  return (
    <div className="md:flex">
      <div className="max-h-svh sticky top-0 z-50">
        <SidePanel open={sidePanelOpen} setOpen={setSidePanelOpen} />
      </div>
      <div className="w-full">
        <header
          className={`lgr:hidden ${
            !profileOpen && "sticky top-0"
          } transition-[top] h-16 z-20 px-5 py-3 duration-150 flex items-center justify-between bg-white`}
        >
          <div className="flex items-center gap-2 text-foreground-light">
            <button className="p-2 md:hidden" onClick={() => handleSidePanel()}>
              <MenuIcon />
            </button>
            <button className="p-2">
              <SearchIcon />
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <div>
              <img src="/images/flag-en.png" className="max-w-8" />
            </div>

            <button onClick={() => handleProfile()}>
              <img src="/images/user-bl.png" className="size-10" />
            </button>
          </div>
        </header>

        <Outlet
          context={
            {
              profileOpen,
              sidePanelOpen,
              handleProfile,
              handleSidePanel,
            } satisfies LayoutContextType
          }
        />
      </div>

      <aside className="max-h-svh sticky top-0 40">
        <UserProfile open={profileOpen} setOpen={setProfileOpen} />
      </aside>
    </div>
  );
};
