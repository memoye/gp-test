import { useLayoutContext } from '../../hooks/useLayoutContext';

type PageContainerProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  title: string;
};

export const PageContainer = ({
  children,
  className,
  containerClassName,
}: PageContainerProps) => {
  const { profileOpen } = useLayoutContext();

  return (
    <main className={`flex-1 py-10 lg:py-10 ${containerClassName}`}>
      <h1
        className={`px-6 py-4 text-xl ${
          profileOpen ? '-top-18' : 'sticky top-16 lgr:top-0'
        } z-20 bg-white/80 font-bold text-foreground backdrop-blur-lg transition-[top] lg:text-3xl`}
      >
        Progress Dashboard
      </h1>
      <div className={className}>{children}</div>
    </main>
  );
};
