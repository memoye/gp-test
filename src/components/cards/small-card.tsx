import { ChevronRight, Dot } from 'lucide-react';
import { CardContainer } from '../common/card-container';

type SmallCardProps = {
  title: string;
  subtitle: string;
  icon?: typeof Dot;
  action?: () => void;
};

export const SmallCard = ({
  title,
  subtitle,
  icon: Icon,
  action,
}: SmallCardProps) => {
  return (
    <CardContainer className="rounded-xl">
      <div className="flex items-center justify-between gap-4">
        {Icon && (
          <div className="flex size-10 items-center justify-center rounded-full p-2 shadow-md shadow-foreground-lighter/20">
            <Icon className="text-card" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="font-medium text-foreground/90">{title}</h2>
          <p className="text-xs text-foreground-lighter">{subtitle}</p>
        </div>

        <button onClick={action} className="text-card">
          <ChevronRight />
        </button>
      </div>
    </CardContainer>
  );
};
