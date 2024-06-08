import { BellIcon, ChevronRight } from "lucide-react";
import { CardContainer } from "../common/card-container";

export const GroupCard = () => {
  return (
    <CardContainer className="space-y-5">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h2 className="font-medium text-foreground/90">Group info</h2>
          <p className="text-foreground-lighter text-sm">
            13 Students in the group
          </p>
        </div>

        <button>
          <BellIcon className="text-foreground size-5" />
        </button>
      </div>

      <CardContainer className="bg-accent-light text-white">
        <div className="flex items-center justify-between">
          <div className="space-y-2 text-sm">
            <h2 className="font-medium text-white tracking-wide">Group info</h2>
            <p className="text-white/[0.42] text-pretty max-w-[200px]">
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
        <p className="text-foreground-light text-sm">unit 6 - Article</p>
      </div>
    </CardContainer>
  );
};
