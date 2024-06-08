import { ProfileSelectCard } from "./cards/profile-select-card";
import { StorageInfo } from "./cards/storage-info";
import { TeamSelectCard } from "./cards/team-select-card";
import { Nav } from "./nav";

export function SidePanel({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  function close() {
    console.log("close");
    setOpen(false);
  }

  return (
    <>
      <div
        className={`min-h-svh z-50 py-2 px-6 bg-primary lg:text-sm
    text-white max-md:transition-all w-fit md:min-w-[17rem] flex flex-col justify-between max-md:fixed max-top-0 ${
      open ? "max-md:left-0" : "max-md:-left-full"
    }`}
      >
        <div className="space-y-3">
          <img src="/logo.svg" width={100} />
          <div className="h-px bg-[#E6E7E9] opacity-30 my-6 lg:my-4" />
          <TeamSelectCard />
          <Nav />
        </div>

        <div className="flex flex-col gap-2">
          <StorageInfo />

          <div className="h-px bg-black/30 my-1.5" />

          <ProfileSelectCard />
        </div>
      </div>
      {open && (
        <div
          onClick={close}
          className="fixed block md:hidden inset-0 bg-black/30"
          aria-description="close side panel"
        />
      )}
    </>
  );
}
