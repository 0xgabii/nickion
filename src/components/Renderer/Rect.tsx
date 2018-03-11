import * as React from 'react';

interface Props {
  x?: number;
  y?: number;

  rx?: number;
  ry?: number;

  width?: string | number;
  height?: string | number;

  style?: object;
}

const Rect: React.SFC<Props> = (props) => (
  <rect {...props} />
);

export default Rect;
