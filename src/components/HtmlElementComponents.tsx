export const P: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  );
};
export const H2: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h2
      className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    >
      {children}
    </h2>
  );
};
export const H1: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({
  children,
  ...props
}) => {
  return (
    <h1
      className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      {...props}
    >
      {children}
    </h1>
  );
};

export const UL: React.FC<React.HTMLProps<HTMLUListElement>> = ({
  children,
  ...props
}) => {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  );
};
