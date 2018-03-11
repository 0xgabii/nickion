import * as React from 'react';

interface Props {
  cx?: string | number;
  cy?: string | number;

  r?: string | number;

  transform?: string;

  style?: object;
}

const Circle: React.SFC<Props> = (props) => (
  <circle {...props} />
);

export default Circle;
