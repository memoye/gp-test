import { ProgressBar } from "../common/progress-bar";

export const StorageInfo = () => {
  return (
    <section className="min-w-14 p-4 rounded-md bg-primary-light tracking-wider ">
      <p className="flex mb-1.5 text-xs items-center justify-between">
        <strong className="font-medium">Storage</strong>{" "}
        <button className="text-[#CACCF7]  group">
          <span className="animated-underline">Upgrade</span>
        </button>
      </p>
      <p className="flex text-sm items-center gap-1">
        <strong className="font-medium">3.4 GB</strong>{" "}
        <span className="text-white/40">of 15 GB</span>
      </p>

      <ProgressBar
        className="bg-[#4544DA] mt-2.5"
        barClassName="bg-[#CACCF7]"
        value={3.4}
        max={15}
      />
    </section>
  );
};
