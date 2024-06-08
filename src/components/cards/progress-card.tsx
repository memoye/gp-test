import { ChevronRight } from "lucide-react";
import { CardContainer } from "../common/card-container";
import { ProgressBar } from "../common/progress-bar";

export const ProgressCard = () => {
  return (
    <CardContainer
      footer={
        <button className="ml-auto gap-2 font-semibold flex text-sm items-center">
          <span className="text-action/90">Explore more</span>
          <ChevronRight className="text-card size-4 " />
        </button>
      }
      className="space-y-4"
    >
      <h2 className="font-medium mb-6 text-foreground/90">Overall progress</h2>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-foreground text-2xl tracking-wider max-w-48 text-balance">
            German for beginners
          </h3>

          <div className="size-8 flex items-center justify-center p-2 rounded-full shadow-md shadow-foreground-lighter/15">
            <img src="/images/flag-gm.png" />
          </div>
        </div>

        <ProgressBar
          value={75}
          max={100}
          className="bg-muted h-2 rounded-lg w-full"
          barClassName="bg-card"
          valueClassName="text-base font-medium mt-3"
          showValue
        />
      </div>
    </CardContainer>
  );
};
