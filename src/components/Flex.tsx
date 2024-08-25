import { CSSProperties, ReactNode } from 'react';

interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: CSSProperties;
  className?: string; // Optional, in case you want to pass custom classes
}

function Flex({
                children,
                direction = 'row',
                justify = 'flex-start',
                align = 'stretch',
                wrap = 'nowrap',
                style = {},
                className = '',
                ...props
              }: FlexProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
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
