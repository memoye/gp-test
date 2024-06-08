export interface SVGCompProps extends React.SVGProps<SVGSVGElement> {
  size?: number | `${number}`;
}

export default function SVGComp({
  children,
  height,
  width,
  size,
  viewBox,
  ...props
}: SVGCompProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 24}
      height={height ?? size ?? 24}
      viewBox={viewBox ?? '0 0 24 24'}
      fill="none"
      {...props}
    >
      {children}
    </svg>
  );
}
