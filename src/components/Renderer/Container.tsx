import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Container: React.SFC<Props> = ({
  width,
  height,
  children
}) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    
    width={width}
    height={height}
  >
    {children}
  </svg>
);

export default Container;