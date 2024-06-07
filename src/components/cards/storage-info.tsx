export const StorageInfo = () => {
  return (
    <section className="min-w-14 p-4 rounded-md bg-purple-700">
      <p className="flex items-center justify-between">
        <strong>Storage</strong> <button>Upgrade</button>
      </p>
      <p className="flex items-center justify-between">
        <strong>3.4 GB</strong> <span>of 15 GB</span>
      </p>

      <progress value={3.4} max={15} className="mt-3 inline-block w-full h-1" />
    </section>
  );
};
