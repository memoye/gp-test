import { ProfileSelectCard } from "./cards/profile-select-card";
import { StorageInfo } from "./cards/storage-info";
import { TeamSelectCard } from "./cards/team-select-card";
import { Logo } from "./logo";
import { Nav } from "./nav";

export function SidePanel() {
  return (
    <div
      className="min-h-svh py-2 px-6 bg-violet-950 lg:text-xs
    text-white max-w-[15rem] flex flex-col justify-between"
    >
      <div className="space-y-3">
        <Logo />
        <div className="h-px bg-gray-500 my-6 lg:my-4" />
        <TeamSelectCard />
        <Nav />
      </div>

      <div className="flex flex-col gap-2">
        <StorageInfo />

        <div className="h-px bg-black/30 my-4" />

        <ProfileSelectCard />
      </div>
    </div>
  );
}
