import { ChevronRight } from 'lucide-react';
import { CardContainer } from '../common/card-container';
import { ProgressBar } from '../common/progress-bar';

export const ProgressCard = () => {
  return (
    <CardContainer
      footer={
        <button className="ml-auto flex items-center gap-2 text-sm font-semibold">
          <span className="text-action/90">Explore more</span>
          <ChevronRight className="size-4 text-card" />
        </button>
      }
      className="h-full space-y-4"
    >
      <h2 className="mb-6 font-medium text-foreground/90">Overall progress</h2>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="max-w-48 text-balance text-2xl font-medium tracking-wider text-foreground">
            German for beginners
          </h3>

          <div className="flex size-14 items-center justify-center rounded-full p-2 shadow-md shadow-foreground-lighter/15">
            <img src="/images/flag-gm.png" className="mt-px w-2/3 min-w-6" />
          </div>
        </div>

        <ProgressBar
          value={75}
          max={100}
          className="h-2 w-full rounded-lg bg-muted"
          barClassName="bg-card"
          valueClassName="text-base font-medium mt-3"
          showValue
        />
      </div>
    </CardContainer>
  );
};
