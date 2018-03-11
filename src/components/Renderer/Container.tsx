import * as React from 'react';

interface Props {
  width?: string | number;
  height?: string | number;

  children?: React.ReactNode;
}

const Container: React.SFC<Props> = (props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"

    {...props}
  >
    {props.children}
  </svg>
);

export default Container;