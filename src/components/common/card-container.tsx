type BigCardContainerProps = {
  className?: string;
  border?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
};

export const CardContainer = ({
  className,
  border = true,
  children,
  footer,
  onClick,
}: BigCardContainerProps) => {
  return (
    <section
      onClick={onClick}
      className={`gap-1.5 flex rounded-md ${border && "border"} ${
        !footer && "p-6"
      } ${className} ${
        !className?.split(" ").includes("flex-row") &&
        "flex-col justify-between"
      }`}
    >
      {footer ? <div className="p-6">{children}</div> : children}

      {footer && <div className={`p-6 ${border && "border-t"}`}>{footer}</div>}
    </section>
  );
};
