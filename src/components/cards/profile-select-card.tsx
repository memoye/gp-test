import { ChevronsUpDownIcon } from "lucide-react";

export const ProfileSelectCard = () => {
  return (
    <section className="flex cursor-pointer items-center justify-between p-4 gap-2 bg-primary-lighter rounded-md">
      <div className="flex gap-2">
        <div className="size-10 flex items-center justify-center overflow-hidden bg-[#ECD348] rounded-full">
          <img
            className="w-full aspect-square rounded-full"
            src="/images/user-wh.png"
            alt="user"
          />
        </div>
        <p className="flex flex-col gap-0.5 mr-2">
          <strong className="font-medium text-sm tracking-wide">
            Dlex Designs
          </strong>
          <span className="text-white/[0.42]">general team</span>
        </p>
      </div>

      <ChevronsUpDownIcon size={18} />
    </section>
  );
};
