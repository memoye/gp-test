import {
  ArrowLeftIcon,
  BookAIcon,
  Dot,
  NotebookTextIcon,
  PenIcon,
} from 'lucide-react';
import { SetStateAction } from 'react';
import { CardContainer } from './common/card-container';
import { SmallCard } from './cards/small-card';

export const UserProfile = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`max-mw-full relative top-0 z-[50] flex min-h-dvh flex-col justify-between bg-muted py-4 max-lgr:transition-all max-xs:w-full md:min-w-[20rem] lg:bg-muted ${'max-top-0 max-lgr:fixed'} ${
        open ? 'max-lgr:right-0' : 'max-lgr:-right-full'
      }`}
    >
      {/* back button for mobile and tablet */}
      <button
        className="absolute left-6 top-8 text-foreground lg:hidden"
        onClick={() => setOpen(false)}
      >
        <ArrowLeftIcon />
      </button>

      <div className="space-y-6 bg-muted p-6 pb-3 text-foreground lg:rounded-l-lg">
        <div className="relative mx-auto flex size-12 items-center justify-center">
          <img
            className="aspect-square w-full rounded-full"
            src="/images/user-wh.png"
          />
          <button className="absolute -bottom-0.5 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-muted bg-action text-xs font-medium leading-[0] tracking-[0] text-white">
            5
          </button>
        </div>
        <div className="text-center">
          <h2 className="mb-2 mt-4 font-medium text-foreground-light">
            Harrison Philips
          </h2>
          <p className="text-xs text-foreground-lighter">Business analyst</p>
        </div>

        <SmallCard
          title="Get -10% sell price"
          subtitle='for "spanish A-Z" course'
        />

        <div>
          <h3 className="mb-3 text-balance text-lg font-medium tracking-wider text-foreground">
            Course progress
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
          className="flex size-8 items-center justify-center rounded-md text-white"
          style={{ backgroundColor: color }}
        >
          <Icon className="size-5" />
        </div>
      </div>

      <div>
        <h2 className="text-sm font-medium text-foreground">{title}</h2>
        <p className="text-xs text-foreground-lighter">{subtitle}</p>
      </div>
    </CardContainer>
  );
}
