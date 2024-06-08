type ProgressBarProps = {
  value: number;
  max: number;
  className?: string;
  barClassName?: string;
  valueClassName?: string;
  showValue?: boolean;
};

export const ProgressBar = ({
  value,
  max,
  barClassName,
  valueClassName,
  className,
  showValue,
}: ProgressBarProps) => {
  const percentageValue = (value / max) * 100;

  return (
    <>
      <div
        className={`w-full overflow-hidden  ${
          !className?.split(" ").includes(" h-") && "h-1"
        } ${className}`}
      >
        <div
          className={`h-full ${barClassName}`}
          style={{ width: `${percentageValue}%` }}
        />
      </div>
      {showValue && <p className={valueClassName}>{percentageValue}%</p>}
    </>
  );
};
