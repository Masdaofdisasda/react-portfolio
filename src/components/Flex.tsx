import { CSSProperties, ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: 1 | 2 | 3  | 4 | 5;
  style?: CSSProperties;
  className?: string; // Optional, in case you want to pass custom classes
}
const gapValues = {
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
};

function Flex({
                children,
                direction = 'row',
                justify = 'flex-start',
                align = 'stretch',
                wrap = 'nowrap',
                gap = 1,
                style = {},
                className = '',
                ...props
              }: FlexProps): ReactNode {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        gap: gapValues[gap],
        ...style,
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export default Flex;
