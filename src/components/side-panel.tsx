import { ProfileSelectCard } from './cards/profile-select-card';
import { StorageInfo } from './cards/storage-info';
import { TeamSelectCard } from './cards/team-select-card';
import { Nav } from './nav';

export function SidePanel({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function close() {
    setOpen(false);
  }

  return (
    <>
      <div
        className={`max-top-0 z-50 flex min-h-svh w-fit flex-col justify-between bg-primary px-6 py-2 text-white max-md:fixed max-md:transition-all md:min-w-[17rem] lg:text-sm ${
          open ? 'max-md:left-0' : 'max-md:-left-full'
        }`}
      >
        <div className="space-y-3">
          <img src="/logo.svg" width={100} />
          <div className="my-6 h-px bg-[#E6E7E9] opacity-30 lg:my-4" />
          <TeamSelectCard />
          <Nav />
        </div>

        <div className="flex flex-col gap-2">
          <StorageInfo />

          <div className="my-1.5 h-px bg-black/30" />

          <ProfileSelectCard />
        </div>
      </div>
      {open && (
        <div
          onClick={close}
          className="fixed inset-0 block bg-black/30 md:hidden"
          aria-description="close side panel"
        />
      )}
    </>
  );
}
