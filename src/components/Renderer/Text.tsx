import * as React from 'react';

interface Props {
  x?: string | number;
  y?: string | number;
  dx?: string | number;
  dy?: string | number;

  textLength?: string | number;

  textAnchor?: 'start' | 'middle' | 'end';
  alignmentBaseline?: 'baseline' | 'middle' | 'central' | 'hanging';

  style?: object;

  text?: string;
}

const Text: React.SFC<Props> = (props) => (
  <text {...props}>
    {props.text}
  </text>  
);

export default Text;
