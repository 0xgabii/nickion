import * as React from 'react';

interface Props {
  x: number;
  y: number;
  text?: string;
}

const Text: React.SFC<Props> = ({
  x,
  y,
  text,
}) => (
  <text
    x={x}
    y={y}
  >
    {text}
  </text>  
);

export default Text;
