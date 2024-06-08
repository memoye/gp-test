import {
  ArrowLeftIcon,
  BookAIcon,
  Dot,
  NotebookTextIcon,
  PenIcon,
} from "lucide-react";
import { SetStateAction } from "react";
import { CardContainer } from "./common/card-container";
import { SmallCard } from "./cards/small-card";

export const UserProfile = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`min-h-svh relative bg-muted lg:bg-white z-40 top-0 py-4 max-lg:transition-all max-mw-full md:min-w-[20rem] flex flex-col justify-between ${"max-lg:fixed max-top-0"} ${
        open ? "max-lg:right-0" : "max-lg:-right-full"
      }`}
    >
      {/* back button for mobile and tablet */}
      <button
        className="absolute lg:hidden top-8 text-foreground left-6"
        onClick={() => setOpen(false)}
      >
        <ArrowLeftIcon />
      </button>

      <div className="bg-muted space-y-6 pb-3 text-foreground lg:rounded-l-lg p-6">
        <div className="relative size-12 mx-auto flex items-center justify-center">
          <img
            className="w-full rounded-full aspect-square"
            src="/images/user-wh.png"
          />
          <button className="absolute -bottom-0.5 -right-1 flex items-center justify-center size-5 text-xs tracking-[0] leading-[0] border-2 border-muted font-medium rounded-full text-white bg-action ">
            5
          </button>
        </div>
        <div className="text-center">
          <h2 className="font-medium mt-4 mb-2 text-foreground-light">
            Harrison Philips
          </h2>
          <p className="text-xs text-foreground-lighter">Business analyst</p>
        </div>

        <SmallCard
          title="Get -10% sell price"
          subtitle='for "spanish A-Z" course'
        />

        <div>
          <h3 className="font-medium mb-3 text-foreground text-lg tracking-wider text-balance">
            German for beginners
          </h3>
          <div className="space-y-2">
            <UserProgressCard
              progress={78}
              icon={PenIcon}
              color="hsl(var(--color-primary-lighter))"
              title="Grammar"
              subtitle="Learn new rules"
            />

            <UserProgressCard
              progress={78}
              icon={NotebookTextIcon}
              color="hsl(var(--color-warning))"
              title="Dictionary"
              subtitle="Learn 4 new words"
            />

            <UserProgressCard
              progress={78}
              icon={BookAIcon}
              color="#EA4C89"
              title="Reading"
              subtitle="Train your skill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type UserProgressCardProps = {
  icon: typeof Dot;
  color: string;
  title: string;
  subtitle: string;
  progress: number;
  onClick?: () => void;
};

function UserProgressCard({
  color,
  subtitle,
  title,
  icon: Icon,
  progress,
  onClick,
}: UserProgressCardProps) {
  return (
    <CardContainer onClick={onClick} className="flex-row gap-2.5">
      <div className="flex items-center gap-2">
        <p style={{ color }} className="font font-medium">
          {progress}%
        </p>

        <div
          className="text-white size-8 flex items-center justify-center rounded-md "
          style={{ backgroundColor: color }}
        >
          <Icon className="size-5" />
        </div>
      </div>

      <div>
        <h2 className="font-medium text-sm text-foreground">{title}</h2>
        <p className="text-xs text-foreground-lighter">{subtitle}</p>
      </div>
    </CardContainer>
  );
}
