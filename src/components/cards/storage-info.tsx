import { ProgressBar } from '../common/progress-bar';

export const StorageInfo = () => {
  return (
    <section className="min-w-14 rounded-md bg-primary-light p-4 tracking-wider">
      <p className="mb-1.5 flex items-center justify-between text-xs">
        <strong className="font-medium">Storage</strong>{' '}
        <button className="group text-[#CACCF7]">
          <span className="animated-underline">Upgrade</span>
        </button>
      </p>
      <p className="flex items-center gap-1 text-sm">
        <strong className="font-medium">3.4 GB</strong>{' '}
        <span className="text-white/40">of 15 GB</span>
      </p>

      <ProgressBar
        className="mt-2.5 bg-[#4544DA]"
        barClassName="bg-[#CACCF7]"
        value={3.4}
        max={15}
      />
    </section>
  );
};
