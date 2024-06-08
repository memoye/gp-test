import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { CardContainer } from '../common/card-container';

type TodoItemProps = {
  color: 'blue' | 'red';
  title: string;
  description: string;
  completed: boolean;
  time: string;
};

export const TodoItemCard = ({
  color,
  completed,
  description,
  time,
  title,
}: TodoItemProps) => {
  const StatusIcon = completed ? CheckCircle2 : AlertCircle;

  return (
    <CardContainer
      border={false}
      className={`space-y-6 rounded-lg ${
        color === 'red' ? 'bg-muted' : 'bg-[#E1F5FD]'
      }`}
    >
      <div className="space-y-2 text-sm">
        <StatusIcon
          className={`${
            completed
              ? color === 'red'
                ? 'text-accent'
                : 'text-primary'
              : 'text-foreground/90'
          } size-5`}
        />
        <h2 className="font-medium text-foreground">{title}</h2>
        <p className="text-foreground-light">{description}</p>
      </div>

      <p className="text-sm font-medium">{time}</p>
    </CardContainer>
  );
};
