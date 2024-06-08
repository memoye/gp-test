import { useState } from 'react';
import { MenuIcon, SearchIcon } from 'lucide-react';

import { SidePanel } from '../side-panel';
import { Navigate, Outlet } from 'react-router-dom';
import { UserProfile } from '../user-profile';
import useAuth from '../../hooks/useAuth';

export type InAppLayoutContextType = {
  handleProfile: (action?: 'open' | 'close') => void;
  handleSidePanel: (action?: 'open' | 'close') => void;
  profileOpen: boolean;
  sidePanelOpen: boolean;
};

export const InAppLayout = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { isAuthenticated } = useAuth();

  function handleSidePanel(action?: 'open' | 'close') {
    switch (action) {
      case 'open':
        setSidePanelOpen(true);
        break;
      case 'close':
        setSidePanelOpen(false);
        break;
      default:
        setSidePanelOpen((prev) => !prev);
        break;
    }
  }

  function handleProfile(action?: 'open' | 'close') {
    switch (action) {
      case 'open':
        setProfileOpen(true);
        break;
      case 'close':
        setProfileOpen(false);
        break;
      default:
        setProfileOpen((prev) => !prev);
        break;
    }
  }

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="md:flex">
      <div className="sticky top-0 z-50 max-h-svh">
        <SidePanel open={sidePanelOpen} setOpen={setSidePanelOpen} />
      </div>
      <div className="w-full">
        <header
          className={`lgr:hidden ${
            !profileOpen && 'sticky top-0'
          } z-20 flex h-16 items-center justify-between bg-white px-5 py-3 transition-[top] duration-150`}
        >
          <div className="flex items-center gap-2 text-foreground-light">
            <button className="p-2 md:hidden" onClick={() => handleSidePanel()}>
              <MenuIcon />
            </button>
            <button className="p-2">
              <SearchIcon />
            </button>
          </div>

          <div className="flex items-center gap-3">
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
            } satisfies InAppLayoutContextType
          }
        />
      </div>

      <aside className="40 sticky top-0 max-h-svh">
        <UserProfile open={profileOpen} setOpen={setProfileOpen} />
      </aside>
    </div>
  );
};
