import { ChevronsUpDownIcon } from 'lucide-react';

export const TeamSelectCard = () => {
  return (
    <section className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-primary-lighter p-4">
      <div className="flex gap-2">
        <div className="flex size-10 items-center justify-center rounded-full bg-[#ECD348]">
          DW
        </div>
        <p className="mr-2 flex flex-col gap-0.5">
          <strong className="text-sm font-medium tracking-wide">
            Dlex Designs
          </strong>
          <span className="text-white/[0.42]">general team</span>
        </p>
      </div>

      <ChevronsUpDownIcon size={18} />
    </section>
  );
};
