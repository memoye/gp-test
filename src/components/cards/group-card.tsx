import { BellIcon, ChevronRight } from 'lucide-react';
import { CardContainer } from '../common/card-container';

export const GroupCard = () => {
  return (
    <CardContainer className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="font-medium text-foreground/90">Group info</h2>
          <p className="text-sm text-foreground-lighter">
            13 Students in the group
          </p>
        </div>

        <button>
          <BellIcon className="size-5 text-foreground" />
        </button>
      </div>

      <CardContainer className="bg-accent-light text-white">
        <div className="flex items-center justify-between">
          <div className="space-y-2 text-sm">
            <h2 className="font-medium tracking-wide text-white">Group info</h2>
            <p className="max-w-[200px] text-pretty text-white/[0.42]">
              4 students from your group online now
            </p>
          </div>

          <button>
            <ChevronRight className="size-5" />
          </button>
        </div>
      </CardContainer>

      <div className="space-y-2">
        <h2 className="font-medium text-foreground/90">Today&apos;s lesson</h2>
        <p className="text-sm text-foreground-light">unit 6 - Article</p>
      </div>
    </CardContainer>
  );
};
