import { ChevronsUpDownIcon } from "lucide-react";

export const TeamSelectCard = () => {
  return (
    <section className="cursor-pointer flex items-center justify-between p-4 gap-2 bg-primary-lighter rounded-md">
      <div className="flex gap-2">
        <div className="size-10 flex items-center justify-center bg-[#ECD348] rounded-full">
          DW
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
